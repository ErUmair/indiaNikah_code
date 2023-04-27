import * as Yup from "yup";

const usePersonalDetails = () => {
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

  return {
    initialValues,
    validationSchema,
    physical_status,
    Children_Choice,
    Martial_Status,
    Choice_Field,
  };
};

export default usePersonalDetails
