import React from 'react'

import './Products.css'

import Button from '../components/Button'

import dumplings from '../../img/dumplings.png'
import fish from '../../img/fish.png'
import groats from '../../img/groats.png'
import meat from '../../img/meat.png'
import salads from '../../img/salads.png'
import sausage from '../../img/sausage.png'
import sunflower_seeds from '../../img/sunflower_seeds.png'

import arrow from '../../img/arrow.png'

const productsArray = [
  { name: 'Рыбная продукция', src: fish },
  { name: 'Мясная продукция', src: meat },
  { name: 'Семечки', src: sunflower_seeds },
  { name: 'Полуфабрикаты', src: dumplings },
  { name: 'Колбасная продукция', src: sausage },
  { name: 'Салаты и закуски', src: salads },
  { name: 'Бакалея', src: groats },
]

const ProductsItems = ({
  deviceSize = 5,
  fontSizeCorrection = 0,
  imgSizeCorrection = 1,
}) => {
  return productsArray.map((item) => {
    return (
      <li
        className="products_item"
        style={{
          width: (deviceSize > 5 ? 190 : 239) * imgSizeCorrection,
          height: (deviceSize > 5 ? 260 : 296) * imgSizeCorrection,
        }}
      >
        <div
          className="products_content"
          style={{
            fontSize: (deviceSize > 5 ? 18 : 20) * imgSizeCorrection,
            lineHeight: 1.1,
          }}
        >
          <img
            className="object-fill"
            style={{
              width: (deviceSize > 5 ? 190 : 239) * imgSizeCorrection,
              minWidth: (deviceSize > 5 ? 190 : 239) * imgSizeCorrection,
            }}
            src={item.src}
            alt={item.name}
          />
          <div>{item.name}</div>
        </div>
        <div
          className="products_button"
          style={{
            width: (deviceSize > 5 ? 190 : 239) * imgSizeCorrection,
            height: (deviceSize > 5 ? 260 : 296) * imgSizeCorrection,
          }}
        >
          <Button
            href="docs/Catalog_2021.pdf"
            style={{
              width: (deviceSize > 5 ? 180 : 229) * imgSizeCorrection,
            }}
            imgSrc={arrow}
            imgAlt="arrow"
            imgH={23 * imgSizeCorrection}
            imgW={27 * imgSizeCorrection}
            fontWeight={700}
            fontSize={16 + fontSizeCorrection + (deviceSize >= 2 ? 0 : -8)}
            name="скачать каталог"
          />
        </div>
      </li>
    )
  })
}

const Products = ({
  deviceSize = 5,
  paddingHorizontal = 135,
  fontSizeCorrection = 0,
  imgSizeCorrection = 1,
}) => {
  if (deviceSize <= 1) {
    imgSizeCorrection -= 0.4
  }
  // const fontSize = adaptiveFontSize(deviceSize)
  return (
    <div className="w-full overflow-hidden">
      <div
        className="w-full flex flex-col items-center"
        style={{
          paddingLeft: deviceSize > 5 ? 20 : paddingHorizontal,
          paddingRight: deviceSize > 5 ? 20 : paddingHorizontal,
          paddingTop: deviceSize >= 2 ? 70 : 30,
          paddingBottom: deviceSize >= 2 ? 50 : 30,
          position: 'relative',
          // height: 882,
          background:
            'linear-gradient(180deg, #CFE0EC 0%, #FFED00 56.25%, #EFF743 100%)',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            width: '100%',
            fontSize: (deviceSize >= 2 ? 56 : 20) + fontSizeCorrection,
            fontWeight: 500,
            color: '#000324',
            textTransform: 'uppercase',
          }}
        >
          Продукция
        </h2>
        <ul className="products" style={{ gap: 20 * imgSizeCorrection }}>
          <ProductsItems
            deviceSize={deviceSize}
            fontSizeCorrection={fontSizeCorrection}
            imgSizeCorrection={imgSizeCorrection}
          />
        </ul>
      </div>
    </div>
  )
}

export default Products
