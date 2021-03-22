import React from 'react'
import { Link } from 'react-scroll'

import './Title.css'
import Button from '../components/Button'
// import adaptiveFontSize from '../../helpers/adaptiveFontSize'
import background from '../../img/background.png'
import lubprod from '../../img/lubprod_logo.png'
import phone from '../../img/phone.png'
import arrow from '../../img/arrow.png'

const Title = ({ deviceSize }) => {
  // const fontSize = adaptiveFontSize(deviceSize)
  return (
    <div className="w-full overflow-hidden">
      {/*                           Титул                                      */}

      <div
        className="w-full flex flex-col"
        style={{
          paddingLeft: 135,
          paddingRight: 135,
          paddingTop: 70,
          paddingBottom: 70,
          position: 'relative',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: 700,
          backgroundImage: `url(${background})`,
        }}
      >
        <div
          className="flex flex-row"
          style={{ height: 60, width: '100%', paddingLeft: 210 }}
        >
          <ul className="menu">
            <li className="menu_item">
              <Link
                activeClass="active"
                to="general"
                spy={true}
                smooth={true}
                duration={500}
              >
                Главная
              </Link>
            </li>
            <li className="menu_item">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                О компании
              </Link>
            </li>
            <li className="menu_item">
              <Link
                activeClass="active"
                to="products"
                spy={true}
                smooth={true}
                duration={500}
              >
                Продукция
              </Link>
            </li>
            <li className="menu_item">
              <Link
                activeClass="active"
                to="contacts"
                spy={true}
                smooth={true}
                duration={500}
              >
                Контакты
              </Link>
            </li>
          </ul>
          <div className="flex flex-row">
            <img
              className="object-fill mx-1"
              style={{ height: 37, width: 37, minWidth: 37, margin: 4 }}
              src={phone}
              alt="phone"
            />
            <div className="flex flex-col" style={{ marginLeft: 26 }}>
              <a className="phone" href="tel:+73425436076">
                +7 (34254)3-60-76
              </a>
              <a className="phone" href="tel:+73425436077">
                +7 (34254)3-60-77
              </a>
            </div>
          </div>
        </div>
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
                style={{ height: 166, width: 194, minWidth: 194 }}
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
                    width: 421,
                    // height: 132,
                    fontSize: 40,
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
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 900, fontSize: 30, color: '#fff' }}>
                  Торговая марка
                </div>
                <div
                  style={{ fontWeight: 900, fontSize: 30, color: '#FFED00' }}
                >
                  «ЛЮБИМЫЙ ПРОДУКТ»
                </div>
                <div style={{ fontWeight: 900, fontSize: 24, color: '#fff' }}>
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
                style={{ width: 368 }}
                imgSrc={arrow}
                imgAlt="arrow"
                imgH={38}
                imgW={44}
                fontWeight={700}
                fontSize={36}
                name="скачать каталог"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Title
