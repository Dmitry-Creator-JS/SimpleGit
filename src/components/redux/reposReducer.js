
export const SET_REPOS = 'SET_REPOS';
export const SET_IS_FETCHING = 'SET_IS_FETCHING';


let initialState = {
    repos: [],
    isLoad: false,
}

const reposReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_REPOS:
            return {
                ...state, repos: action.payload.items
            }

        case SET_IS_FETCHING:
            return {
                ...state, isLoad: action.payload
            }

        default:
            return state
    }

}

export default reposReducer;