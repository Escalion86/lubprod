import React from 'react'

import './Contacts.css'

const officesArray = [
  {
    name: 'Отдел продаж',
    phone: '+7 (952) 649-00-68',
    email: 'supervisor@lubprod.ru',
  },
  {
    name: 'Отдел закупок',
    phone: '+7 (34254) 3-60-76',
    email: 'sale@lubprod.ru',
  },
  { name: 'Отдел доставки', phone: '+7 (952) 330-59-59', email: null },
  {
    name: 'Отдел кадров',
    phone: '+7 (34254) 3-60-76',
    email: 'hrspecialist@lubprod.ru',
  },
  { name: 'Бухгалтерия', phone: '+7 (34252) 3-64-45', email: 'buh@lubprod.ru' },
  {
    name: 'Выписка продукции',
    phone: '+7 (34254) 3-60-77',
    email: 'operator@lubprod.ru',
  },
  { name: 'Отдел маркетинга', phone: null, email: 'marketing@lubprod.ru' },
  { name: 'Коммерческий директор', phone: null, email: 's.shmyrin@lubprod.ru' },
]

const productionArray = [
  {
    name: 'Отдел контроля качества',
    phone: '+7 (34254) 3-77-87',
    email: 'control@lubprod.ru',
  },
]

const filialsArray = [
  {
    city: 'г.Верещагино',
    adress: 'ул. Энергетиков, 18',
    phone1: '+7 (34254) 3-60-76',
    phone2: '+7 (34254) 3-60-77',
    workTime: null,
  },
  {
    city: 'г.Кудымкар',
    adress: 'ул. Автозаправочная, 9/2',
    phone1: '+7 (342) 604-10-07',
    phone2: null,
    workTime: 'с 9:00 до 17:00',
  },
  {
    city: 'г.Кунгур',
    adress: 'ул. Пролетарская, 106А',
    phone1: '+7 (342) 713-99-37',
    phone2: null,
    workTime: 'с 9:00 до 17:00',
  },
  {
    city: 'г.Пермь',
    adress: 'ул. 3-Водопроводная, база "Гастроном", склад №1',
    phone1: '+7 (908) 254-40-32',
    phone2: null,
    workTime: null,
  },
]

const OfficesItems = ({ fontSizeCorrection = 0, imgSizeCorrection = 1 }) =>
  officesArray.map((item, index) => {
    return (
      <li
        className="offices_item"
        style={{ marginTop: index > 0 ? 24 * imgSizeCorrection : 0 }}
      >
        <div
          className="offices_item_name"
          style={{ fontSize: 18 + fontSizeCorrection }}
        >
          {item.name}
        </div>
        <div className="flex flex-col">
          {item.phone ? (
            <a
              className="offices_item_phone"
              style={{ fontSize: 18 + fontSizeCorrection }}
              href={'tel:' + item.phone.replace(/[^+\d]/g, '')}
            >
              {item.phone}
            </a>
          ) : null}
          {item.email ? (
            <a
              className="offices_item_email"
              style={{ fontSize: 18 + fontSizeCorrection }}
              href={'mailto:' + item.email}
            >
              {item.email}
            </a>
          ) : null}
        </div>
      </li>
    )
  })

const ProductionItems = ({ fontSizeCorrection = 0, imgSizeCorrection = 1 }) =>
  productionArray.map((item, index) => {
    return (
      <li
        className="production_item"
        style={{ marginTop: index > 0 ? 24 * imgSizeCorrection : 0 }}
      >
        <div
          className="production_item_name"
          style={{ fontSize: 18 + fontSizeCorrection }}
        >
          {item.name}
        </div>
        <div className="flex flex-col">
          {item.phone ? (
            <a
              className="production_item_phone"
              style={{ fontSize: 18 + fontSizeCorrection }}
              href={'tel:' + item.phone.replace(/[^+\d]/g, '')}
            >
              {item.phone}
            </a>
          ) : null}
          {item.email ? (
            <a
              className="production_item_email"
              style={{ fontSize: 18 + fontSizeCorrection }}
              href={'mailto:' + item.email}
            >
              {item.email}
            </a>
          ) : null}
        </div>
      </li>
    )
  })

const FilialsItems = ({ fontSizeCorrection = 0, imgSizeCorrection = 1 }) =>
  filialsArray.map((item, index) => {
    return (
      <li
        className="filials_item"
        style={{ marginTop: index > 0 ? 24 * imgSizeCorrection : 0 }}
      >
        <div
          className="filials_item_name"
          style={{ fontSize: 18 + fontSizeCorrection }}
        >
          {item.city}
          <br />
          {item.adress}
        </div>
        <div className="flex flex-col">
          {item.phone1 ? (
            <a
              className="filials_item_phone"
              style={{ fontSize: 18 + fontSizeCorrection }}
              href={'tel:' + item.phone1.replace(/[^+\d]/g, '')}
            >
              {item.phone1}
            </a>
          ) : null}
          {item.phone2 ? (
            <a
              className="filials_item_phone"
              style={{ fontSize: 18 + fontSizeCorrection }}
              href={'tel:' + item.phone2.replace(/[^+\d]/g, '')}
            >
              {item.phone2}
            </a>
          ) : null}
          {item.workTime ? (
            <div
              className="filials_item_workTime"
              style={{ fontSize: 18 + fontSizeCorrection }}
              href={'mailto:' + item.workTime}
            >
              {item.workTime}
            </div>
          ) : null}
        </div>
      </li>
    )
  })

const Separator = ({ imgSizeCorrection = 1 }) => {
  return (
    <div
      style={{
        width: '100%',
        height: 2,
        backgroundColor: '#C4C4C4',
        marginTop: 16 * imgSizeCorrection,
        marginBottom: 16 * imgSizeCorrection,
      }}
    />
  )
}

const Contacts = ({
  deviceSize = 5,
  paddingHorizontal = 135,
  fontSizeCorrection = 0,
  imgSizeCorrection = 1,
}) => {
  fontSizeCorrection = fontSizeCorrection / 2
  // const fontSize = adaptiveFontSize(deviceSize)
  return (
    <div className="w-full overflow-hidden">
      <div
        className="w-full flex flex-col"
        style={{
          paddingLeft: paddingHorizontal,
          paddingRight: paddingHorizontal,
          paddingTop: 60,
          paddingBottom: 60,
          position: 'relative',
          // height: 770,
          background:
            'linear-gradient(192.43deg, #4779BC 16.89%, rgba(0, 95, 223, 0.83) 195.5%)',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            width: '100%',
            fontSize: 64 + fontSizeCorrection,
            fontWeight: 500,
            color: '#FFEE17',
            textTransform: 'uppercase',
            marginBottom: 30,
          }}
        >
          Контакты
        </h2>
        <div className="w-full flex flex-row" style={{ gap: 150 }}>
          <div style={{ flex: 1 }}>
            <div
              className="offices_title"
              style={{
                fontSize: 18 + fontSizeCorrection,
                marginTop: 18 * imgSizeCorrection,
              }}
            >
              <strong>ОФИС</strong> / Пермский край, г. Верещагино
            </div>
            <Separator imgSizeCorrection={imgSizeCorrection} />
            <ul className="offices">
              <OfficesItems
                fontSizeCorrection={fontSizeCorrection}
                imgSizeCorrection={imgSizeCorrection}
              />
            </ul>
          </div>
          <div style={{ flex: 1 }}>
            <div
              className="filials_title"
              style={{
                fontSize: 18 + fontSizeCorrection,
                marginTop: 18 * imgSizeCorrection,
              }}
            >
              <strong>ФИЛИАЛЫ</strong> / Пермский край
            </div>
            <Separator imgSizeCorrection={imgSizeCorrection} />
            <ul className="filials">
              <FilialsItems
                fontSizeCorrection={fontSizeCorrection}
                imgSizeCorrection={imgSizeCorrection}
              />
            </ul>
            <div
              className="production_title"
              style={{
                fontSize: 18 + fontSizeCorrection,
                marginTop: 18 * imgSizeCorrection,
              }}
            >
              <strong>ПРОИЗВОДСТВО</strong> / Пермский край,
              <br />
              д.Рябины, ул.Птицеводов, 5
            </div>
            <Separator imgSizeCorrection={imgSizeCorrection} />
            <ul className="production">
              <ProductionItems
                fontSizeCorrection={fontSizeCorrection}
                imgSizeCorrection={imgSizeCorrection}
              />
            </ul>
            <div
              className="shop_title"
              style={{
                fontSize: 18 + fontSizeCorrection,
                marginTop: 18 * imgSizeCorrection,
              }}
            >
              <strong>ФИРМЕННЫЙ МАГАЗИН</strong> / Пермский край,
              <br />
              г.Верещагино, ул.Фабричная, 69В ТЦ "Лето"
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
