import React from 'react'
import { Formik, Field, Form } from 'formik';
import { UseTodo } from '../context/TodoContext';

function FormTodo() {
 
    const {todos,setTodos}=UseTodo();

  return (
    <Formik
    initialValues={{
      text: '',
    
    }}
    onSubmit={(values,bag) => {
     
    
     bag.resetForm();
    }}
  >
    <Form>
      
      <Field id="text" name="text" placeholder="we needs be done?" />

      
    </Form>
  </Formik>
  )
}

export default FormTodo