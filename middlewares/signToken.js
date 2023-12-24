import { config } from '../config.js';

import jwt from 'jsonwebtoken';

export const signToken = (req, res, next) => {

    // console.log(req)

    const token = jwt.sign(
        req.body,
        config.secretKey,
        config.BASE_JWT_CONFIG
    )

    req.data = token
    next()
}