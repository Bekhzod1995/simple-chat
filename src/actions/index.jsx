export const LOAD_CHANNELS = 'LOAD_CHANNELS';

export const loadChannels = () => {
    console.log('In Action: ', window.gon)
    return {type: LOAD_CHANNELS, payload: window.gon}
}

