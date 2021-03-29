import React from 'react'
import { Link } from 'react-scroll'

import './Title.css'
import Button from '../components/Button'
// import adaptiveFontSize from '../../helpers/adaptiveFontSize'
import background from '../../img/background.png'
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
  deviceSize = 3,
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
        style={{ paddingLeft: 14 }}
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

const Title = ({
  menuOpen = false,
  onClick = () => {},
  closeMenu = () => {},
  deviceSize = 5,
  paddingHorizontal = 135,
  fontSizeCorrection = 0,
  imgSizeCorrection = 1,
}) => {
  // const fontSize = adaptiveFontSize(deviceSize)
  return (
    <div className="w-full overflow-hidden">
      {/*                           Титул                                      */}

      <div
        className="w-full flex flex-col"
        style={{
          paddingLeft: paddingHorizontal,
          paddingRight: paddingHorizontal,
          paddingTop: deviceSize >= 2 ? 70 : 31,
          paddingBottom: 100,
          position: 'relative',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: deviceSize >= 2 ? 700 : 568,
          backgroundImage: `url(${background})`,
        }}
      >
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
                paddingBottom: 15,
              }}
            >
              <a href="#">
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
                    fontSize: 14,
                    color: '#FFED00',
                  }}
                >
                  «ЛЮБИМЫЙ ПРОДУКТ»
                </div>
                <div
                  style={{
                    fontWeight: 900,
                    fontSize: 11,
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
                  // height: 132,
                  fontSize: 24,
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  lineHeight: 28 / 24,
                  textTransform: 'uppercase',
                  color: '#ffffff',
                  mixBlendMode: 'normal',
                }}
              >
                Продукты питания собственного производства
              </h1>
            </div>
            <div className="flex flex-col w-full items-center">
              <Button
                href="docs/Catalog_2021.pdf"
                style={{ width: 170, height: 51 }}
                imgSrc={arrow}
                imgAlt="arrow"
                imgH={20}
                imgW={22}
                fontWeight={700}
                fontSize={16}
                name="скачать каталог"
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
              <a href="#">
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
                <div style={{ flex: 1 }}>
                  <h1
                    style={{
                      width: 400,
                      // height: 132,
                      fontSize: 40 + fontSizeCorrection,
                      fontStyle: 'normal',
                      fontWeight: 'bold',
                      lineHeight: 47 / 40,
                      textTransform: 'uppercase',
                      color: '#ffffff',
                      mixBlendMode: 'normal',
                    }}
                  >
                    Продукты питания собственного производства
                  </h1>
                </div>
                <div style={{ width: 230, textAlign: 'right' }}>
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
                  fontSize={36 + fontSizeCorrection}
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
