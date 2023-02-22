import axios from 'axios'
import { heroRequest, getAllHero, getHero, heroFailed } from '../features/heroSlicer';

export const fetchAllHero = async (dispatch) => {
    dispatch(heroRequest());
    try {
        const res = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=5baa9f2295f7854984e99df78605ab54&hash=16c022fbfa73c921298efbcfdd3f8e82`)
        console.log(res.data.data.results)
        dispatch(getAllHero(res.data.data.results))
    } catch (error) {
        dispatch(heroFailed(error.message))
        console.log('error in catch')

    }
}

export const fetchOneHero = async (dispatch, name) => {
    dispatch(heroRequest());
    try {
        const res = await axios.get(`https://gateway.marvel.com/v1/public/characters?name=${name}&ts=1&apikey=5baa9f2295f7854984e99df78605ab54&hash=16c022fbfa73c921298efbcfdd3f8e82`)
        dispatch(getHero(res.data.data.results))
    } catch (error) {
        dispatch(heroFailed(error))
    }
} 