import styled, { keyframes } from 'styled-components';

export const displayInline = {
  display: 'flex',
};

export const sendIconStyle = {
  display: 'flex',
  justifyContent: 'center',
};

export const inputTextStyle = {
  width: '100%',
  padding: '6px 10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxSizing: 'border-box',
};
export const submitStyle = {
  width: '30%',
  height: '35px',
  backgroundColor: '#4CAF50',
  color: 'white',
  margin: '0 0',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};


export const loadingKeyframe = keyframes`
  0% {
    transform: scale(0.1);
    -webkitTransform: scale(0.1);
  }
  100% {
    transform: scale(1.5);
    -webkit-transform: scale(1.5);
  }`;

export const Loader = styled.div`{
    margin-left: 8px;
    width: 10px;
    height: 10px;
    border-Radius: 5px;
    background-Color: white;
    animation: ${loadingKeyframe} 0.8s ease-in-out;
    animation-iteration-count: infinite;
  }`;
