export const LOAD_CHANNELS = 'LOAD_CHANNELS';

export const loadChannels = () => {
    console.log("In actions: ", window.gon);
    return {type: LOAD_CHANNELS, payload: window.gon}
}

