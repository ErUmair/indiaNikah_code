import React from 'react'
import Meta from '../../../Meta'
import SimpleAccordion from '../../mui_componets/CustomAccordian'
import PersonalDetails from './forms/PersonalDetailsForm'
import FamilyInfo from '../../../pages/profileCreation/familyInfo/Index'
// import PersonalDetails from '../../../pages/profileCreation/personalDetails/Index'
import ContactDetails from '../../../pages/profileCreation/contactDetails/Index'
import OtherInfoFrom from './forms/OtherInfoFrom'
import PhotoForm from './forms/PhotoForm'

const ProfileCreation = () => {
  return (

    <div>
      <Meta title='Create Profile - IndiaNikah' />
      <SimpleAccordion title = "PERSONAL DETAILS" >
        <PersonalDetails />
      </SimpleAccordion>
      <SimpleAccordion title='FAMILY INFORMATION' >
        <FamilyInfo />
      </SimpleAccordion>

      <SimpleAccordion title='CONTACT INFORMATION' >
        <ContactDetails />
      </SimpleAccordion>

      <SimpleAccordion title='OTHER INFORMATION' >
        <OtherInfoFrom />
      </SimpleAccordion>

      <SimpleAccordion title='PHOTOS' >
        <PhotoForm />
      </SimpleAccordion>
      </div>
  )
}

export default ProfileCreation