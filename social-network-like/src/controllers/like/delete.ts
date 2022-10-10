import { RequestHandler } from 'express';

import Like from '../../models/like';

const deleteLike: RequestHandler = async (req, res) => {
	const likeId = req.params.id;
  
	const like = await Like.findById(likeId);

	if (!like) {
    	return res.status(404).send({ message: 'Não foi encontrado nenhuma curtida com o identificador informado!' });
  	}

  	await Like.deleteOne({ _id: likeId });
  	
	return res.status(204);
};

export default deleteLike;
