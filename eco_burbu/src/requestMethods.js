import axios from "axios";

const BASE_URL = "https://tiendaburbuletas.social:5000/api/"
//const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzQwYzczMjllYjVhZDJlODcxZDExYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzU3ODI5MiwiZXhwIjoxNjQ3ODM3NDkyfQ.-fcgeBwkVGOWFLQTBmL3QDPvS9geLMIKR6kSb4I1q_M"


export const publicRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
        'Content-Type': 'application/json',
    },
});
/*export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
});
*/


//EL TOKEN SE PONE MANUAL PARA PRUEBAS PERO SE DEBE VOLVER DINAMICO CON ELPROCESO DEL LOGIN, ESTA PENDIENTE HACERLO CON REDUX