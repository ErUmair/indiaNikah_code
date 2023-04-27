import React from 'react'
import TextField from '@mui/material/TextField';
import {useField} from 'formik'

const DateTime = ({name,...otherProps})=>{
    const [field , meta] = useField(name)

    const configDate = {
        ...field,
        ...otherProps,
        fullWidth:true,
        type:'Date',
        variant:'outlined',
        InputLabelProps:{shrink: true}
    }

    if(meta && meta.touched && meta.error){
        configDate.error = true
        configDate.helperText = meta.error
    }

    return(
        <TextField {...configDate} />
    )
}

export default DateTime