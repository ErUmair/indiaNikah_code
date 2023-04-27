const useContactDetails = ()=>{
    const contact_option ={
        self:"Self",
        parants:"Parants",
        relatives:"Relatives",
        others:"Others"
    }

    const initialValues = {
        contact_of:"",
        contact_number:"",
        country_code:"",
        whatsapp_number:""
    }

    return{
        initialValues,contact_option
    }
}

export default useContactDetails