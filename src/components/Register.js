import React from 'react'
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/actionRegister';
import { useForm } from '../hook/useForm';
import { ButtonLogin, DivLogin, FormLogin } from '../styles/LoginStyled';

const Register = () => {

  const dispatch = useDispatch();

  const [values, handleInputChange] = useForm({
    name: '',
    email: '',
    passw1: '',
    passw2: ''
  })

  const { name, email, passw1, passw2 } = values;

  const handleRegistro = (e) => {
    e.preventDefault();
    dispatch(register(email, passw1, name))
  }

  return (
    <DivLogin>
      <FormLogin onSubmit={handleRegistro}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="passw1"
            value={passw1}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicRepitPassword">
          <Form.Label>Repita contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="passw2"
            value={passw2}
            onChange={handleInputChange}
          />
        </Form.Group>

        <ButtonLogin variant="primary" type="submit">
          Registrarse
        </ButtonLogin>

        <Link to="/" className='registerLogin'>Login</Link>
      </FormLogin>

    </DivLogin>
  )
}

export default Register