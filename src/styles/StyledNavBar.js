import { Col, FormControl } from "react-bootstrap";
import styled from "styled-components";

export const TextBrand = styled.h4`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 19px;
    color: #FFFFFF;
`

export const SearchNav = styled(FormControl)`
    width: 90%;
    min-width: 450px;
    padding-right: 0;
    margin-right: 0;
    margin-top: 5px;
    border-radius: 0px;
    border-top-left-radius : 6px;
    border-bottom-left-radius: 6px;
    height: 30px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    @media only screen and (max-width: 600px) {
        width:95%;
        min-width: 0px;
    }
`
export const ButtonSearch = styled.button`
    margin-top: 4px;
    height: 31.3px;
    width: 35px;
    margin-left: -10px;
    border-top-right-radius : 6px;
    border-bottom-right-radius: 6px;
    background-color: #F0AD64;
    border:none;
    font-size: 17px;
`

export const ColNav = styled(Col)`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
`