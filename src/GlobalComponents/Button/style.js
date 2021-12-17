import styled,{css} from 'styled-components';


function choiceButton(whichButton){
    
    const buttons = {
    normal:css`
    width:130px;
    height:52px;
    border-radius:5px;
    background-color:var(--color-neutro-primary);
    color:var(--color-primary);
    font-weight:750;
    cursor:pointer;
    `
    }
    return buttons[whichButton]
}


export const Buttons = styled.button`
    ${props => choiceButton(props.sizeButton)}
    &:hover{
        box-shadow: 0 3px 6px rgba(225, 248, 154, 0.918);
    }
`
 