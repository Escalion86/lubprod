import React from 'react'

import './Title.css'

// import adaptiveFontSize from '../../helpers/adaptiveFontSize'
import footer_bg from '../../img/footer_bg.png'
import vk_black_logo from '../../img/vk_black_logo.png'
import instagram_black_logo from '../../img/instagram_black_logo.png'

const Footer = ({ deviceSize }) => {
  // const fontSize = adaptiveFontSize(deviceSize)
  return (
    <div className="w-full overflow-hidden">
      {/*                           Титул                                      */}

      <div
        className="w-full flex flex-col"
        style={{
          paddingLeft: 135,
          paddingRight: 135,
          paddingTop: 80,
          paddingBottom: 59,
          position: 'relative',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: 270,
          backgroundImage: `url(${footer_bg})`,
        }}
      >
        <div className="flex flex-col items-center">
          <div className="flex flex-row justify-between" style={{ width: 124 }}>
            <a href="#" target="_blank">
              <img
                className="object-fill"
                style={{ width: 43, minWidth: 43 }}
                src={vk_black_logo}
                alt="vk"
              />
            </a>
            <a href="#" target="_blank">
              <img
                className="object-fill"
                style={{ width: 43, minWidth: 43 }}
                src={instagram_black_logo}
                alt="instagram"
              />
            </a>
          </div>
          <div
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontWeight: 'bold',
              color: '#000',
              marginTop: 20,
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
