import React from 'react'
import { Formik, Form } from 'formik'
import * as  Yup from 'yup'
import FormikControl from './FormikControl'

function FormikContainer() {
    const dropDownOptions =[
        {key: 'Select an Option', value: ''},
        {key: 'Option 1', value: 'option1'},
        {key: 'Option 2', value: 'option2'},
        {key: 'Option 3', value: 'option3'},
    ]
    const radioOptions =[
        {key: 'Option 1', value: 'option1'},
        {key: 'Option 2', value: 'option2'},
        {key: 'Option 3', value: 'option3'},
    ]
    const checkboxOptions =[
        {key: 'Option 1', value: 'cOption1'},
        {key: 'Option 2', value: 'cOption2'},
        {key: 'Option 3', value: 'cOption3'},
    ]
    const initialValues = {
        firstname: '',
        email: '',
        description: '',
        selectOption: '',
        radioOption: '',
        checkboxOption: [],
        birthDate: null
    }
    const validationSchema = Yup.object({
        firstname: Yup.string().required('Required'),
        email: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
        selectOption: Yup.string().required('Required'),
        radioOption: Yup.string().required('Required'),
        checkboxOption: Yup.array().required('Required'),
        birthDate: Yup.date().required('Required').nullable()
    })
    const onSubmit = values => console.log('Form data', values)

  return (
   <Formik
   initialValues={initialValues}
   validationSchema={validationSchema}
   onSubmit={onSubmit}>
    {
        formik => <Form>
            <FormikControl 
                control='input' type='text' label='First Name' name='firstname'
            />
            <FormikControl 
                control='input' type='email' label='Email' name='email' 
            />
            <FormikControl 
                control='textarea' label='Description' name='description'
            />
            <FormikControl 
                control='select' label='Select a Topic' name='selectOption'
                options={dropDownOptions}
            />
            <FormikControl 
                control='radio' label='Radio Topic' name='radioOption'
                options={radioOptions}
            />
            <FormikControl 
                control='checkbox' label='Checkbox Topic' name='checkboxOption'
                options={checkboxOptions}
            />
            <FormikControl
                control='date' label='Birth Date' name='birthDate'
            />
            <button type='submit'>Submit</button>
        </Form>
    }
   </Formik>
  )
}

export default FormikContainer