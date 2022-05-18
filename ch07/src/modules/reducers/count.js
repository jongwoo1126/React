const initialState = {count: 1}

function countReducer(state=initialState, action) {
    
    switch(action.type){
        
        case 'push': {
            return {count: state.count + 1}
        }
        default:
            return state
    }
}

export default countReducer