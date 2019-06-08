import gon from 'gon';

const initialValue = {
  kanali: gon,
};

const handles = (state = initialValue, action) => {
  switch (action.type) {
    // case LOAD_CHANNELS:
    //   return {
    //     channels: action.payload,
    //   };
    default:
      return state;
  }
};

export default handles;
