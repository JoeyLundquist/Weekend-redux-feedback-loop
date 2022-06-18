export default function understandingRating(state = 0, action) {
    
    switch(action.type){
        case 'SET_UNDERSTANDING_RATING':
            return action.payload
    }
    
    return state;
}