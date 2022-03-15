import { useFormik } from 'formik'
import React from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { productSearchSyn } from '../../actions/actionProduct'
import { ButtonSearch, SearchNav } from '../../styles/StyledNavBar'
import { IoSearchOutline } from "react-icons/io5";



const SearchProduct = () => {

  const dispatch = useDispatch()

    const formik = useFormik({
        initialValues:{
            search:''
        },
        validationSchema: Yup.object({
            search: Yup.string().required()
        }),  
        onSubmit:({search})=>{
            console.log((search));
            dispatch(productSearchSyn(search))
        }
    })

  return (
    <div>
      <Form className="d-flex ms-2" onSubmit={formik.handleSubmit}>
        <SearchNav
          type="search"
          placeholder="Buscar Producto"
          className="me-2"
          aria-label="Search"
          name='search'
          onChange={formik.handleChange}
        />
        <ButtonSearch classname='buttonSearch' type='submit'><IoSearchOutline /></ButtonSearch>
        {/* <Button variant="outline-success">Search</Button> */}
      </Form>

    </div>
  )
}

export default SearchProduct