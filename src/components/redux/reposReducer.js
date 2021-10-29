
export const SET_REPOS = 'SET_REPOS';
export const SET_IS_FETCHING = 'SET_IS_FETCHING';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';


let initialState = {
    repos: [],
    isLoad: false,
    currentPage: 1,
    perPage: 10,
    totalCount: 40,
}

const reposReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_REPOS:
            return {
                ...state, repos: action.payload.items,
                totalCount: action.payload.total_count
            }

        case SET_IS_FETCHING:
            return {
                ...state, isLoad: action.payload
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }

        default:
            return state
    }

}

export default reposReducer;