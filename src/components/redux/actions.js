import axios from "axios";
import {SET_REPOS} from "./reposReducer";




 export const getRepos = (searchQuery= "stars:%3E1") => {
    return async (dispatch) => {
        const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars`)
        dispatch(setRepoAC(response.data))
    }
}


export const setRepoAC = (rep) => {
     return {
         type: SET_REPOS,
         payload: rep
     }
}

