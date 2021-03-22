// import logo from './logo.svg';
import React from 'react'
import { Link, Element } from 'react-scroll'

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
  // const [menuOpen, setMenuOpen] = useState(false)

  const { width } = useWindowDimensions()
  const deviceSize = width >= 1024 ? 3 : width >= 640 ? 2 : 1

  return (
    <div className={'h-screen w-screen'}>
      {/* <HeadPanel
        menuOpen={menuOpen}
        onClick={() => toggleMenu()}
        closeMenu={() => closeMenu()}
        deviceSize={deviceSize}
      /> */}
      <Element name="general" />
      <Title deviceSize={deviceSize} />
      <Element name="about" />
      <About deviceSize={deviceSize} />
      <Element name="products" />
      <Products deviceSize={deviceSize} />
      <Element name="contacts" />
      <Contacts deviceSize={deviceSize} />
      <Footer deviceSize={deviceSize} />
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
