import axios from "axios";
import {SET_IS_FETCHING, SET_REPOS} from "./reposReducer";





 export const getRepos = (searchQuery= "stars:%3E1") => {
     if(searchQuery=== ''){
         searchQuery = "stars:%3E1"
     }
    return async (dispatch) => {
        dispatch(isLoadAC(true))
        const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars`)
        dispatch(setRepoAC(response.data))
        dispatch(isLoadAC(false))
    }
}


export const setRepoAC = (rep) => {
     return {
         type: SET_REPOS,
         payload: rep
     }
}

export const isLoadAC = (bool) => {
     return {
         type: SET_IS_FETCHING,
         payload: bool
     }
}

