import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "97da0ab78f81434c85f6a731c5674cff"
    }
})