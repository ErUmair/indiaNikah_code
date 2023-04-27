// not in use

import { Grid } from '@mui/material'
import { Form, Formik } from 'formik'
import React from 'react'
import SelectWrapper from '../../../layout/formValidation/SelectWrapper'
import TextWrapper from '../../../layout/formValidation/TextWrapper'

const ContactForm = ({contact_option,initialValues}) => {
    function getValue(){}
  return (
    <Formik
    initialValues={initialValues}
    >
        <Form>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <SelectWrapper  age={getValue} name="contact_of" label='Contact of*' options={contact_option} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextWrapper name="contact_number" label='Contact number' />
                </Grid> 
                <Grid item xs={12} sm={6}>
                    <SelectWrapper  age={getValue} name="country_code" label='Country Code*' options={contact_option} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextWrapper name="whatsapp_number*" label='Whatsapp number*' />
                </Grid>
            </Grid>
        </Form>
    </Formik>
  )
}

export default ContactForm