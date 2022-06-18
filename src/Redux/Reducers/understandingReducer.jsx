export default function understandingRating(state = 0, action) {
    
    switch(action.type){
        case 'SET_UNDERSTANDING_RATING':
            return action.payload
        case 'SUBMITTED_CLEAR_STATE':
            return state = 0
    }
    
    return state;
}