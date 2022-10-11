import { RequestHandler } from 'express';
import cryptoPassword from '../../lib/crypto.password';
import User from '../../models/user';

const resetPassword: RequestHandler = async (req, res) => {

    const user = await User.findOne({
        email: req.currentUser.email,
        password: cryptoPassword(req.body.password),
    });

    if (!user) {
        return res.status(400).send({ message: 'senha inválida!' });
    }

    if(req.body.password == req.body.new_password){
        return res.status(400).send({ message: 'nova senha esta igual a senha atual!' });
    }

    if(req.body.new_password != req.body.confirm_new_password){
        return res.status(400).send({ message: 'senha nova estão diferentes!' });
    }

    try{
    user.password = cryptoPassword(req.body.new_password);

    await user.save();
    
    }catch (e){
        res.status(500).send({ message: 'Ocorreu um erro ao alterar senha!' });  
    }

  res.json({sucesso: true, message: 'senha alterada com sucesso!'});
};

export default resetPassword;
