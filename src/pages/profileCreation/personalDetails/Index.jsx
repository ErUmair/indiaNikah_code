import React from 'react'
import PersonalDetailsForm from '../../../components/main/profile_creation/forms/PersonalDetailsForm'
import usePersonalDetails from './usePersonalDetails'


const Index = () => {
    const {
        initialValues,
        validationSchema,
        physical_status,
        Children_Choice,
        Martial_Status,
        Choice_Field,
      } = usePersonalDetails
  return (
    <PersonalDetailsForm 
    initialValues={initialValues} 
    validationSchema={validationSchema}
    physical_status={physical_status}
    Children_Choice={Children_Choice}
    Martial_Status={Martial_Status}
    Choice_Field={Choice_Field}
    />
  )
}

export default Index