
export const SET_REPOS = 'SET_REPOS';


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

        default:
            return state
    }

}

export default reposReducer;