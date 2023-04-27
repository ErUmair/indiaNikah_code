import React from 'react'
import { Form, Input, Button } from 'antd'
import { Grid, Card } from '@mui/material'

const OtherDetailsForm = ({ otherOnFinish, previousBtnHandle, FormData, setFormData, onNext }) => {
  const [form] = Form.useForm();

  const handleChange = (event) => {
    // setOtherFormData({ ...otherFormData, [event.target.name]: event.target.value });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(otherFormData);
  //   // submit form data to API
  // };
  const handleFinish = (values) => {
    setFormData({ ...FormData, ...values });
    onNext();
  };

  return (
    <Form autoComplete='off'
      onFinish={handleFinish}
      form={form}
      initialValues={FormData}
    // onSubmit={handleSubmit}
    // value={otherFormData}
    >
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12}  >
          <Form.Item
            name='expectations'
            label={`Your Expectation? 
            रिश्ता कैसा चाहिए?`}
            hasFeedback
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.TextArea placeholder='expectation...' rows={7} onChange={handleChange} />
          </Form.Item>
        </Grid>
        <Grid item xs={12} >
          <Form.Item
            name='extra_information'
            label='Extra Information. और कुछ आपके बारे में'
          >
            <Input.TextArea placeholder='extra information...' rows={7} onChange={handleChange} />
          </Form.Item>
        </Grid>
        <Grid container spacing={1} className="ant-btn-parent-class">
          <Grid item sm={1}>
            <Form.Item name="button">
              <Button type="primary" htmlType="submit" className='ant-btn-class' onClick={previousBtnHandle}>
                Previous
              </Button>
            </Form.Item>
          </Grid>
          <Grid item sm={1}>
            <Form.Item name="button">
              <Button type="primary" htmlType="submit" className='ant-btn-class'>
                Next
              </Button>
            </Form.Item>
          </Grid>
        </Grid>
      </Grid>
    </Form>
  )
}

export default OtherDetailsForm