import axios from "axios";
import {SET_CURRENT_PAGE, SET_IS_FETCHING, SET_REPOS} from "./reposReducer";





 export const getRepos = (searchQuery= "stars:%3E1", currentPage, perPAge) => {
     if(searchQuery=== ''){
         searchQuery = "stars:%3E1"
     }
    return async (dispatch) => {
        dispatch(isLoadAC(true))
        const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPAge}&page=${currentPage}`)
        dispatch(setRepoAC(response.data))
        dispatch(isLoadAC(false))
    }
}

export const getCurrentRepo =  async (userName, repoName, setRepo) => {
    const response = await axios.get(`https://api.github.com/repos/${userName}/${repoName}`)
    console.log(response.data)
    setRepo(response.data)
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

export const setCurrentPageAC = (page) => {
     return{
         type: SET_CURRENT_PAGE,
         payload: page
     }
}

