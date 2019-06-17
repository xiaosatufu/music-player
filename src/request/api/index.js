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