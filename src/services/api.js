import axios from 'axios'

//https://economia.awesomeapi.com.br/json/

export const api = axios.create({
    baseURL: "https://economia.awesomeapi.com.br/json/"
})