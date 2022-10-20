import axios from "axios";

const myAxios = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 5000,
})

export const postEngineMove = move => {
    const data = {
        from: move.from,
        to: move.to
    }
    myAxios.post("/api/users", {
        "name": data.from,
        "job": data.to
    }).then(res=>{
        console.log(res)
    }).catch(err=>{
        console.log(err)
    })
}