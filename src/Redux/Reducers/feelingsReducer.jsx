//Exporting reducer to store
export default  function feelingsRating(state = 0, action) {
    //Switch statement to set state or clear state
    switch(action.type){
        case 'SET_FEELING_RATING':
            return action.payload
        case 'SUBMITTED_CLEAR_STATE':
            return state = 0
    }
    
    return state
}

