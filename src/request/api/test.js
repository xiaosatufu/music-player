import base from '../http'


export function getTopArtists(limit=50,offset=0){
    return base.get(`/top/artists?offset=${offset}&limit=${limit}`)
}