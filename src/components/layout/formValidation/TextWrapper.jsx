import TextField from '@mui/material/TextField';
// import { color } from '@mui/system';
import {useField} from 'formik'

const TextWrapper = ({name,...otherProps})=>{
    const [field,meta] = useField(name)

    const configTextField = {
        ...field,
        ...otherProps,
        fullWidth:true,
        variant:'outlined'
    }

    if(meta && meta.touched && meta.error){
        configTextField.error = true
        configTextField.helperText = meta.error
    }

    return(
        <TextField  {...configTextField} sx={{'.css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
            borderColor:"#c72554b5",
            color:"#c72554b5"
        },
        '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input':{
            color:"#DF3768"
        },
        '&.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':{
            color:"#DF3768 !importent"

        }
    }} />
    )
}

export default TextWrapper
