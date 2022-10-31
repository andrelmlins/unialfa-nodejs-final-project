import mongoose from 'mongoose'

const { MONGO_HOST, MONGO_USERNAME, MONGO_PASSWORD, MONGO_PORT, MONGO_DB } = process.env

export default async (): Promise<void> => {
  await mongoose.connect(`mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`)
    .then(() => {
      console.log('🎲 Conexão com MongoDB realizada com sucesso!')

    })
    .catch((reason) => {
      console.log('🎲 Erro ao conectar com MongoDB: ', reason)
    })
}