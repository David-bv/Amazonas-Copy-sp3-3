import React from 'react'
import { Col, Container } from 'react-bootstrap'
import { DivFooter, H5Footer, LiFooter, RowFooter } from '../styles/FooterStyled'


const Footer = () => {
    return (

        <DivFooter>
            <Container>
                <RowFooter>
                    <Col xs={12} md={3} lg={3} className='mx-auto'>
                        <H5Footer>Conócenos</H5Footer>
                        <ul>
                            <LiFooter>Trabajar en Amazon</LiFooter>
                            <LiFooter> nformación corporativa</LiFooter>
                            <LiFooter> Departamento de prensa</LiFooter>
                        </ul>
                    </Col>
                    <Col xs={12} md={3} lg={3} className='mx-auto'>
                        <H5Footer>Gana dinero con nosotros</H5Footer>
                        <ul>
                            <LiFooter>Vender en Amazon</LiFooter>
                            <LiFooter> Vender en Amazon Handmade </LiFooter>
                            <LiFooter> Publica tu libro en Kindle</LiFooter>
                            <LiFooter> Programa de afiliados </LiFooter>
                            <LiFooter> Anuncia tus productos </LiFooter>
                        </ul>
                    </Col>
                    <Col xs={12} md={3} lg={3} className='mx-auto'>
                        <H5Footer>Podemos ayudarte</H5Footer>
                        <ul>
                            <LiFooter>Devolver o reemplazar productos</LiFooter>
                            <LiFooter> Gestionar contenido y dispositivos</LiFooter>
                            <LiFooter>Press</LiFooter>
                            <LiFooter>Ayuda</LiFooter>
                        </ul>
                    </Col>
                    <Col xs={12} md={3} lg={3} className='mx-auto'>
                        <H5Footer>Métodos de pago</H5Footer>
                        <ul>
                            <LiFooter>Tarjetas de crédito y débito</LiFooter>
                            <LiFooter>Tarjetas de regalo</LiFooter>
                            <LiFooter>Meses sin intereses</LiFooter>
                            <LiFooter>Amazon Cash</LiFooter>
                            <LiFooter>Amazon Recargable</LiFooter>
                        </ul>
                    </Col>
                </RowFooter>
                <Col>
                    <img
                        alt="Brand Footer"
                        src="https://res.cloudinary.com/david-b/image/upload/v1647215855/AG/3%20sprint/proyecto/logo-amazon_cbj7b2.svg"
                        className=" ImgFooter"
                    />                       
                </Col>
            </Container>

        </DivFooter>

    )
}

export default Footer