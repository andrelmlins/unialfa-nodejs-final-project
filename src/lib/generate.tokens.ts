import Tokens from 'entities/tokens'
import jwt from 'jsonwebtoken'

const generateTokens = (user_id: string): Tokens => {
    const accessToken = jwt.sign({}, process.env.JWT_SECRET as string, {
        expiresIn: 86400,
        subject: user_id,
    })

    const refreshToken = jwt.sign({}, process.env.JWT_SECRET_REFRESH as string, {
        expiresIn: 86400 * 5,
        subject: user_id,
    })

    return { accessToken, refreshToken }
}

export default generateTokens
