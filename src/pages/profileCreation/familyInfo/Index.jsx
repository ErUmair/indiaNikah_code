import React from 'react'
import FamilyInformationForm from '../../../components/main/profile_creation/forms/FamilyInformationForm'
import useFamilyInfo from './useFamilyInfo'

const Index = () => {
    const {initialValues} = useFamilyInfo()
  return (
    <FamilyInformationForm initialValues={initialValues} />
  )
}

export default Index