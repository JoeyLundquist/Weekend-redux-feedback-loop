export default function supportedRating(state = 0, action) {
    
    switch(action.type) {
        case 'SET_SUPPORTED_RATING':
            return action.payload
    }
    
    return state;
}