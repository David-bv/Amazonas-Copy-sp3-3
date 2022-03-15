import React, { useEffect, useState } from 'react'
import {  Card, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { productDelete, showProduct } from '../../actions/actionProduct';
import { ButtonList, ImgCard, RowCard, SpanCard } from '../../styles/ListStyled';
import UpdateProduct from './UpdateProduct';


const ListProduct = () => {

  const dispatch = useDispatch();
  const [modal, setModal] = useState(false)
  const [dataModal, SetDataModal] = useState([])

  const { products } = useSelector(store => store.product)
  console.log('listar', products);

 /*  useEffect(() => {
    console.log(product);
  }, [product]) */

  useEffect(() => {
    dispatch(showProduct())
  }, [ dispatch])

  const handleUpdate = (sku) => {
    console.log('editar', sku);
    setModal(true)
    const getData = products.find(t => t.sku === sku)
    SetDataModal(getData)
  }
 
  return (
    <div>
      <RowCard xs={1} md={4} className="g-5">
        {
          products.map((p, index) => (
            <Col key={index}>
                <Card >
                    <ImgCard variant="top" src={p.img1}  />
                    <Card.Body>
                      <Card.Title>{p.name}</Card.Title>
                      <Card.Subtitle>Marca: <SpanCard>{p.brand}</SpanCard></Card.Subtitle>
                      <Card.Subtitle>Precio:<SpanCard>{p.price}</SpanCard></Card.Subtitle>
                      <Card.Subtitle>Envío <SpanCard>{p.ship}</SpanCard></Card.Subtitle>
                      <Card.Subtitle>Color: <SpanCard>{p.color}</SpanCard></Card.Subtitle>
                      <Card.Subtitle>Envio: <SpanCard>{p.ship}</SpanCard></Card.Subtitle>
                      <Card.Subtitle>Modelo: <SpanCard>{p.sku}</SpanCard></Card.Subtitle>
                      <Card.Text> 
                        <span>Descripcion: </span>
                        {p.description}
                      </Card.Text>
                      <ButtonList size="sm" bsPrefix='btn' onClick={() => handleUpdate(p.sku)}>
                      Editar
                      </ButtonList>
                      <ButtonList size="sm" bsPrefix='btn' onClick={() => dispatch(productDelete(p.sku))}>
                      Eliminar
                      </ButtonList>
                    </Card.Body>
                </Card>
            </Col>
          ))
        }
      </RowCard>
      {
        modal === true ? <UpdateProduct modal={dataModal}/> : ''
      }
    </div>
  )
}

export default ListProduct