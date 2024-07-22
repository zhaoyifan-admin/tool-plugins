import axios from "axios"

interface parmasType {
    url: string;
    data: any;
}

//get请求方式
export function get(config: parmasType) {
    return new Promise((resolve, reject) => {
        axios({
            url: config.url,
            method: "get",
            params: config.data
        })
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

//post请求方式
export function post(config: parmasType) {
    return new Promise((resolve, reject) => {
        axios({
            url: config.url,
            method: "post",
            data: config.data
        })
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

//download请求方式
export function download(config: parmasType) {
    return new Promise((resolve, reject) => {
        axios({
            url: config.url,
            method: "post",
            data: config.data,
            responseType: "blob"
        })
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}

//put请求方式
export function put(config: parmasType) {
    return new Promise((resolve, reject) => {
        axios({
            url: config.url,
            method: "put",
            data: config.data
        })
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

//deleted请求方式
export function deleted(config: parmasType) {
    return new Promise((resolve, reject) => {
        axios({
            url: config.url,
            method: "delete",
            params: config.data
        })
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

//patch请求方式
export function patch(config: parmasType) {
    return new Promise((resolve, reject) => {
        axios({
            url: config.url,
            method: "patch",
            data: config.data
        })
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}