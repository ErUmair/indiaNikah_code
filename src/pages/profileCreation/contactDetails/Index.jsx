import React from 'react'
import ContactForm from '../../../components/main/profile_creation/forms/ContactForm'
import useContactDetails from './useContactDetails'

const Index = () => {
    const {initialValues,contact_option} = useContactDetails()
  return (
    <ContactForm  initialValues={initialValues} contact_option={contact_option} />
  )
}

export default Index