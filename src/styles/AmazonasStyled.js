import { Button } from "react-bootstrap";
import styled from "styled-components";


export const ButtonCar = styled(Button)`
background-color: #F3D184;
color: #333333;
border: none;
width: 95%;
font-size: 15px;
display: block;
margin: 10px Auto 0px;
text-align: center;
&:hover{
    background-color: #242F3E;
    color:#FFFFFF;
}
&:focus{
    outline: none;
    background-color: #EB82A5;
}
`

export const ButtonShop = styled(Button)`
background-color: #F0AD64;
color: #333333;
border: none;
width: 95%;
font-size: 15px;
display: block;
margin: 10px auto 0px;
text-align: center;
&:hover{
    background-color: #242F3E;
    color:#FFFFFF;
}
&:focus{
    outline: none;
    background-color: #EB82A5;
}
`