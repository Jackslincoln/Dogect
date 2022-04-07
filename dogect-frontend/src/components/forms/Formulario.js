import React from 'react';
import { Formik } from 'formik';
import { Form, Input, Label, Button } from 'reactstrap';
import { ContenedorFormulario } from './../styles/form.styles';

const Formulario = ({children, inputs=''}) => {
	return (
		<>
      <Formik>
        {() => (
          <ContenedorFormulario>
            <div>
              <Label htmlFor='nombre'>Nombre :</Label>
              <Input type='text' id='nombre' name='nombre' placeholder='Nombre...'></Input>
            </div>
            <div>
              <Label htmlFor='correo'>Correo :</Label>
              <Input type='email' id='correo' name='correo' placeholder='Correo...'></Input>
            </div>
            <div>
              <Label htmlFor='contra'>Contraseña :</Label>
              <Input type='password' id='contra' name='contra' placeholder='Contraseña...'></Input>
            </div>
            <Button type='submit'>Enviar</Button>
          </ContenedorFormulario>
        )}
      </Formik>

		</>
	);
}

export default Formulario;
