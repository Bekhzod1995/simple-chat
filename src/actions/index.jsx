export const LOAD_CHANNELS = 'LOAD_CHANNELS';

export const loadChannels = () => {
    // let temp = Object.entries(window.gon);
    // console.log("Current we are in loadChannels",temp)
    // console.log("Current we are in loadChannels no object",window.gon)

    // let temp = Object.entries(window.gon.channels);
    // console.log("In actions, defining type: ", typeof(temp));
    // console.log("In actions: ", temp);
    return {type: LOAD_CHANNELS, payload: window.gon}
}

