import React, { useState } from 'react';

//Components
import Octave from './Octave/Octave';
//Styles
import {AppWrapper} from './App.styles';

//Types
import {notes, AudioProps} from './helpers';



const App = () => {

  const [sounds, setSounds] = useState([] as HTMLAudioElement [])

  // Reset click handler
  const resetClickHandler = 
  (
    e: React.MouseEvent<HTMLButtonElement>,
    reset: boolean) => {
    if(reset){
      sounds.map((audio: HTMLAudioElement) => {
        audio.pause();
      })
      setSounds([]);
    }
    
  }

  // Note click handler
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, audioProps: AudioProps ) => {

    const audio = new Audio(`sounds/piano_${e.currentTarget.value}.mp3`);
    // loop or not
    
    if(audioProps.loop){
      
      setSounds([...sounds, audio]);
    }
    audio.volume = 0.5;
    audio.loop = audioProps.loop;
    audio.play();
    
  }

  return(
    <AppWrapper>
      <Octave notes={notes}  
      handleClick={handleClick} 
      resetSounds={resetClickHandler}
      />
    </AppWrapper>
  )

}

export default App;
