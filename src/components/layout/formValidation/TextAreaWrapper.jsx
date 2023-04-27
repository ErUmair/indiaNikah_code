import TextField from '@mui/material/TextField';
import {useField} from 'formik'

const TextAreaWrapper = ({name,...otherProps})=>{
    const [field,meta] = useField(name)

    const configTextField = {
        ...field,
        ...otherProps,
        fullWidth:true,
        variant:'outlined',
    }

    if(meta && meta.touched && meta.error){
        configTextField.error = true
        configTextField.helperText = meta.error
    }

    return(
        <TextField  multiline maxRows={4} {...configTextField} sx={{'& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
            borderColor:"#c72554b5 !important" ,
            color:"#c72554b5"
        },
        '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input':{
            color:"#DF3768"
        },
        '&.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':{
            color:"#DF3768 !important"

        },
        '& .css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input':{
            color:"#DF3768"
        }
    }} />
    )
}

export default TextAreaWrapper
