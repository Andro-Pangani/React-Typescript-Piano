import styled from 'styled-components'

export const NoteWrapper = styled.div`
position: relative;
display: inline-block;
width: 50px;
height: 300px;

.loop_button{
  position: absolute;
  top: 100%;
  margin-top: 25px;
  margin-left: 18px;
  width: 20px;
  height: 20px;

}

`

export const WhiteKey = styled.button `
  width: 50px;
  background: white;
  height: 300px;
  border: 1px solid gray;
  margin: 1px;
  box-shadow: 2px 2px 2px gray;
  border-radius: 3px;
  
    outline: none;

  :active{
    background: lightblue;
    box-shadow: 0 0;
  }
`

export const BlackKeyWrapper = styled.div`
  position: absolute;
  display: inline-block;
  margin: 1px;
  margin-left: -15px;
  width: 30px;
  height: 200px;
  z-index: 2;

  .loop_button{
    position: absolute;
    margin-top: -25px;
    margin-left: 6px;
  }

` 



export const BlackKey = styled.button `
  width: 100%;
  height: 100%;
  border-radius: 3px;
  background: black;


  :active{
    background: lightblue;
  }
`

export const LoopButton = styled.button`
position: relative;
width: 20px;
height: 20px;
outline: none;
background: rgb(60 76 57);

`