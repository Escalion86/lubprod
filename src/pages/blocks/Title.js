import React, { useState } from 'react'
import { Link } from 'react-scroll'
import ReactInterval from 'react-interval'

import './Title.css'
import Button from '../components/Button'
// import adaptiveFontSize from '../../helpers/adaptiveFontSize'
import background from '../../img/background.jpg'
import background1370 from '../../img/background1370.jpg'
import volna from '../../img/phone/volna.png'
import product1 from '../../img/phone/product1.png'
import product2 from '../../img/phone/product2.png'
import product3 from '../../img/phone/product3.png'
// import phoneBackground1 from '../../img/phone/background_small1.png'
// import phoneBackground2 from '../../img/phone/background_small2.png'
// import phoneBackground3 from '../../img/phone/background_small3.png'
import lubprod from '../../img/lubprod_logo.png'
import phone from '../../img/phone.png'
import arrow from '../../img/arrow.png'

const Burger = ({ menuOpen, onClick }) => {
  return (
    <div className={'menu-btn' + (menuOpen ? ' open' : '')} onClick={onClick}>
      <div className="menu-btn__burger" />
    </div>
  )
}

const menuItems = [
  { name: 'Главная', href: 'general' },
  { name: 'О компании', href: 'about' },
  { name: 'Продукция', href: 'products' },
  { name: 'Контакты', href: 'contacts' },
]

const HeadPanel = ({
  menuOpen = false,
  onClick = () => {},
  closeMenu = () => {},
  deviceSize = 5,
  fontSizeCorrection = 0,
  imgSizeCorrection = 1,
}) => {
  const MenuItemsPC = menuItems.map(({ name = '', href = '' }, index) => {
    return (
      <li className="menu_item" style={{ fontSize: 24 + fontSizeCorrection }}>
        <Link
          activeClass="active"
          to={href}
          spy={true}
          smooth={true}
          duration={500}
          key={'menuItemPC' + index}
        >
          {name}
        </Link>
      </li>
    )
  })

  const MenuItemsMobile = menuItems.map(({ name = '', href = '' }, index) => {
    return (
      <Link
        activeClass="active"
        className="menu_item_mobile"
        style={{ paddingLeft: 14, transitionDelay: 0.4 + 0.1 * index + 's' }}
        to={href}
        spy={true}
        smooth={true}
        duration={500}
        offset={0}
        onClick={closeMenu}
        key={'menuItemMobile' + index}
      >
        {name}
      </Link>
      // <a className="z-1 font-bold text-primary hover:text-active" href={href}>
      //   {name}
      // </a>
    )
  })

  return deviceSize <= 1 ? (
    <div className={'relative w-full z-50'}>
      <div
        className={'absolute z-1 overlay' + (menuOpen ? ' open' : '')}
        style={{ marginTop: -31 }}
      >
        <div
          className="mobile_menu_header"
          // style={{
          //   marginTop: 25,
          //   fontFamily: "'Montserrat', sans-serif",
          //   fontStyle: 'normal',
          //   fontWeight: 'bold',
          //   fontSize: 18,
          //   color: '#FFFFFF',
          //   paddingLeft: 14,
          //   borderBottomWidth: 1,
          //   borderBottomColor: '1px solid rgba(255, 255, 255, 0.48)',
          //   height: 40,
          // }}
        >
          Меню
        </div>
        <div
          className="flex flex-col overlay-content overflow-hidden"
          style={{ marginTop: 20 }}
        >
          {MenuItemsMobile}
        </div>
      </div>
      <div
        className="flex flex-row absolute"
        style={{
          height: 15,
          width: 20,
          right: 15,
          top: 31,
          zIndex: 2,
          marginTop: -31,
        }}
      >
        <Burger menuOpen={menuOpen} onClick={onClick} />
      </div>
    </div>
  ) : (
    <div
      className="flex flex-row"
      style={{
        height: 60,
        width: '100%',
        paddingLeft: 200 * imgSizeCorrection + 10,
      }}
    >
      <ul className="menu">{MenuItemsPC}</ul>
      <div className="flex flex-row">
        <img
          className="object-fill mx-1"
          style={{
            height: 37 * imgSizeCorrection,
            width: 37 * imgSizeCorrection,
            minWidth: 37 * imgSizeCorrection,
            margin: 4,
          }}
          src={phone}
          alt="phone"
        />
        <div className="flex flex-col" style={{ marginLeft: 26 }}>
          <a
            className="phone"
            style={{ fontSize: 24 + fontSizeCorrection }}
            href="tel:+73425436076"
          >
            +7 (34254)3-60-76
          </a>
          <a
            className="phone"
            style={{ fontSize: 24 + fontSizeCorrection }}
            href="tel:+73425436077"
          >
            +7 (34254)3-60-77
          </a>
        </div>
      </div>
    </div>
  )
}

// const mobileBackgrounds = [phoneBackground1, phoneBackground2, phoneBackground3]
const mobileBgProducts = [product1, product2, product3]

const Title = ({
  menuOpen = false,
  onClick = () => {},
  closeMenu = () => {},
  deviceSize = 5,
  paddingHorizontal = 135,
  fontSizeCorrection = 0,
  imgSizeCorrection = 1,
}) => {
  const [bgNum, setBgNum] = useState(0)

  const nextBg = () => {
    if (bgNum >= 2) setBgNum(0)
    else setBgNum(bgNum + 1)
  }

  // const fontSize = adaptiveFontSize(deviceSize)
  return (
    <div className="w-full overflow-hidden relative">
      {/*                           Титул                                      */}
      <ReactInterval
        timeout={3000}
        enabled={deviceSize === 0}
        callback={() => nextBg()}
      />
      <div
        className="w-full flex flex-col"
        style={{
          height: 0,
          backgroundImage: `url(${mobileBgProducts[0]})`,
        }}
      />
      <div
        className="w-full flex flex-col"
        style={{
          height: 0,
          backgroundImage: `url(${mobileBgProducts[1]})`,
        }}
      />
      <div
        className="w-full flex flex-col"
        style={{
          height: 0,
          backgroundImage: `url(${mobileBgProducts[2]})`,
        }}
      />
      {/* {deviceSize === 0 ?
      <div
        className="w-full flex flex-col"
        style={{
          height: 568,
          paddingLeft: paddingHorizontal,
          paddingRight: paddingHorizontal,
          paddingTop: deviceSize >= 2 ? 70 : 31,
          paddingBottom: 100,
          position: 'relative',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background 0.8s linear',
          backgroundImage: `url(${volna})`,
        }}
      /> : null} */}
      <div
        className="w-full flex flex-col"
        style={{
          height: deviceSize >= 2 ? 700 : 568,
          paddingLeft: paddingHorizontal,
          paddingRight: paddingHorizontal,
          paddingTop: deviceSize >= 2 ? 70 : 31,
          paddingBottom: 100,
          position: 'relative',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background 0.8s linear',
          backgroundImage: `url(${
            deviceSize === 0
              ? null
              : deviceSize <= 4
              ? background1370
              : background
          })`,
        }}
      >
        {deviceSize === 0 ? (
          <>
            <div
              className="object-fill absolute"
              style={{
                height: 414,
                width: '100%',
                minWidth: 300,
                top: 0,
                left: 0,
                backgroundSize: 'cover',
                backgroundPositionY: 'bottom',
                transition: 'background 0.8s linear',
                backgroundImage: `url(${volna})`,
                zIndex: 0,
              }}
            />
            <div
              className="object-fill absolute"
              style={{
                height: 262,
                width: '100%',
                minWidth: 335,
                bottom: 0,
                left: 0,
                backgroundSize: 'contain',
                backgroundPositionY: 'bottom',
                transition: 'background 0.8s linear',
                backgroundImage: `url(${mobileBgProducts[bgNum]})`,
                zIndex: -1,
              }}
            />
            {/* <img
              className="object-fill absolute"
              style={{
                // height: 400,
                width: 414,
                minWidth: 414,
                bottom: 0,
                left: 0,
              }}
              src={mobileBgProducts[bgNum]}
              alt="product"
            /> */}
          </>
        ) : null}

        <HeadPanel
          deviceSize={deviceSize}
          menuOpen={menuOpen}
          onClick={onClick}
          closeMenu={closeMenu}
          fontSizeCorrection={fontSizeCorrection}
          imgSizeCorrection={imgSizeCorrection}
        />
        {deviceSize <= 1 ? (
          <div className="w-full h-full flex flex-col relative">
            <div
              className="w-full flex flex-row"
              style={{
                position: 'relative',
                paddingBottom: 10,
              }}
            >
              <a href="http://lubprod.ru">
                <img
                  className="object-fill mx-1"
                  style={{
                    height: 87,
                    width: 107,
                    minWidth: 107,
                  }}
                  src={lubprod}
                  alt="lubprod"
                />
              </a>
              <div style={{ flex: 1, textAlign: 'right', paddingTop: 30 }}>
                <div
                  style={{
                    fontWeight: 900,
                    fontSize: 18 + fontSizeCorrection,
                    color: '#FFED00',
                  }}
                >
                  «ЛЮБИМЫЙ ПРОДУКТ»
                </div>
                <div
                  style={{
                    fontWeight: 900,
                    fontSize: 15 + fontSizeCorrection,
                    color: '#fff',
                  }}
                >
                  ИП Керимов А.С.о.
                </div>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <h1
                style={{
                  width: '100%',
                  textAlign: 'center',
                  paddingLeft: 2,
                  paddingRight: 2,
                  // height: 132,
                  fontSize: 28 + fontSizeCorrection,
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  lineHeight: 28 / 24,
                  textTransform: 'uppercase',
                  color: '#ffffff',
                  mixBlendMode: 'normal',
                }}
              >
                Продукты питания
                <br />
                собственного производства
              </h1>
            </div>
            <div className="flex flex-col w-full items-center">
              <Button
                href="docs/Catalog_2021.pdf"
                style={{ width: 202 * imgSizeCorrection, height: 51 }}
                imgSrc={arrow}
                imgAlt="arrow"
                imgH={20 * imgSizeCorrection}
                imgW={22 * imgSizeCorrection}
                fontWeight={700}
                fontSize={20 + fontSizeCorrection}
                name="скачать каталог"
                download
              />
            </div>
          </div>
        ) : (
          <div
            className="w-full h-full flex flex-row"
            style={{
              position: 'relative',
            }}
          >
            <div>
              <a href="http://lubprod.ru">
                <img
                  className="object-fill mx-1"
                  style={{
                    height: 166 * imgSizeCorrection,
                    width: 194 * imgSizeCorrection,
                    minWidth: 194 * imgSizeCorrection,
                  }}
                  src={lubprod}
                  alt="lubprod"
                />
              </a>
            </div>
            <div className="w-full h-full flex flex-col">
              <div
                className="w-full flex flex-row"
                style={{ paddingLeft: 7, paddingTop: 17, flex: 1 }}
              >
                <div className="flex" style={{ flex: 1 }}>
                  <h1
                    style={{
                      flex: 1,
                      fontSize: 34 + fontSizeCorrection,
                      fontStyle: 'normal',
                      fontWeight: 'bold',
                      lineHeight: 47 / 40,
                      textTransform: 'uppercase',
                      color: '#ffffff',
                      mixBlendMode: 'normal',
                    }}
                  >
                    Продукты питания
                    <br />
                    собственного производства
                  </h1>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div
                    style={{
                      fontWeight: 900,
                      fontSize: 30 + fontSizeCorrection,
                      color: '#fff',
                    }}
                  >
                    Торговая марка
                  </div>
                  <div
                    style={{
                      fontWeight: 900,
                      fontSize: 30 + fontSizeCorrection,
                      color: '#FFED00',
                    }}
                  >
                    «ЛЮБИМЫЙ ПРОДУКТ»
                  </div>
                  <div
                    style={{
                      fontWeight: 900,
                      fontSize: 24 + fontSizeCorrection,
                      color: '#fff',
                    }}
                  >
                    ИП Керимов А.С.о.
                  </div>
                </div>
                {/* <Button
            text="Записаться на БЕСПЛАТНЫЙ урок"
            bigText={deviceSize === 3}
            addClass="mt-6"
            inverse
          /> */}
              </div>
              <div className="w-full">
                <Button
                  href="docs/Catalog_2021.pdf"
                  style={{ width: 368 * imgSizeCorrection }}
                  imgSrc={arrow}
                  imgAlt="arrow"
                  imgH={38 * imgSizeCorrection}
                  imgW={44 * imgSizeCorrection}
                  fontWeight={700}
                  fontSize={34 + fontSizeCorrection}
                  name="скачать каталог"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Title
