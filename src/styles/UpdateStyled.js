import { Button, Form } from "react-bootstrap";
import styled from "styled-components";


export const FormUpdate = styled(Form)`
    width: 90%;
    display: block;
    margin: 0 auto;
    padding: 20px 0px;
    @media only screen and (max-width: 600px) {
        width:90%;
    }
`

export const UpdateButton = styled(Button)`
    background-color: #F3D184;
    color: #333333;
    border: none;
    width: 35%;
    font-size: 15px;
    margin: 10px 30px 0px;
    text-align: center;
    &:hover{
        background-color: #242F3E;
        color:#FFFFFF;
    }
    &:focus{
        outline: none;
        background-color: #242F3E;
        color:#FFFFFF;
    }
    @media only screen and (max-width: 600px) {
        width:60%;
    }
`

export const UpdateCloseButton = styled(Button)`
    background-color: #F3D184;
    color: #333333;
    border: none;
    width: 35%;
    font-size: 15px;
    margin: 10px 30px 0px;
    text-align: center;
    &:hover{
        background-color: #242F3E;
        color:#FFFFFF;
    }
    &:focus{
        outline: none;
        background-color: #242F3E;
        color:#FFFFFF;
    }
    @media only screen and (max-width: 600px) {
        width:60%;
    }
`