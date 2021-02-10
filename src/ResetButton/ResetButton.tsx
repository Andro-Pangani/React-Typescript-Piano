import React from 'react';

import styled from 'styled-components';

const Button = styled.button `
position: absolute;
color: #653636;
margin-top: -100px;
margin-left: 5px;
background: #2b2b2b;
font-family: Arial, Helvetica, sans-serif;
border-top-color: #585656;
border-left-color: #383434;
outline: none;

`

type Props = {
  resetSounds: (e: React.MouseEvent<HTMLButtonElement>,loop: boolean) => void;
 }

const ResetButton: React.FC<Props> = ({resetSounds}) => {

  return <Button onClick={e => resetSounds(e,true)}>RESET</Button>

}

export default ResetButton;