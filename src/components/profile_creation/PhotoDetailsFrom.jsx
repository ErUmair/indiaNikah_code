import { Grid } from '@mui/material';
import { Form, Divider, Button, Modal, Checkbox } from 'antd';
import { useState } from 'react';
import FileUpload from '../ant/FileUpload';
import { useNavigate } from 'react-router-dom';
import { CheckBox } from '@mui/icons-material';



const PhotoDetailsFrom = ({ previousBtnHandle, FormData, setFormData, submitFormData, submitOTP }) => {
  const [form] = Form.useForm()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const navigate = useNavigate()

  const [checkedList, setCheckedList] = useState([]);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const openModal = () => setIsModalVisible(true)
  const handleCancel = () => {
    setIsModalVisible(false)
    form.resetFields()
  }

  const handleOk = () => {
    // submitFormData()                 //create profile API
    submitOTP()                   //OTP generate  API
    navigate('/login')
  }

  const onFinish = () => {
    console.log('Form submited!')
    setIsModalVisible(false)
  }

  const handleChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < options.length);
    setCheckAll(list.length === options.length);
  };

  // const onCheckAllChange = (e) => {
  //   setCheckedList(e.target.checked ? options.map((option) => option.value) : []);
  //   setIndeterminate(false);
  //   setCheckAll(e.target.checked);
  // };

  const CheckboxGroup = Checkbox.Group;

  const options = [
    { label: "I'm a Muslim. Believe in Allah and Prophet Mohammed (pbuh). मैं एक मुस्लिम हूँ। अल्लाह रसूल में यक़ीन रखता/रखती हूँ ", value: 'option1' },
    { label: "I'm not marriage bureau agent/broker. मैं शादी रिश्त एजंट/ब्रोकर नही हूँ।", value: 'option2' },
    { label: "I will not misuse any data on India Nikah. मैं इंडीया निकाह के किसी भी डाटा का गलत इस्तेमाल नही करूंगा/करूंगी", value: 'option3' },
    { label: "I have given correct information while creating profile. मैं प्रोफाइल बनाते वक्त सही  जानकारी दुंगा/गी।", value: 'option4' },
  ];


  const handleFinish = (values) => {
    setFormData({ ...FormData, ...values });
  };

  return (
    <Form autoComplete='off'
      // onSubmit={handleSubmit}
      // value={photoFormData}
      onFinish={handleFinish}
      form={form}
      initialValues={FormData}
    >
      <Grid container spacing={2} >
        <Grid item xs={12} sm={12}>
          <div style={{ textAlign: "center", color: "#c96e6e", textDecoration: "underline" }} >
            <p>Photos are optional however profile with pics increases people's interest. People will see the pic and contact you if they are interested.</p>
            <br />
            <p>
              फोटो अपलोड करना ज़रुरी नहीं है । लेकिन प्रोफाइल फोटो डालने से आपका परोफाइल ज़यादा ध्यान ले देखा जाएगा और लोग फोटो देख कर पसंद आने पर ही आपको कॉनटेकट करेंगे।
            </p>
          </div>

          <Divider />
          <Form.Item>
            <FileUpload />
          </Form.Item>
        </Grid>
      </Grid>
      <Grid container spacing={1} className="ant-btn-parent-class">
        <Grid item sm={1}>
          <Button type="primary" htmlType="submit" className='ant-btn-class' onClick={previousBtnHandle}>
            Previous
          </Button>
        </Grid>
        <Grid item xs={1}>

          <Button type="primary" htmlType="submit" className='ant-btn-class' onClick={openModal}>
            Submit
          </Button>
          <Modal
            title=""
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[

              // <Button key="back" onClick={handleCancel}>
              //   Cancel
              // </Button>,
              <Button key="submit" type="primary" onClick={handleOk} className='ant-btn-class' disabled={checkedList.length !== options.length}>
                Get OTP!
              </Button>,
            ]}
          >
            <div style={{ padding:'10px'}}>
              {/* <Checkbox
            indeterminate={indeterminate}
            onChange={onCheckAllChange}
            checked={checkAll}
          >
            Check all
          </Checkbox> */}
            </div>
             <br />
            <CheckboxGroup options={options} value={checkedList} onChange={handleChange} />
          </Modal>
        </Grid>
      </Grid>

    </Form>
  )
}

export default PhotoDetailsFrom