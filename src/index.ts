import server from './core/server'

const port = 3000

server().listen(port, () => {
    console.log(`Listening on port ${port}`)
})
