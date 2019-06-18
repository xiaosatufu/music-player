import base from '../http'

/**
 * 获取banner
 */
export function getBanner(){
    return base.get(`/banner?type=2`)
}
/**
 * 获取推荐歌单
 */
export function getPersonalized(){
    return base.get(`/personalized`)
}
/**
 * 最新专辑
 */
export function getTopAlbum(offset=0,limit=30){
    return base.get(`/top/album?offset=${offset}&limit=${limit}`)
}
/**
 * 新歌速递
 */
export function getTopSong(type=0){
    return base.get(`/top/song?type=${type}`)
}
/**
 * 邮箱登录
 * @param {邮箱} email 
 * @param {密码} password 
 */
export function emailLogin(email,password){
    return base.get(`/login?email=${email}&password=${password}`)
}
/**
 * 获取用户信息
 */
export function userSubcount(){
    return base.get(`/user/subcount`)
}
/**
 * 检查登录状态
 */
export function checkLoginStatus(){
    return base.get(`/login/status`)
}
/**
 * 退出登录
 */
export function logout(){
    return base.get(`/logout`)
}