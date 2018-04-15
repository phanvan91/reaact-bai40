import * as type from './../constants/ActionType';
import * as Message from './../constants/Message';

var initialState;
initialState = Message.MSG_WELCOME;

const message = (state = initialState, action) => {
        switch (action.type){
            case type.CHANGE_MESSAGE:
                return action.message
            default : return state
        }

}


export default message;