import React, { useEffect, useState } from 'react'
// import ButtonOfGuidelines from "../ButtonOfGuidelines";
import { FaInfoCircle } from 'react-icons/fa'
import { MdGroups } from 'react-icons/md'
// import VideoCard from '../VideoCard'
import Meta from '../../Meta'
import axios from 'axios'
import { Grid } from '@mui/material'
import { Spin } from 'antd'

// const buttonNames =[
//   {
//     btn1:"RISHTE KYUN NAHI HORE?",
//     btn2:"SHAADI KI UMAR DER SE SHAADI",
//     btn3:"SHAADI KI TAYYRI",
//     btn4:"BIRADRI ME SHAADI",
//     btn5:"LADKA/LADKI KAISE HO?",
//     btn6:"DULHA DULHAN COURSE",
//     btn7:"FIZUL KHARCHI",
//     btn8:"SHAADI ME GALTIYAN",
//     btn9:"MANGNI",
//     btn10:"JAHEZ MAHER",
//     btn11:"ASAN NIKAH",
//     btn12:"FIRST NIGHT",
//     btn13:"HUSBAND WIFE LOVE",
//     btn14:"SAAS BAHU",
//     btn15:"JOINT FAMILY SYSTEM",
//     btn16:"HUSBAND WIFE FIGHT",
//     btn17:"TALAQ AND KHULA",
//     btn18:"COURT CASES",
//     btn19:"2ND NIKHA KE PHELE",
//     btn20:"PORN/ADULT/XXX FILMS",
//     btn21:"ISLAMIC SEX EDUCATION",

//   }
// ]

const Guidelines = () => {
  const [buttonName, setButtonName] = useState([])
  const [video, setVideo] = useState([])
  const [videoTitle, setVideoTitle] = useState([])
  const [headingTitle, setHeadingTitle] = useState([])
  const [hindiTitle, setHindTitle] = useState([])
  const [loader, setLoader] = useState(true)

  const getGuidelines = async () => {
    try {
      const { data } = await axios.get(
        'https://www.indianikah.com/api/portal/guidelines/',
      )
      // console.log(data[0].tags[0].name, 'btn')

      // console.log(data)
      // console.log(data[0].tags);
      setButtonName(data)
      setLoader(false)
    } catch (er) {
      setLoader(false)
      console.log(er)
    }
  }

  const selectVideo = (id) => {
    console.log(id)
    setLoader(true)
    buttonName.filter((item, index) => {
      console.log(item?.youtube_code)
      console.log(item?.title_hindi)

      if (item?.tags[0]?.id === id) {
        // console.log(item?.title)
        // console.log(item?.tags[0]?.name);
        // console.log(item?.youtube_code)
        setVideo(item?.youtube_code)
        setVideoTitle(item?.title)
        setHindTitle(item?.title_hindi)
        setHeadingTitle(item?.tags[0].name)
      }

      setLoader(false)
      return {
        video,
        videoTitle,
        hindiTitle,
        headingTitle,
      }
    })
    setLoader(false)
  }

  console.log(loader)

  useEffect(() => {
    getGuidelines()
  }, [video])

  return (
    <div className="guidelines-container">
      <Meta title="Marriage Guidelines - IndiaNikah" />
      <div className="heading-info-section">
        <h2>
          <FaInfoCircle /> Marriage Guidelines
        </h2>
        <p>
          {' '}
          <MdGroups fontSize="2vmax" /> Total <b>39286</b> users visited this
          page.
        </p>
      </div>
      <div className="buttons-container">
        <div className="btns-container">
          <Grid container spacing={1} className="btn-grid">
            {buttonName.map((item, index) => (
              //  return console.log(item?.tags[index]?.name)

              <Grid item xs={6} sm={3}>
                <button onClick={() => selectVideo(item?.tags[0]?.id)}>
                  {item?.tags[0]?.name}
                </button>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>

      <div className="video-container">
        <div className="heading-of-guideline">
          <h2>{headingTitle}</h2>
          <div className="video-card-container">
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} className="demo1">
                <div>
                  <iframe
                    title={videoTitle}
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video}`}
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                  <p>{videoTitle}</p>
                  <p>{hindiTitle}</p>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Guidelines
