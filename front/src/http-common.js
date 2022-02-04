const BASEURL = 'http://localhost:3086/';

import axios from "axios";

export default axios.create({
    baseURL: BASEURL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer jwtsecretpassword'
    }
});