import React from 'react'
import { Formik, Field, Form } from 'formik';
import { UseTodo } from '../context/TodoContext';
import { validation } from './Validation';

function FormTodo() {
 
    const {addTodo}=UseTodo();



  return (
    <Formik
    initialValues={{
      text: '',
    
    }}
    onSubmit={(values,bag) => {
     
     addTodo(values.text)
   

     bag.resetForm();
    }}

    validationSchema={validation}

 
  >
    <Form >
      
      <Field id="text" name="text" placeholder="we needs be done?" />

      
    </Form>
  </Formik>
  )
}

export default FormTodo