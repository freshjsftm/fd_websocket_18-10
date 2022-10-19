import React from 'react';
import {Formik, Field, Form} from 'formik';
import {useDispatch} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ChatActionsCreator from '../../actions/chatActionsCreator'

const FormMessage = () => {
  const {createMessageRequest} = bindActionCreators(ChatActionsCreator, useDispatch())
  const onSubmit = (values, formikBag)=>{
    createMessageRequest(values)
  }
  return (
    <Formik initialValues={{content:'', user:''}} onSubmit={onSubmit}>
      <Form>
        <Field name='content' placeholder='content'/>
        <Field name='user' placeholder='user'/>
        <input type='submit' value='Send new message' />
      </Form>
    </Formik>
  );
}

export default FormMessage;
