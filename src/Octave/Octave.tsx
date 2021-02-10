import React from 'react';

//Components
import Note from '../Note/Note';
import ResetButton from '../ResetButton/ResetButton'

//Types
import {NoteType, AudioProps} from '../helpers'

//Styles
import {OctaveWrapper} from './Octave.styles'

type Props = {
  notes: NoteType[];
  handleClick: (e: React.MouseEvent<HTMLButtonElement>, loop: AudioProps) => void;
  resetSounds: 
  ( e: React.MouseEvent<HTMLButtonElement>,loop: boolean) => void;
}

const Octave: React.FC<Props> = ({notes, handleClick, resetSounds}) => {

  return(
   <OctaveWrapper>
     <div className="octave_content">
      <ResetButton resetSounds={resetSounds} />
     {notes.map((note) => (
        <Note 
          key={note.note} 
          note={note.note}
          color={note.color}
          handleClick={handleClick}
          />
     )
      
     )}

     </div>
   </OctaveWrapper>
  )
}

export default Octave;