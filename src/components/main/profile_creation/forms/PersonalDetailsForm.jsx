// not in use

import { Grid } from "@mui/material";
import { Form, Formik } from "formik";
import { useState } from "react";
import DateTime from "../../../layout/formValidation/DateTime";
import SelectWrapper from "../../../layout/formValidation/SelectWrapper";
import TextAreaWrapper from "../../../layout/formValidation/TextAreaWrapper";
import TextWrapper from "../../../layout/formValidation/TextWrapper";
import * as Yup from "yup";
// checkbox imports -
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

 // male female options -
 const Choice_Field = {
  male: "Male",
  female: "Female",
};

// Marital Status options -
const Martial_Status = {
  unmarried: "unmarried",
  divorced: "Divorced",
  awaiting_divorced: "Awaiting Divorced",
  khula: "Khula",
  " 2nd_marrige": "2nd Marrige",
  widow_female: "Widow (Female)",
  widower_male: "Widower (Male)",
};

// How Many Children? - कितने बच्चे हैं?
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

// form initial values
const initialValues = {
  name: "",
  gender: "",
  martial_status: "",
  reason_of_divorced: "",
  reason_of_khula: "",
  reason_of_widow_female: "",
  reason_of_widower_male: "",
  reason_of_awaiting_divorced: "",
  reason_of_2nd_marrige: "",
  children: "",
  duration_of_marriage: "",
  DOB: "",
  height: "",
  education: "",
  degree: "",
  occupation: "",
  physical_status: "",
  hobbie: "",
  state: "",
  city: "",
};

// physical status -
const physical_status = {
  normal: "Normal",
  handicap: "Handicap",
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .max(20, "only 20 characters allowed")
    .required("Name is required"),
  gender: Yup.string().required("please select gender"),
  martial_status: Yup.string().required("please select martial  status"),
  reason_of_divorced: Yup.string().required("reason of divorced required"),
  reason_of_khula: Yup.string().required("reason of khula required"),
  reason_of_widow_female: Yup.string().required(
    "reason of widow female required"
  ),
  reason_of_widower_male: Yup.string().required(
    "reason of widower male required"
  ),
  reason_of_awaiting_divorced: Yup.string().required(
    "reason of reason of awaiting divorced required"
  ),
  reason_of_2nd_marrige: Yup.string().required(
    "reason of reason of awaiting divorced required"
  ),
  children: Yup.string().required("please select childrens"),
  duration_of_marriage: Yup.string().required(
    "duration of marriage is required"
  ),
  DOB: Yup.date().required("date of birth is required"),
  height: Yup.string().required("please select height"),
  education: Yup.string().required("please select education"),
  degree: Yup.string().required("degree is required"),
  occupation: Yup.string().required("occupation is required"),
  physical_status: Yup.string().required("please select physical status"),
  hobbie: Yup.string().required("hobbies is required"),
  state: Yup.string().required("please select state"),
  city: Yup.string().required("please select city"),
});


const PersonalDetailsForm = (  ) => {

  // this state for select field for gettig value in this state
  const [selectFieldValue, setSelectFieldValue] = useState("");

  // checkbox state -
  const [open,setOpen] = useState(false)

  // checkbox handlechange
  const handleChange = (event)=>{
    setOpen(event.target.checked)
  }

  
  // temporary function
  function getValue() {}

  return (
    <Formik 
    initialValues={initialValues}
    validationSchema={validationSchema}
    >
      <Form>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{'.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':{color:'#DF3768'}}} >
            <TextWrapper label="First Name & Surname*" name="name" />
          </Grid>
          <Grid item xs={12} sm={6} sx={{'.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':{color:'#DF3768'}}}>
            <SelectWrapper
              age={getValue}
              label="Gender-मेल/फीमेल *"
              name="gender"
              options={Choice_Field}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{'.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':{color:'#DF3768'}}}>
            <SelectWrapper
              age={setSelectFieldValue}
              label="Marital Status - गैर शादी शुदा /तलाक़ शुदा /बेवा या ? *"
              name="martial_status"
              options={Martial_Status}
            />
          </Grid>

          {/* changing field option wise */}
          {(selectFieldValue === "divorced") || (selectFieldValue ==="khula") || (selectFieldValue === "awaiting_divorced") ||( selectFieldValue === " 2nd_marrige") || (selectFieldValue === "widow_female") || (selectFieldValue === "widower_male") ? (
            <>
              <Grid item xs={12} sm={6} sx={{'.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':{color:'#DF3768'}}}>
                {
                     (selectFieldValue === "divorced" && <TextWrapper label="Reason of Divorced- वजह" name= "reason_of_divorced" />) ||

                    (selectFieldValue === "khula" && <TextWrapper label="Reason of Khula- वजह" name= "reason_of_khula" />) ||

                    (selectFieldValue === "widow_female" && <TextWrapper label="Reason of Widow-female वजह" name= "reason_of_widow_female" />) ||

                    (selectFieldValue === "widower_male" && <TextWrapper label="Reason of Widower-male वजह" name= "reason_of_widower_male" />) ||

                    (selectFieldValue === "awaiting_divorced" && <TextWrapper label="Reason of awaiting divorced वजह" name= "reason_of_awaiting_divorced" />) ||

                    (selectFieldValue === " 2nd_marrige" && <TextWrapper label="Reason of 2nd marrige- वजह" name= "reason_of_2nd_marrige" />)

                }
                
              </Grid>
              <Grid item xs={12} sm={6} sx={{'.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':{color:'#DF3768'}}}>
                <SelectWrapper
                  label="How Many Children? - कितने बच्चे हैं?"
                  name="children"
                  age={getValue}
                  options={Children_Choice}
                />
              </Grid>
              <Grid item xs={12} sm={6} sx={{'.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':{color:'#DF3768'}}}>
                <TextWrapper
                  label="Duration of Marriage - शादी कितने दिन तक रही"
                  name="duration_of_marriage"
                />
              </Grid>
            </>
          ):""}


          <Grid item xs={12} sm={6} sx={{'.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':{color:'#DF3768'}}}>
            <DateTime label="Date of Birth - पैदाइश तारीख *" name="DOB" />
          </Grid>
          <Grid item xs={12} sm={6} sx={{'.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':{color:'#DF3768'}}}>
            <SelectWrapper
              age={getValue}
              label="Height - हाइट *"
              name="height"
              options={Choice_Field}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{'.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':{color:'#DF3768'}}}>
            <SelectWrapper
              age={getValue}
              label="Education - पढ़ाई *"
              name="education"
              options={Choice_Field}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{'.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':{color:'#DF3768'}}}>
            <TextWrapper label="Degree - डिग्री" name="degree" />
          </Grid>
          <Grid item xs={12} sm={6} sx={{'.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':{color:'#DF3768'}}}>
            <TextWrapper label="Occupation*" name="occupation" />
          </Grid>
          <Grid item xs={12} sm={6} sx={{'.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':{color:'#DF3768'}}}>
            <SelectWrapper
              age={getValue}
              label="Physical Status*"
              name="physical_status"
              options={physical_status}
            />
          </Grid>
          <Grid item xs={12} sm={12} sx={{'.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':{color:'#DF3768'}}}>
                <TextAreaWrapper name='hobbie' label="Hobbies - शौक" />
          </Grid>
          <Grid item sm={12} sx={{'.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':{color:'#DF3768'}}}>
            <p>Native - आप किस जगह से हैं?</p>
          </Grid>
          <Grid item xs={12} sm={6} sx={{'.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':{color:'#DF3768'}}}>
            <TextWrapper name='state' label='State' />
          </Grid>
          <Grid item xs={12} sm={6} sx={{'.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':{color:'#DF3768'}}}>
            <TextWrapper name='city' label='City' />
          </Grid>

          <Grid item xs={12} sm={12} sx={{'.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':{color:'#DF3768'}}}>
          <FormGroup>
            <FormControlLabel  control={<Checkbox onChange={handleChange} />} label="current location same as native location." />
          </FormGroup>
          </Grid>
          
          {
            !open && (
             <>
             <Grid item sm={12}>
                <p>Current location - अभी कहा रहेते या जॉब करते हैं?</p>
              </Grid>
               <Grid item xs={12} sm={6} sx={{'.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':{color:'#DF3768'}}}>
                <TextWrapper name='state' label='State' />
              </Grid>
              <Grid item xs={12} sm={6} sx={{'.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':{color:'#DF3768'}}}>
                <TextWrapper name='city' label='City' />
              </Grid>
             </>
            )
          }

        </Grid>
      </Form>
    </Formik>
  );
};

export default PersonalDetailsForm;
