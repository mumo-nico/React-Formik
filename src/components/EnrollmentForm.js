import React from 'react'
import { Formik, Form } from 'formik'
import * as  Yup from 'yup'
import FormikControl from './FormikControl'

const selectCourse =[
    {key: 'Select your course', value: ''},
    {key: 'React', value: 'react'},
    {key: 'Angular', value: 'angular'},
    {key: 'Vue', value: 'vue'},
]
const selectSkill =[
    {key: 'HTML', value: 'html'},
    {key: 'CSS', value: 'css'},
    {key: 'JavaScript', value: 'javasript'},
]
const initialValues = {
    email: '',
    bio: '',
    course: '',
    skills: [],
    courseDate: null
}
const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email format').required('Required'),
    bio: Yup.string().required('Required'),
    course: Yup.string().required('Required'),
    skills: Yup.array().required('Required'),
    courseDate: Yup.date().required('Required').nullable
})
const onSubmit = values => {
    console.log('Form Data',values)
}
function EnrollmentForm() {
  return (
    <Formik
    initialValues={initialValues} validationSchema={validationSchema}
    onSubmit={onSubmit} >
        {
            formik => {
                return <Form>
                    <FormikControl 
                        control='input' type='email' label='Email' name='email'
                    />
                    <FormikControl 
                        control='input' type='textarea' label='Bio' name='bio'
                    />
                    <FormikControl 
                        control='select' label='Course' name='course'
                        options={selectCourse}
                    />
                    <FormikControl 
                        control='checkbox' label='Skills' name='skills'
                        options={selectSkill}
                    />
                    <FormikControl 
                        control='date' label='Course Date' name='courseDate'
                    />
                    <submit type='submit' disabled={!formik.isValid}>
                        Submit
                    </submit>
                </Form>
            }
        }
    </Formik>
  )
}

export default EnrollmentForm