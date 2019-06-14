import base from '../http'


export function getBanner(){
    return base.get(`/banner?type=2`)
}