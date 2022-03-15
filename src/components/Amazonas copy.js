import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import ReactImageMagnify from 'react-image-magnify';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonCar, ButtonShop } from '../styles/AmazonasStyled';
import { FiShoppingCart } from "react-icons/fi";
import { BsFillPlayFill } from "react-icons/bs";
import { showProduct } from '../actions/actionProduct';

const Amazonas = () => {

  const dispatch = useDispatch();
  const { product } = useSelector(store => store.product)
  console.log('listar', product);
  const filter = product.filter(p => p.sku === '24-105mm USM Kit')
  console.log('filter', filter);

  useEffect(() => {
    dispatch(showProduct())
 }, [ dispatch])

  return (
    <div>
      <h6>&lt; Volver a los resultados</h6>

      {

        filter.map((p, index) => (
          <Row key={index}>
            <Col xs={1} md={1}>
              <img src={p.img1} alt='' className='imgTumb' />
              <img src={p.img2} alt='' className='imgTumb' />
              <img src={p.img3} alt='' className='imgTumb' />
            </Col>
            <Col xs={4} md={4}>
              <ReactImageMagnify {...{
                smallImage: {
                  alt: 'Canon',
                  isFluidWidth: false,
                  srcset: "https://res.cloudinary.com/david-b/image/upload/v1647187717/AG/3%20sprint/proyecto/Rectangle_36_du3tmj.svg 160w",
                  sizes:'(orientation: portrait) or (max-width: 500px) 100px',
                  width: 450,
                  height: 450,
                  src: p.img1
                },
                largeImage: {
                  src: p.img1,
                  width: 1200,
                  height: 1800
                }

              }} />
            </Col>
            <Col xs={8} md={4} className='mx-auto'>
              <h2>{p.name}</h2>
              <h6>Marca: {p.brand}</h6>
              <span>Precio: {p.price}</span> <span> Envío $ {p.ship}.00. Detalles</span>

              <p>
                Hasta 18 meses sin intereses de $5,592.76. Ver mensualidades
                <br/>
                Solicita tu tarjeta Amazon Recargable y obtén $100 de descuento en tu primera compra mayor a $500
              </p>

              <h6>Color: {p.color}</h6>
              <h6>Modelo: {p.sku}</h6>

              <h4>Acerca de este artículo</h4>
              <p>
                {p.description}
              </p>
            </Col>
            <Col xs={8} md={2} className='mx-auto'>
              transacción
              <div>
                <h4>$ {p.price}.00</h4>
                <p> Envío {p.ship}. Detalles</p>
                <p>Llega: dic 15 - 28</p>
                <p>Puede que lo recibas despues de navidad</p>
                <div>
                  <ButtonCar>
                    <FiShoppingCart/>
                    <span> Agregar al Carrito</span>
                  </ButtonCar>
                  <ButtonShop>
                    <BsFillPlayFill/>
                    <span>Comprar ahora</span>
                  </ButtonShop>
                </div>
                <p>Transacción Segura</p>
              </div>
            </Col>
          </Row>
        ))
      }

      <div>
        <h4> Productos Relacionados con este artículo</h4>

      </div>

      <div>
        <h4>Opiniones de clientes </h4>
      </div>
    </div>
  )
}

export default Amazonas