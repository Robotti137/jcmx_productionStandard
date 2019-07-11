import {
    get,
    post,
    deletes,
    put
} from './axios'; //导入axios实例文件中方法
import {
    requestUrl
} from '../default' // 请求URL

//注册
export const register = (data) => {
    return post(`${requestUrl}/users/register`, data);
}

//登录
export const login = (data) => {
    return post(`${requestUrl}/users/login`, data);
}

//注销
export const logout = () => {
    return post(`${requestUrl}/users/logout`);
}

//修改密码
export const changePassword = (data) => {
    return post(`${requestUrl}/users/changePassword`, data);
}

// 获取登录用户信息
export const getUserInfo = () => {
    return get(`${requestUrl}/users/userInfo`);
}

// 获取用户列表
export const getUsers = (data) => {
    return get(`${requestUrl}/users`, data);
}

// 修改用户信息
export const putUser = (id, data) => {
    return put(`${requestUrl}/users/${id}`, data);
}

// 删除用户
export const deleteUser = (id) => {
    return deletes(`${requestUrl}/users/${id}`);
}

//新增图片
export const postImage = (data) => {
    return post(`${requestUrl}/images`, data);
}

//获取图库
export const getImages = (data) => {
    return get(`${requestUrl}/images`, data);
}

// 删除图片
export const deleteImage = (id) => {
    return deletes(`${requestUrl}/images/${id}`);
}

// 获取某个类型的图片
export const getImageList = (data) => {
    return get(`${requestUrl}/images/imageList`, data);
}