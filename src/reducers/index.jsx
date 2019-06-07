import { LOAD_CHANNELS } from '../actions/index';

const initialValue = {
    values : '',
    ch: ''
}

const handles = (state = initialValue, action) => {
    switch(action.type){
        case LOAD_CHANNELS:
        return {
            ch: action.payload
        };
        default :
        return state;
    }
}

export default handles;