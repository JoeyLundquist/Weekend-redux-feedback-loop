export default  function feelingsRating(state = 0, action) {
    
    switch(action.type){
        case 'SET_FEELING_RATING':
            return action.payload
    }
    
    return state
}
