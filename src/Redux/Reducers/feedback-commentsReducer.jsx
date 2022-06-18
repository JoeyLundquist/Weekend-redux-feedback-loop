export default function feedbackComments(state = '', action) {

    switch(action.type) {
        case 'SET_COMMENTS_FOR_FEEDBACK':
            return action.payload
        case 'SUBMITTED_CLEAR_STATE':
            return state = ''
    }

    return state;
}