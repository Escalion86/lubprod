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

const productsItems = productsArray.map((item) => {
  return (
    <li className="products_item">
      <div className="products_content">
        <img
          className="object-fill"
          style={{ width: 239, minWidth: 239 }}
          src={item.src}
          alt={item.name}
        />
        <div>{item.name}</div>
      </div>
      <div className="products_button">
        <Button
          href="docs/Catalog_2021.pdf"
          style={{ width: 229 }}
          imgSrc={arrow}
          imgAlt="arrow"
          imgH={23}
          imgW={27}
          fontWeight={700}
          fontSize={20}
          name="скачать каталог"
        />
      </div>
    </li>
  )
})

const Products = ({ deviceSize }) => {
  // const fontSize = adaptiveFontSize(deviceSize)
  return (
    <div className="w-full overflow-hidden">
      <div
        className="w-full flex flex-col items-center"
        style={{
          paddingLeft: 135,
          paddingRight: 135,
          paddingTop: 70,
          paddingBottom: 50,
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
            fontSize: 64,
            fontWeight: 500,
            color: '#000324',
            textTransform: 'uppercase',
          }}
        >
          Продукция
        </h2>
        <ul className="products">{productsItems}</ul>
      </div>
    </div>
  )
}

export default Products
