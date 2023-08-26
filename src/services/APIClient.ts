

import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "97da0ab78f81434c85f6a731c5674cff"
    }
})

class APIClient<T>{
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    getAll = () => {
        return axiosInstance.get<T[]>(this.endpoint)
        .then(res => res.data)
    }

    post = (data: T) =>{
        return axiosInstance.post<T>(this.endpoint, data)
        .then(res => res.data)
    }
}

export default APIClient;