import Axios from "axios";
import backend from './backendIP';


const baseAPI = Axios.create({
    baseURL: `${backend.IP}/hercules/`
});


export { baseAPI };
