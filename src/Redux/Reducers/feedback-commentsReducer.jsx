export default function feedbackComments(state = '', action) {

    switch(action.type) {
        case 'SET_COMMENTS_FOR_FEEDBACK':
            return action.payload
    }

    return state;
}