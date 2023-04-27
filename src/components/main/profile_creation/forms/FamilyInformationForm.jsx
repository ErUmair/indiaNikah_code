// not in use
import { Grid } from '@mui/material'
import { Form, Formik } from 'formik'
import React from 'react'
import SelectWrapper from '../../../layout/formValidation/SelectWrapper';
import TextWrapper from '../../../layout/formValidation/TextWrapper'


const Children_Choice = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "10",
};

const FamilyInformationForm = ({validateSchema,initialValues}) => {
  function getValue(){}
  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validateSchema}
    >
      <Form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextWrapper name="father_name" label='Fathers name*' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextWrapper name="father_occupation" label='Fathers occupation*' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextWrapper name="mother_name" label='Mothers name**' />
            </Grid> 
            <Grid item xs={12} sm={6}>
              <TextWrapper name="mother_occupation" label='Mothers occupation*' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SelectWrapper  age={getValue} name="brothers" label='How many brothers - कितने भाई हैं? *' options={Children_Choice} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SelectWrapper  age={getValue} name="brothers_married" label='How many married - कितनों की शादी हुवी? *' options={Children_Choice} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SelectWrapper  age={getValue} name="sisters" label='How many sisters - कितनी बहनें हैं? *' options={Children_Choice} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SelectWrapper  age={getValue}name="sisters_married" label='How many married - कितनों की शादी हुवी? *' options={Children_Choice} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SelectWrapper  age={getValue} name="biradari" label='Biradari' options={Children_Choice} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SelectWrapper  age={getValue} name="maslak" label='Maslak' options={Children_Choice} />
            </Grid>
          </Grid>
      </Form>
    </Formik>
  )
}

export default FamilyInformationForm