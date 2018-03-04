import axios from 'axios'
export default()=>{
    return axios.create({
        baseURL:`https://backendpetkart.herokuapp.com/`
    })
}