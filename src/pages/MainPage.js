// import logo from './logo.svg';
import React, { useState } from 'react'
import { Element } from 'react-scroll'

import useWindowDimensions from '../helpers/useWindowDimensions'

// import HeadPanel from './blocks/HeadPanel'
import Title from './blocks/Title'
import About from './blocks/About'
import Products from './blocks/Products'
import Contacts from './blocks/Contacts'
import Footer from './blocks/Footer'
// import WhatDoesItMeanToBeAWizard from './blocks/WhatDoesItMeanToBeAWizard'
// import YoutubePromo from './blocks/YoutubePromo'
// import FirstLessonFree from './blocks/FirstLessonFree'
// import AboutMerlin from './blocks/AboutMerlin'
// import Illusionists from './blocks/Illusionists'
// import SplashScreen from './blocks/SplashScreen'

// const Anchor = ({ name = "" }) => {
//   return (
//     <a
//       name={name}
//       style={{
//         display: "block",
//         position: "relative",
//         top: -112,
//         visibility: "hidden",
//       }}
//     />
//   );
// };

const MainPage = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  const closeMenu = () => {
    setMenuOpen(false)
  }

  // const [menuOpen, setMenuOpen] = useState(false)

  const { width } = useWindowDimensions()
  const deviceSize =
    width >= 1540
      ? 6
      : width > 1370
      ? 5
      : width > 1225
      ? 4
      : width > 1050
      ? 3
      : width > 900
      ? 2
      : width > 414
      ? 1
      : 0
  const paddingHorizontal =
    deviceSize === 6
      ? 135
      : deviceSize === 5
      ? 135
      : deviceSize === 4
      ? 120
      : deviceSize === 3
      ? 100
      : deviceSize === 2
      ? 60
      : deviceSize === 1
      ? 45
      : 15
  const fontSizeCorrection =
    deviceSize === 6
      ? 0
      : deviceSize === 5
      ? 0
      : deviceSize === 4
      ? -4
      : deviceSize === 3
      ? -8
      : deviceSize === 2
      ? -10
      : deviceSize === 1
      ? 0
      : -4
  const imgSizeCorrection =
    deviceSize === 6
      ? 1
      : deviceSize === 5
      ? 1
      : deviceSize === 4
      ? 0.9
      : deviceSize === 3
      ? 0.8
      : deviceSize === 2
      ? 0.7
      : deviceSize === 1
      ? 1
      : 0.9

  console.log(`deviceSize`, deviceSize)

  return (
    <div className={'h-screen w-screen'}>
      {/* <HeadPanel
        menuOpen={menuOpen}
        onClick={() => toggleMenu()}
        closeMenu={() => closeMenu()}
        deviceSize={deviceSize}
      /> */}
      <Element name="general" />
      <Title
        deviceSize={deviceSize}
        menuOpen={menuOpen}
        onClick={() => toggleMenu()}
        closeMenu={() => closeMenu()}
        paddingHorizontal={paddingHorizontal}
        fontSizeCorrection={fontSizeCorrection}
        imgSizeCorrection={imgSizeCorrection}
      />
      <Element name="about" />
      <About
        deviceSize={deviceSize}
        paddingHorizontal={paddingHorizontal}
        fontSizeCorrection={fontSizeCorrection}
        imgSizeCorrection={imgSizeCorrection}
      />
      <Element name="products" />
      <Products
        deviceSize={deviceSize}
        paddingHorizontal={paddingHorizontal}
        fontSizeCorrection={fontSizeCorrection}
        imgSizeCorrection={imgSizeCorrection}
      />
      <Element name="contacts" />
      <Contacts
        deviceSize={deviceSize}
        paddingHorizontal={paddingHorizontal}
        fontSizeCorrection={fontSizeCorrection}
        imgSizeCorrection={imgSizeCorrection}
      />
      <Footer
        deviceSize={deviceSize}
        paddingHorizontal={paddingHorizontal}
        fontSizeCorrection={fontSizeCorrection}
        imgSizeCorrection={imgSizeCorrection}
      />
      {/* <YoutubePromo screenWidth={width} />
      <WhatDoesItMeanToBeAWizard deviceSize={deviceSize} />
      <Illusionists deviceSize={deviceSize} />
      <FirstLessonFree deviceSize={deviceSize} />
      <AboutMerlin deviceSize={deviceSize} />
      {splashShow ? (
        <SplashScreen
          deviceSize={deviceSize}
          buttonText="Искать кролика"
          onPressButton={() => {
            setSplashShow(false);
          }}
          // hrefButton={null}
          title="А ты внимательный!"
          text="Ты зашел на сайт с тестовым кодом и за свою внимательность и
          смекалку заслуживаешь награду! Найди на сайте кролика и ты получишь
          награду!"
        />
      ) : null} */}
    </div>
  )
}

export default MainPage
