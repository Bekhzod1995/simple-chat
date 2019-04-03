import { LOAD_CHANNELS } from '../actions/index';

const initialValue = {
    values : '',
    ch1: '',
    ch2: ''
}

const handles = (state = initialValue, action) => {
    switch(action.type){
        case LOAD_CHANNELS:
        return {
            ch1: action.payload.channels[0].name,
            ch2: action.payload.channels[1].name,
        };
        default :
        return state;
    }
}

export default handles;