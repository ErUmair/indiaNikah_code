
const useFamilyInfo = () => {
    const vallidateSchema = {

    }

    const initialValues = {
        father_name:"",
        father_occupation:"",
        mother_name:"",
        mother_occupation:"",
        brothers:'',
        brothers_married:"",
        sisters:"",
        sisters_married:"",
        biradari:"",
        maslak:""
    }
  return {
    initialValues,vallidateSchema
  }
}

export default useFamilyInfo