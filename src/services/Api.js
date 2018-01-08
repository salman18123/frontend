import axios from 'axios'
export default()=>{
    return axios.create({
        baseURL:`https://servers-petkart.herokuapp.com/`
    })
}