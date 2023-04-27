import React, { useState } from 'react'
import {
  Form,
  Button,
  Checkbox,
  Input,
  DatePicker,
  Select,
  Typography,

} from 'antd'
import { Grid } from '@mui/material';
// import indianState from './stateAndCitiesData/StateAndCities';
import countriesData from './stateAndCitiesData/indianState'
import moment from 'moment/moment';

// const dateFormat = 'YYYY/MM/DD';

// Marital Status options -
const MARITAL_STATUS = [
  { id: "UM", name: "Unmarried" },
  { id: "DV", name: "Divorced" },
  { id: "ADIV", name: "Awaiting Divorce" },
  { id: "KH", name: "Khula" },
  { id: "SM", name: "2nd marriage" },
  { id: "WD", name: "Widow (Female)" },
  { id: "WDR", name: "Widower (Male)" }
]

// education option

const EDUCATION_CHOICES = [
  { id: "AALIM", name: "Aalim / Aalima" },
  { id: "BELOW_10", name: "Below 10th" },
  { id: "DOCTOR", name: "Doctor" },
  { id: "DP", name: "Diploma" },
  { id: "ENGINEER", name: "Engineer" },
  { id: "GR", name: "Graduate" },
  { id: "HAFIZ", name: "Hafiz / Hafiza" },
  { id: "MUFTI", name: "Mufti" },
  { id: "PG", name: "Post Graduate" },
  { id: "PHD", name: "Ph.D" },
  { id: "10_PASS", name: "10th Pass" },
  { id: "12_PASS", name: "12th Pass" }
]

// height option

const HEIGHT_CHOICES = [
  // { id: 4.0, value: '4' },
  { id: 4.01, value: "4\'1" },
  { id: 4.2, value: "4\'2" },
  { id: 4.3, value: "4\'3" },
  { id: 4.4, value: "4\'4" },
  { id: 4.5, value: "4\'5" },
  { id: 4.6, value: "4\'6" },
  { id: 4.7, value: "4\'7" },
  { id: 4.8, value: "4\'8" },
  { id: 4.9, value: "4\'9" },
  { id: 4.10, value: "4\'10" },
  { id: 4.11, value: "4\'11" },
  { id: 5.0, value: "5\'0" },
  { id: 5.01, value: "5\'1" },
  { id: 5.2, value: "5\'2" },
  { id: 5.3, value: "5\'3" },
  { id: 5.4, value: "5\'4" },
  { id: 5.5, value: "5\'5" },
  { id: 5.6, value: "5\'6" },
  { id: 5.7, value: "5\'7" },
  { id: 5.8, value: "5\'8" },
  { id: 5.9, value: "5\'9" },
  { id: 5.10, value: "5\'10" },
  { id: 5.11, value: "5\'11" },
  { id: 6.0, value: "6\'0" },
  { id: 6.01, value: "6\'1" },
  { id: 6.2, value: "6\'2" },
  { id: 6.3, value: "6\'3" },
  { id: 6.4, value: "6\'4" },
  { id: 6.5, value: "6\'5" },
  { id: 6.6, value: "6\'6" },
  { id: 6.7, value: "6\'7" },
  { id: 6.8, value: "6\'8" },
  { id: 6.9, value: "6\'9" },
  { id: 6.10, value: "6\'10" },
  { id: 6.11, value: "6\'11" },
  { id: 7.0, value: "7\'0" },
  { id: 77.0, value: "7\'0+" },
]
const CHILDREN = [
  { id: 0, value: "0" },
  { id: 1, value: "1" },
  { id: 2, value: "2" },
  { id: 3, value: "3" },
  { id: 4, value: "4" },
  { id: 5, value: "5" },
  { id: 6, value: "6" },
  { id: 7, value: "7" },
  { id: 8, value: "8" },
  { id: 9, value: "9" },
  { id: 10, value: "10" }
]


const PersonalDetailsForm = ({ personalOnFinish, FormData, setFormData, onNext }) => {
  const [form] = Form.useForm();

  const [check, setCheck] = useState(false)

  // physical status value state
  const [physicalStatus, setPhysicalStatus] = useState('')
  //state & city

  const [selectedState, setSelectedState] = useState('Andaman and Nicobar Islands');
  const [selectedCity, setSelectedCity] = useState('Nicobar');

  // const [data, setData] = useState({
  //   state: "Andaman and Nicobar Islands",
  //   city: ""
  // });

  // const [name, setName] = useState('');
  // const [gender, setGender] = useState('');
  const [martialStatus, setMartialStatus] = useState('');


  // console.log(cities)
  // console.log(indianState)
  // const  handleStateChange =(e) => {
  //   setSelectedState({selectedState:e.target.value})
  //   setSelectedCity(null)
  // }

  // const handleCityChange = (e)=> {
  //   setSelectedCity({selectedCity:e.target.value})
  // }

  const checkBoxHandle = (values) => {
    // console.log(values.target.checked)
    setCheck(values.target.checked)
  }

  //  Martial status handle function
  const martialStatusHandler = (value) => {
    setMartialStatus(value)
  }

  // handle physical status -
  const handlePhysicalStatus = (value) => setPhysicalStatus(value)

  // const onFinish = (value)=>{
  //   console.log(value);
  // }
  const handleChange = (event) => {
    // setPersonalFormData({ ...personalFormData, [event.target.name]: event.target.value });
    // martialStatusHandler();
    // handlePhysicalStatus();
  }
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(personalFormData);
  //   // submit form data to API
  // };
  const handleFinish = (values) => {
    if (values.date_of_birth) {
      let date_of_birth = values.date_of_birth.$d.toISOString().split('T')[0];
      setFormData({ ...FormData, ...values, date_of_birth });
    } else {
      setFormData({ ...FormData, ...values });
    }
    onNext();
  };



  return (
    <Grid>
      <Form
        autoComplete="off"
        onFinish={handleFinish}
        form={form}
        initialValues={FormData}
      // onFinish={personalOnFinish}
      // onSubmit={handleSubmit}
      // value={personalFormData}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12}>
            <Form.Item
              name="full_name"
              label="Bride/Groom's First Name & Surname"
              hasFeedback
              rules={[
                {
                  required: true,
                },
                {
                  whitespace: true,
                },
                {
                  max: 30,
                },
              ]}
            >
              <Input placeholder="type your name" maxLength="30" onChange={handleChange} />
            </Form.Item>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Form.Item
              name="gender"
              label="Gender-मेल/फीमेल"
              hasFeedback
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="select your gender"
                allowClear
                showSearch={true}
                onChange={handleChange}
              >
                <Select.Option value="ML">Male</Select.Option>
                <Select.Option value="FM">Female</Select.Option>
              </Select>
            </Form.Item>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Form.Item
              name="martial_status"
              label="Marital Status - गैर शादी शुदा /तलाक़ शुदा ?"
              hasFeedback
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="select your marital status"
                onChange={martialStatusHandler}
                allowClear
                showSearch
              // onChange={handleChange}
              >
                {
                  MARITAL_STATUS.map(status => (
                    <Select.Option key={status.id} value={status.id}>
                      {status.name}
                    </Select.Option>
                  ))
                }

              </Select>
            </Form.Item>
          </Grid>

          {martialStatus === 'Divorced' ||
            martialStatus === 'Awaiting Divorced' ||
            martialStatus === 'Khula' ||
            martialStatus === '2nd Marrige' ||
            martialStatus === 'Widow (Female)' ||
            martialStatus === 'Widower (Male)' ? (
            <>
              <Grid item xs={12} sm={6}>
                {(martialStatus === 'Divorced' && (
                  <Form.Item
                    label="Reason of Divorced"
                    name="reason"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                )) ||
                  (martialStatus === 'Awaiting Divorced' && (
                    <Form.Item
                      label="Reason of Awaiting Divorced"
                      name="reason"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                  )) ||
                  (martialStatus === 'Khula' && (
                    <Form.Item
                      label="Reason of Khula"
                      name="reason"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                  )) ||
                  (martialStatus === '2nd Marrige' && (
                    <Form.Item
                      label="Reason of 2nd Marrige"
                      name="reason"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                  )) ||
                  (martialStatus === 'Widow (Female)' && (
                    <Form.Item
                      label="Reason of Widow (Female)"
                      name="reason"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                  )) ||
                  (martialStatus === 'Widower (Male)' && (
                    <Form.Item
                      label="Reason of Widower (Male)"
                      name="reason"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                  ))}
              </Grid>

              <Grid item xs={12} sm={6}>
                <Form.Item
                  name="no_of_children"
                  label="How Many Children? - कितने बच्चे हैं?"
                  hasFeedback
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select
                    placeholder="select your children"
                    allowClear
                    showSearch
                  // onChange={handleChange}
                  >
                    {
                      CHILDREN.map(child => (
                        <Select.Option key={child.id} value={child.id} >{child.value}</Select.Option>
                      ))
                    }
                  </Select>
                </Form.Item>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Form.Item
                  name="marrige_duration"
                  label="Marriage Duration(years/months) - शादी कितने दिन तक रही"
                  hasFeedback
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="type duration" />
                </Form.Item>
              </Grid>
            </>
          ) : (
            ''
          )}

          <Grid item xs={12} sm={6}>
            <Form.Item
              name="date_of_birth"
              label="Date of Birth - पैदाइश तारीख "
              hasFeedback
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <DatePicker
                style={{ width: '100%' }}
                placeholder="choos only month and year "
              // onChange={handleChange}
              />
            </Form.Item>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Form.Item
              name="height"
              label="Height - हाइट"
              hasFeedback
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select placeholder="select your height" >
                {
                  HEIGHT_CHOICES.map(height => (
                    <Select.Option key={height.id} value={height.id} >{height.value}</Select.Option>
                  ))
                }

              </Select>
            </Form.Item>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Form.Item
              name="education"
              label="Education - पढ़ाई"
              hasFeedback
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="select your education"
                showSearch
                allowClear
              // onChange={handleChange}
              >
                {
                  EDUCATION_CHOICES.map(status => (
                    <Select.Option key={status.id} value={status.id}>{status.name}</Select.Option>
                  ))
                }

              </Select>
            </Form.Item>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Form.Item
              name="degree"
              label="Degree - डिग्री"
              hasFeedback
              rules={[
                {
                  required: true,
                },
                {
                  whitespace: true,
                },
              ]}
            >
              <Input placeholder="type your degree" />
            </Form.Item>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Form.Item
              name="occupation"
              label="Occupation - कारोबार"
              hasFeedback
              rules={[
                {
                  required: true,
                },
                {
                  whitespace: true,
                },
              ]}
            >
              <Input placeholder="type your occupation" />
            </Form.Item>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Form.Item
              name="physical_status"
              label="Physical Status"
              hasFeedback
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Select
                placeholder="select your physical status"
                allowClear
                defaultValue="Normal"
                // onChange={handlePhysicalStatus}
                onChange={handleChange}
              >
                <Select.Option value="NM">Normal</Select.Option>
                <Select.Option value="HP">Handicap</Select.Option>
              </Select>
            </Form.Item>
          </Grid>
          {
            physicalStatus === 'Handicap' && (
              <Grid item xs={12} >
                <Form.Item
                  label="Handicap Details"
                  hasFeedback
                  name='handicap_details'
                >
                  <Input />
                </Form.Item>
              </Grid>
            )
          }

          <Grid item sm={6} xs={12}>
            <Form.Item
              name="hobbies"
              label="Hobbies - शौक"
              hasFeedback
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.TextArea placeholder="type your hobbies" />
            </Form.Item>
          </Grid>

          <Grid item sm={6} xs={12}>
            <Form.Item
              name="weight"
              label="Weight - वजन"
              hasFeedback
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Grid>

          <Grid item sm={12}>
            <Form.Item>
              <Typography.Text>Native - आप किस जगह से हैं?</Typography.Text>
            </Form.Item>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Form.Item
              name="state"
              label="State"
              hasFeedback
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="select your state"
                allowClear
                showSearch
                value={selectedState}
              // onChange={handleStateChange}

              >
                {countriesData.map((inState) => (
                  <Select.Option key={inState.id} value={inState.id}>
                    {inState.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Form.Item
              name="city_native"
              label="City"
              hasFeedback
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="select your city"
                allowClear
                showSearch
                value={selectedCity}
              // onChange={handleCityChange}
              // onChange={handleChange}
              >
                {selectedState && countriesData.find(item => item.name === selectedState)?.districts.map((city) => (
                  <Select.Option key={city.id} value={city.id}>
                    {city.name}
                  </Select.Option>

                ))}
              </Select>
            </Form.Item>
          </Grid>

          <Grid item sm={12}>
            <Form.Item>
              <Checkbox onChange={checkBoxHandle}
              // onChange={handleChange}
              >
                current location same as native location.
              </Checkbox>
            </Form.Item>
          </Grid>

          <Grid item sm={12}>
            <Form.Item>
              <Typography.Text>
                <b>Current location - अभी कहा रहेते या जॉब करते हैं?</b>
                <p>*Country</p>
              </Typography.Text>
            </Form.Item>
          </Grid>

          {!check && (
            <>
              <Grid item xs={12} sm={6}>
                <Form.Item name="state" label="State">
                  <Select placeholder="select your state"
                    onChange={handleChange}
                  ></Select>
                </Form.Item>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Form.Item name="city_current" label="City">
                  <Select placeholder="select your city"
                    onChange={handleChange}
                  >
                  </Select>
                </Form.Item>
              </Grid>
            </>
          )}
        </Grid>
        <Grid item sm={12}>
          <Form.Item name="button" className='ant-btn-parent-class'>
            <Button type="primary" htmlType="submit" className='ant-btn-class' justify="center" >
              Next
            </Button>
          </Form.Item>
        </Grid>

      </Form>
    </Grid>
  )
}

export default PersonalDetailsForm
