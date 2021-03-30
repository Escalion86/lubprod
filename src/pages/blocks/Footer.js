import React from 'react'

import './Title.css'

// import adaptiveFontSize from '../../helpers/adaptiveFontSize'
import footer_bg from '../../img/footer_bg.png'
import vk_black_logo from '../../img/vk_black_logo.png'
import instagram_black_logo from '../../img/instagram_black_logo.png'

const Footer = ({
  deviceSize = 5,
  paddingHorizontal = 135,
  fontSizeCorrection = 0,
  imgSizeCorrection = 1,
}) => {
  if (deviceSize <= 1) {
    imgSizeCorrection -= 0.4
  }

  return (
    <div className="w-full overflow-hidden">
      <div
        className="w-full flex flex-col"
        style={{
          paddingLeft: paddingHorizontal,
          paddingRight: paddingHorizontal,
          paddingTop: deviceSize >= 2 ? 80 : 16,
          paddingBottom: deviceSize >= 2 ? 59 : 16,
          position: 'relative',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // height: 270,
          backgroundImage: `url(${footer_bg})`,
        }}
      >
        <div className="flex flex-col items-center">
          <div
            className="flex flex-row justify-between"
            style={{ width: 124 * imgSizeCorrection }}
          >
            <a href="https://vk.com/lubprod" target="_blank" rel="noreferrer">
              <img
                className="object-fill"
                style={{
                  width: 43 * imgSizeCorrection,
                  minWidth: 43 * imgSizeCorrection,
                }}
                src={vk_black_logo}
                alt="vk"
              />
            </a>
            <a
              href="https://www.instagram.com/lubprod"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="object-fill"
                style={{
                  width: 43 * imgSizeCorrection,
                  minWidth: 43 * imgSizeCorrection,
                }}
                src={instagram_black_logo}
                alt="instagram"
              />
            </a>
          </div>
          <div
            style={{
              textAlign: 'center',
              fontSize:
                (deviceSize >= 2 ? 18 : 13) +
                fontSizeCorrection +
                (deviceSize === 2 ? 4 : 0),
              fontWeight: 'bold',
              color: '#000',
              marginTop: deviceSize >= 2 ? 20 : 11,
            }}
          >
            ИП Керимов АзадСамранОглы
            <br />
            СП «Любимый продукт»
            <br />
            2021
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
