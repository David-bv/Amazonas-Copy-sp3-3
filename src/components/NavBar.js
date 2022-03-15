import React from 'react'
import { Col, Container, Nav, Navbar, NavLink, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ColNav, TextBrand } from '../styles/StyledNavBar'
import { FiShoppingCart } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

import { IoIosLogOut } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { logout } from '../actions/actionLogin';
import SearchProduct from './crud/SearchProduct';

const NavBar = () => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='navbar1' variant="dark">
                <Container fluid style={{ height: 'auto' }}>
                    <Navbar.Brand >
                        <Link to='/' style={{textDecoration:'none'}}>
                            <TextBrand>AMAZONAS</TextBrand>
                            
                            <img
                                alt=""
                                src="https://res.cloudinary.com/david-b/image/upload/c_fill,h_200,q_100,w_500/v1647100404/AG/3%20sprint/proyecto/aArrow_fscrub.jpg"
                                width="100"
                                height="30"
                                className="d-block align-top"
                            />{' '}
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Row className='d-block text-white'>
                                <ColNav> Hola </ColNav>
                                <Col><IoLocationOutline style={{ fontSize: '20px' }} />Elige tu dirección</Col>
                            </Row>
                        </Nav>
                        <Nav className="mx-auto">
                            <SearchProduct/>
                        </Nav>
                        <Link to="/" className='textNavbar' >Inicio</Link>
                        <Nav>   
                            <NavLink className='NavLinkStyled'>
                                <Row className='d-block text-white'>
                                    <ColNav> Hola, identifícate </ColNav>
                                    <Col>Cuentas y Listas</Col>
                                </Row>
                            </NavLink>
                            <NavLink className='NavLinkStyled'>
                                <Row className='d-block text-white'>
                                    <ColNav> Devoluciones </ColNav>
                                    <Col> Y pedidos</Col>
                                </Row>
                            </NavLink>
                        </Nav>
                        <Nav>
                            <Link to="/login" className='textNavbar' >Login</Link>
                            <Link to='/register' className='NavLink textNavbar'>Registrarse </Link>
                            <NavLink className='NavLink textNavbar' >
                                <IoIosLogOut style={{ fontSize: '22px' }} 
                                onClick={handleLogout}
                                />
                            </NavLink>
                        </Nav>
                        <Nav>
                            <Nav.Link className='NavLinkStyled shopNav' href="#memes">
                                <FiShoppingCart style={{ fontSize: '28px', marginRight: '1px' }} />
                                Carrito
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar expand="lg" className='navbar2' >
                <Link to='/product' style={{textDecoration:'none'}}> <span className='textNavbar2'> Todo </span></Link>
                <NavLink ><span className='textNavbar2'>Tarjetas de regalo </span>  </NavLink>
                <NavLink ><span className='textNavbar2'> Prime </span>  </NavLink>
                <NavLink ><span className='textNavbar2'> Lo mas vendido </span>  </NavLink>
                <NavLink ><span className='textNavbar2'> AmazonBasics  </span> </NavLink>
                <NavLink ><span className='textNavbar2'>  Computo y Tabletas </span> </NavLink>
                <NavLink ><span className='textNavbar2'> Los Mas Regalados </span> </NavLink>
                <Link to='/add-product' style={{textDecoration:'none'}}> <span className='textNavbar2'> Crear Producto </span></Link>
            </Navbar>
        </div>
    )
}

export default NavBar