import request from 'supertest'
import { faker } from '@faker-js/faker'

import User from '../src/models/user'
import cryptoPassword from '../src/lib/crypto.password'

describe('login controller', () => {
    let userParams
    let newPassWordParams
    let postParams

    let token

    beforeAll(async () => {
        userParams = {
            email: faker.internet.email(),
            password: faker.internet.password(),
            name: faker.name.fullName(),
        }

        newPassWordParams = {
            password: userParams.password,
            new_password: userParams.password + 1,
            confirm_new_password: userParams.password + 1,
        }

        postParams = {
            message: faker.lorem.paragraph(1),
        }

        const user = new User({
            ...userParams,
            password: cryptoPassword(userParams.password),
        })

        await user.save()
    })

    it('deve dar erro de criação de um usuario com as mesma credenciais', async () => {
        const result = await request(globalThis.server).post('/register').send(userParams)

        expect(result.status).toBe(400)
        expect(result.body.message).toBe('Este email já está sendo utilizado')
    })

    it('Deve fazer um login com sucesso', async () => {
        const result = await request(globalThis.server).post('/login').send({
            email: userParams.email,
            password: userParams.password,
        })

        expect(result.status).toBe(200)
        token = result.body.accessToken
    })

    it('Deve fazer criação de um usuario e fazer alteração de sua senha', async () => {
        const resultNewPassWord = await request(globalThis.server)
            .post('/resetpassword')
            .auth(token, { type: 'bearer' })
            .send(newPassWordParams)
        expect(resultNewPassWord.status).toBe(200)
        expect(resultNewPassWord.body.message).toBe('senha alterada com sucesso!')
    })

    it('Deve fazer criação de um Post  adicionar comentario e um like ', async () => {
        const Post = await request(globalThis.server).post('/post').auth(token, { type: 'bearer' }).send(postParams)
        expect(Post.status).toBe(200)

        const Coment = await request(globalThis.server)
            .post('/comment')
            .auth(token, { type: 'bearer' })
            .send({ idPost: Post.body.post._id, comment: faker.lorem.word(8) })
        expect(Coment.status).toBe(200)

        const Like = await request(globalThis.server)
            .post('/like')
            .auth(token, { type: 'bearer' })
            .send({ idPost: Post.body.post._id })
        expect(Like.status).toBe(200)
    })

    it('Deve fazer listagem de um Post e listar os comentarios e likes', async () => {
        const Post = await request(globalThis.server).get('/post').auth(token, { type: 'bearer' })
        expect(Post.status).toBe(200)

        const Coment = await request(globalThis.server)
            .get('/comment')
            .auth(token, { type: 'bearer' })
            .send({ idPost: Post.body.posts['0']._id })
        expect(Coment.status).toBe(200)

        const Like = await request(globalThis.server)
            .get('/like')
            .auth(token, { type: 'bearer' })
            .send({ idPost: Post.body.posts['0']._id })
        expect(Like.status).toBe(200)
    })

    it('Deve fazer listagem de um Post  remover comentario e like e depois remover Post', async () => {
        const Post = await request(globalThis.server).get('/post').auth(token, { type: 'bearer' })
        expect(Post.status).toBe(200)

        const Coment = await request(globalThis.server)
            .delete('/comment')
            .auth(token, { type: 'bearer' })
            .send({ idPost: Post.body.posts['0']._id })
        expect(Coment.status).toBe(200)

        const Like = await request(globalThis.server)
            .delete('/like')
            .auth(token, { type: 'bearer' })
            .send({ idPost: Post.body.posts['0']._id })
        expect(Like.status).toBe(200)

        const removePost = await request(globalThis.server)
            .delete('/post')
            .auth(token, { type: 'bearer' })
            .send({ idPost: Post.body.posts['0']._id })
        expect(removePost.status).toBe(200)
    })
})
