import React, {useState} from 'react';


//Styles
import {NoteWrapper,WhiteKey, BlackKey, LoopButton, BlackKeyWrapper} from './Note.styles'

//Types
import {AudioProps} from '../helpers'

type Props = {
  note: string;
  color: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>, audioProps: AudioProps) => void;
  
}

const Note: React.FC<Props> = ({note, color, handleClick}) => {

  const [loop, setLoop] = useState(false);


  if(color === 'white'){
    return (
    <NoteWrapper>
    <LoopButton className="loop_button" 
    value="loop" 
    style={{backgroundColor: loop ? '#ad4f4f' :'rgb(60 76 57)'}}
    onClick={() => {
      setLoop(!loop)
    }} />   
    <WhiteKey value={note} onClick={(e) => handleClick(e, {loop})} />
    </NoteWrapper>
    
    ) 
  }

  if(color === 'black'){
    return (
    <BlackKeyWrapper>
    <LoopButton className="loop_button" 
    style={{backgroundColor: loop ? '#ad4f4f' :'rgb(60 76 57)'}}
    value="loop" onClick={() => {
      setLoop(!loop)
    }} />
    <BlackKey value={note} onClick={(e) => handleClick(e, {loop})} />
    </BlackKeyWrapper>
    
    )
  }

  return <div>No keys yet</div>

}

export default Note;