import { Button, CardImg, Row } from "react-bootstrap"
import styled from "styled-components"

export const ButtonList = styled(Button)`
    background-color: #393737;
    border: none;
    width: 45%;
    font-size: 15px;
    display: inline;
    margin: 10px 5px 0px;
    text-align: center;
    &:hover{
        background-color: #F0AD64;
        color:#FFFFFF;
    }
    &:focus{
        outline: none;
        background-color: #242F3E;
    }
`

export const SpanCard = styled.span`
    font-size: 17px;
    font-weight: 400;
    
`

export const RowCard = styled(Row)`
    margin: 15px 25px;
`
export const ImgCard = styled(CardImg)`
    height: 210px;
`