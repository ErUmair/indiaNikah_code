import { Grid } from '@mui/material'
import { Button, Form, Input, Select } from 'antd'
import React from 'react'



const numberOption = [
  { id: 0, value: '0' },
  { id: 1, value: '1' },
  { id: 2, value: '2' },
  { id: 3, value: '3' },
  { id: 4, value: '4' },
  { id: 5, value: '5' },
  { id: 6, value: '6' },
  { id: 7, value: '7' },
  { id: 8, value: '8' },
  { id: 9, value: '9' },
  { id: 10, value: ' 10' }
]


const maslak_options = [
  { name: "Ahle Hadis (Salafi)", id: 3 },
  { name: "Barelvi (Dargah/Niyaz)", id: 2 },
  { name: "Bohra", id: 6 },
  { name: "Deobandi (Tablighi)", id: 1 },
  { name: "Jamat Islami", id: 4 },
  { name: "No Maslak (Sunni)", id: 8 },
  { name: "Reverted(New) Muslim", id: 7 },
  { name: "Shafai", id: 9 },
  { name: "Shia", id: 5 }
]

// const biradari_options = [
//   { name: "Ansari", id: 3 },
//   { name: "Attar", id: 2 },
//   { name: "Bade Qureshi (Qasab)", id: 6 },
//   { name: "D", id: 1 },
//   { name: "Jamat Islami", id: 4 },
//   { name: "No Maslak (Sunni)", id: 8 },
//   { name: "Reverted(New) Muslim", id: 7 },
//   { name: "Shafai", id: 9 },
//   { name: "Shia", id: 5 }
// ]


const FamilyDetailsForm = ({ familyOnFinish, previousBtnHandle, FormData, setFormData, onNext }) => {

  const [form] = Form.useForm();
  const rules = [
    {
      required: true,
    },
    {
      whitespace: true,
    },
  ]

  const optionFiedRule = [
    {
      required: true,
    },
  ]

  const handleChange = (event) => {
    // setFamilyFormData({ ...familyFormData, [event.target.name]: event.target.value });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(familyFormData);
  //   // submit form data to API
  // };

  const handleFinish = (values) => {
    setFormData({ ...FormData, ...values });
    onNext();
  };
  return (
    <Grid>
      <Form autoComplete="off"
        onFinish={handleFinish}
        form={form}
        initialValues={FormData}
      // onSubmit={handleSubmit}
      // value={familyFormData}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Form.Item
              label="Father Name, वालिद/बाप का नाम"
              name="fathers_name"
              hasFeedback
              rules={[...rules]}
            >
              <Input placeholder="father name" />
            </Form.Item>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Form.Item
              label="Father Occupation, वालिद का कारोबार "
              name="fathers_occupation"
              rules={[...rules]}
              hasFeedback
            >
              <Input placeholder="father occupation" />
            </Form.Item>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Form.Item
              label="Mother Name, वालिदा/मां का नाम"
              name="mothers_name"
              rules={[...rules]}
              hasFeedback
            >
              <Input placeholder="mother name" />
            </Form.Item>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Form.Item
              label="Mother Occupation, वालिदा का कारोबार "
              name="mothers_occupation"
              rules={[...rules]}
              hasFeedback
            >
              <Input placeholder="mother occupation" />
            </Form.Item>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Form.Item
              name="no_of_brothers"
              label="How many brothers - कितने भाई हैं? "
              rules={[...optionFiedRule]}
              hasFeedback
            >
              <Select placeholder="select brothers" allowClear showSearch >
                {
                  numberOption.map(num => (
                    <Select.Option value={num.id} key={num.id} >{num.value}</Select.Option>
                  ))
                }

              </Select>
            </Form.Item>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Form.Item
              label="Married brothers/शादी शुदा भाई?"
              name="no_of_married_brothers"
              rules={[...optionFiedRule]}
              hasFeedback
            >
              <Select
                placeholder="select married brothers"
                allowClear
                showSearch

              >
                {
                  numberOption.map(num => (
                    <Select.Option value={num.id} key={num.id} >{num.value}</Select.Option>
                  ))
                }
              </Select>
            </Form.Item>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Form.Item
              name="no_of_sisters"
              label="How many sisters - कितनी बहनें हैं?"
              rules={[...optionFiedRule]}
              hasFeedback
            >
              <Select placeholder="select sisters" allowClear showSearch >
                {
                  numberOption.map(num => (
                    <Select.Option value={num.id} key={num.id} >{num.value}</Select.Option>
                  ))
                }
              </Select>
            </Form.Item>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Form.Item
              label="Married sisters/शादी शुदा बहनें? "
              name="no_of_married_sisters"
              rules={[...optionFiedRule]}
              hasFeedback
            >
              <Select
                placeholder="select married sisters"
                allowClear
                showSearch

              >
                {
                  numberOption.map(num => (
                    <Select.Option value={num.id} key={num.id} >{num.value}</Select.Option>
                  ))
                }
              </Select>
            </Form.Item>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Form.Item
              label="Biradari/Cast, बिरादरी"
              name="biradari"
              rules={[...optionFiedRule]}
              hasFeedback
            >
              <Select placeholder="select biradari" allowClear showSearch>
                <Select.Option value="8">Ansari</Select.Option>
                <Select.Option value="24">Attar</Select.Option>
                <Select.Option value="9">Bade Qureshi (Qasab)</Select.Option>
                <Select.Option value="3">Bagwan</Select.Option>
                <Select.Option value="17">Baid/Lodhi</Select.Option>
                <Select.Option value="10">Chote Qureshi (Qasab)</Select.Option>
                <Select.Option value="12">Cutchi Memon</Select.Option>
                <Select.Option value="21">Khan/Pathan</Select.Option>
                <Select.Option value="16">Konkani</Select.Option>
                <Select.Option value="23">Maniyar</Select.Option>
                <Select.Option value="11">Memon</Select.Option>
                {/* <Select.Option value="1">Momin</Select.Option> */}
                <Select.Option value="22">Mulani</Select.Option>
                <Select.Option value="5">Nadaf</Select.Option>
                <Select.Option value="13">No Biradari</Select.Option>
                <Select.Option value="7">Pinjari</Select.Option>
                <Select.Option value="6">Qureshi</Select.Option>
                <Select.Option value="18">Rangrez</Select.Option>
                <Select.Option value="25">Rayeen</Select.Option>
                <Select.Option value="20">Sayyed</Select.Option>
                <Select.Option value="19">Shaikh</Select.Option>
                <Select.Option value="4">Tamboli</Select.Option>
              </Select>
            </Form.Item>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Form.Item
              label="Maslak, मस्लक"
              name="maslak"
              rules={[...optionFiedRule]}
              hasFeedback
            >
              <Select placeholder="select maslak" allowClear showSearch>
                {maslak_options.map(item => (
                  <Select.Option key={item.id} value={item.id} >{item.name}</Select.Option>

                ))}
              </Select>
            </Form.Item>
          </Grid>

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
            <Form.Item name="button" >
              <Button type="primary" htmlType="submit" className='ant-btn-class' >
                Next
              </Button>
            </Form.Item>
          </Grid>
        </Grid>


      </Form>
    </Grid>
  )
}

export default FamilyDetailsForm
