/* A ideia dessa classe é ser um padrão para as requisições Http utilizando o Axios
   Nela também foi setado o token de autenticação para todas as requisições após o login
   Assim foi utilizado a ideia de localStorage para armazenar o token de autenticação
*/

import axios from "axios";

const BASEURL = 'http://localhost:3086/';

export default axios.create({
    baseURL: BASEURL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Access-Control-Allow-Origin': '*'
    }
});