

import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "97da0ab78f81434c85f6a731c5674cff"
    }
})

export interface FetchResponse<T> {
    count: number;
    next: string | null; 
    results: T[];
}

class APIClient<T>{
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    getAll = (requestConfig: AxiosRequestConfig = {}) => {
            return axiosInstance.get<FetchResponse<T>>(this.endpoint, requestConfig)
            .then(res => res.data)
    }

    post = (data: T) =>{
        return axiosInstance.post<FetchResponse<T>>(this.endpoint, data)
        .then(res => res.data)
    }

    get = (id: number | string) => {
        return axiosInstance.get<T>(this.endpoint + "/" + id)
            .then(res => res.data)
        
    }
}

export default APIClient;