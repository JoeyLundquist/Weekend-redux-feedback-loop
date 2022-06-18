export default function supportedRating(state = 0, action) {
    
    switch(action.type) {
        case 'SET_SUPPORTED_RATING':
            return action.payload
        case 'SUBMITTED_CLEAR_STATE':
            return state = 0
    }
    
    return state;
}