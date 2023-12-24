import { config } from "../config.js";

import axios from "axios";
import jwt from 'jsonwebtoken';



// export const api = async () => {
//     const token = jwt.sign(
//         {name:'John Doe'},
//         config.secretKey,
//         config.BASE_JWT_CONFIG
//         )
//     console.log(token)
//     try{
//         const res = await axios.get('http://localhost:3000/api/protected',
//         {
//             headers:{
//                 Authorization: `${token}`
//             }
//         }
//         )
//         console.log(res.data);
//     } catch(err){
//         console.log(err.response.data)
//     }
// }

// export const api = async () => {
//     try{
//         const res = await axios({
//                 method: 'post',
//                 url: 'http://localhost:3000/api/auth',
//                 data: {name: 'asd'}
//             })
//     } catch(err){
//         console.log(err.response.data)
//     }
// }

export const api = async () => {
    try{
        const res = await axios({
                method: 'post',
                url: 'http://localhost:3000/api/auth',
                data: {name: 'asd'}
            })
    } catch(err){
        console.log(err.response.data)
    }
}