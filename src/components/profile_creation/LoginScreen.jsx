import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Input, Select, Checkbox, Typography } from 'antd';
import { CheckOutlined, RollbackOutlined } from '@ant-design/icons';
import { Grid, Box, Paper, InputLabel, TextField, MenuItem, FormControl } from '@mui/material';
import { useNavigate } from 'react-router-dom';

//{'username': '9876543210', 'otp_key': '262282ca-55c8-4bd9-b1e2-3219df625bcb'', 'otp': '123456', 'password': 'pass1234', 'password2': 'pass1234'}

const Login = ({data}) => {
    const [OTPNum, setOTPNum] = useState('');
    const [password1,setPassword1] = useState('');
    const [c_password, setCpassword] = useState('');
    const navigate = useNavigate();
    const url = useNavigate();
    const [form] = Form.useForm();

    const { phone, submitFormData,OTPKey } = data;
    
    // //  const handleFinish = (values) => {
    //     // setFormData({ ...FormData, ...values });
    //     // onNext();
    //   };
    const handleBack = () => {
        navigate("/")
    }

    const validateOTP = async () => {
        try {
            const response = await axios.post('https://www.indianikah.com/accounts/api/set-password/', {
                username:phone,
                otp_key:OTPKey,
                otp:OTPNum,
                password:password1,
                password2:c_password
            });
            console.log(response.data);
            submitFormData();        // submit form data to API
            url("/profiles/create/")
        } catch (error) {
            console.error("Something wrong, please try again."); // handle error
        }
    };

    
    const handleSubmit = () => {
        validateOTP();
    };


    return (
        <div style={{
            width: "500px", padding: "20px",
            margin: "50px auto",

        }}>
            <Paper elevation={3} sx={{ width: '90%' }}>
                <Box sx={{ padding: 5 }}>
                    <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold', fontSize: '15px', margin: '5px 0 5px 0' }}>
                        Set Password
                    </Typography>
                    <hr style={{ margin: '5px 0 30px 0' }} />
                    <Form
                        form={form}
                        name="register"
                        style={{
                            maxWidth: 600,
                        }}
                        scrollToFirstError
                        layout="vertical"
                        onFinish={handleSubmit}
                        // initialValues={loginFormData}
                    >
                        <Form.Item
                            name="userName"
                            label="Username (Phone Number or Email)"
                            rules={[
                                {
                                    type: 'username',
                                    message: 'The input is not valid username!',
                                },
                                {
                                    required: false,
                                    message: 'Please input your Username!',
                                },
                            ]}
                        >
                            <Input defaultValue={phone} disabled />
                        </Form.Item>
                        <Form.Item
                            name="otp"
                            label="OTP"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input value={OTPNum} onChange={(e)=>setOTPNum(e.target.value)}/>
                        </Form.Item>
                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password value={password1} onChange={(e)=>setPassword1(e.target.value)}/>
                        </Form.Item>

                        <Form.Item
                            name="confirm"
                            label="Confirm Password (Enter same password as above)"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password value={c_password} onChange={(e)=>setCpassword(e.target.value)}/>
                        </Form.Item>
                        <Grid container justifyContent={'space-between'} paddingTop={'20px'}>
                            <Grid item>
                                <Form.Item name={'button'}>
                                    <Button type="primary" htmlType="submit" className='ant-btn-class' onClick={handleBack}>
                                        <RollbackOutlined />Back
                                    </Button>
                                </Form.Item>
                            </Grid>
                            <Grid>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className='ant-btn-class' >
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Grid>
                        </Grid>
                    </Form>
                </Box>
            </Paper>
        </div>
    )
}

export default Login
