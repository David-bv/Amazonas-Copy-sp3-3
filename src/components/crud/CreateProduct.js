import React, { useEffect } from 'react'
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { productRegister, showProduct } from '../../actions/actionProduct';
import { fileUpload } from '../../helpers/fileUpload';
import { useForm } from '../../hook/useForm';
import { FormButton, FormStyles } from '../../styles/FormStyled';

const CreateProduct = () => {

  const [values, handleInputChange, reset] = useForm({
    name: '',
    brand: '',
    color: '',
    sku: '',
    description: '',
    price: '',
    style: '',
    ship: '',
    payment: '',
    category: '',
    img1: '',
    img2: '',
    img3: ''
  })

  const dispatch = useDispatch()
  let { name, brand, color, sku, description, price, style, ship, payment, category } = values;

  const handleProductSubmit = (e) => {
    e.preventDefault()
    console.log('productRegister');
    dispatch(productRegister(values))
    reset()
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    fileUpload(file)
      .then(resp => {
        values.img1 = resp
        console.log(resp);
      })
      .catch(e => {
        console.log(e);
      })
  }

  const handleFileChange1 = (e) => {
    const file = e.target.files[0]
    fileUpload(file)
      .then(resp => {
        values.img2 = resp
        console.log(resp);
      })
      .catch(e => {
        console.log(e);
      })
  }

  const handleFileChange2 = (e) => {
    const file = e.target.files[0]
    fileUpload(file)
      .then(resp => {
        values.img3 = resp
        console.log(resp);
      })
      .catch(e => {
        console.log(e);
      })
  }

  useEffect(() => {
    dispatch(showProduct())
  }, [dispatch])


  return (
    <div>
      <FormStyles onSubmit={handleProductSubmit}>
        <Form.Group className="mb-3 " controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name='name'
            value={name}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicBrand">
          <Form.Label>Marca</Form.Label>
          <Form.Control
            type="text"
            name='brand'
            value={brand}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicColor">
          <Form.Label>Color</Form.Label>
          <Form.Control
            type="text"
            name='color'
            value={color}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicSku">
          <Form.Label>SKU</Form.Label>
          <Form.Control
            type="text"
            name='sku'
            value={sku}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicType">
          <Form.Label>Detalle</Form.Label>
          <Form.Control
            type="text"
            name='style'
            value={style}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicPrice">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            name='price'
            value={price}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicShip">
          <Form.Label>Envío (Gratis/Pago) </Form.Label>
          <Form.Control
            type="text"
            name='ship'
            value={ship}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicPayment">
          <Form.Label> Método de pago  (Efectivo/Tarjeta de Crédito)</Form.Label>
          <Form.Control
            type="text"
            name='payment'
            value={payment}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicCategory">
          <Form.Label> Categoría (Electronica, Hogar, Moda)</Form.Label>
          <Form.Control
            type="text"
            name='category'
            value={category}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Descripción</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3}
            type="text"
            name='description'
            value={description}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicImg1">
          <Form.Label>Imagen #1</Form.Label>
          <Form.Control
                type="file"
                placeholder="Agregar foto "
                name="img1"
                onChange={handleFileChange}
                size="sm"
          />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicImg2">
          <Form.Label>Imagen #2</Form.Label>
          <Form.Control
                type="file"
                placeholder="Agregar foto "
                name="img2"
                onChange={handleFileChange1}
                size="sm"
          />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicImg3">
          <Form.Label>Imagen #3</Form.Label>
          <Form.Control
                type="file"
                placeholder="Agregar foto "
                name="img3"
                onChange={handleFileChange2}
                size="sm"
          />
        </Form.Group>
        
        <FormButton variant="primary" type="submit">
          Añadir producto
        </FormButton>
      </FormStyles>
    </div>

  )
}

export default CreateProduct