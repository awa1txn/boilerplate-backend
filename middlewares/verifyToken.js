import { config } from '../config.js';

import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(403).json({ message: 'Token is not provided' })
    }
    jwt.verify(token, config.secretKey, (err, decoded) => {
      if (err) {
        console.log(err)
        return res.status(401).json({ message: 'Unauthorized' })
      }
    
      req.user = decoded;
      next()
    })
}