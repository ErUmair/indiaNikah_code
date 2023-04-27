// not in use

import { Grid } from '@mui/material'
import { Form, Formik } from 'formik'
import TextAreaWrapper from "../../../layout/formValidation/TextAreaWrapper";
import React from 'react'

const initialValues ={
    expection:"",
    extra_info:""
}

const OtherInfoFrom = () => {
  return (
    <Formik 
    initialValues={initialValues}
    >
        <Form>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                    <TextAreaWrapper  name='expection' label='Expectation? - रिश्ता कैसा चाहिए? *' />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextAreaWrapper  name='extra_info' label='Extra information. - और कुछ आपके बारे में' />
                </Grid>
            </Grid>
        </Form>
    </Formik>
  )
}

export default OtherInfoFrom