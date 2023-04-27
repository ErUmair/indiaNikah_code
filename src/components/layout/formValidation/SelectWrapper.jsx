import React from "react";
import TextField from '@mui/material/TextField';
import {useField,useFormikContext} from 'formik'
import MenuItem from '@mui/material/MenuItem';

const SelectWrapper = ({name,options,age,...otherProps})=>{

    const [field,meta] = useField(name)
    const {setFieldValue} = useFormikContext()

    const handleChange =(evt)=>{
        const {value} = evt.target
        setFieldValue(name,value)
        // console.log(value)
        age(value)

    }

    const configSelect = {
        ...field,
        ...otherProps,
        select:true,
        variant:'outlined',
        fullWidth:true,
        onChange:handleChange
    }
    
    if(meta && meta.touched && meta.error){
        configSelect.error = true
        configSelect.helperText = meta.error
    }

    return(
        <TextField {...configSelect}  sx={{'.css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
            borderColor:"#c72554b5",
            color:"#c72554b5"
        },
        '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input':{
            color:"#DF3768"
        },
        '&.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':{
            color:"#DF3768 !important"

        },
        '.css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input':{
            color:"#DF3768"
        }
        }}>
            {
                Object?.keys(options)?.map((item,pos)=>{
                    return(
                        <MenuItem key={pos} value={item} >
                            {options[item]}
                        </MenuItem>
                    )
                })
            }
        </TextField>
    )
}

export default SelectWrapper