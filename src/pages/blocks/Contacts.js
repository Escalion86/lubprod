import React, { useState } from 'react'

import './Contacts.css'

const ListArrow = ({ listOpen = false, onClick = () => {} }) => {
  return (
    <div className={'list-btn' + (listOpen ? ' open' : '')} onClick={onClick}>
      <div className="list-btn__arrow" />
    </div>
  )
}

const Dot = () => (
  <div
    style={{
      height: 6,
      width: 6,
      borderRadius: 5,
      backgroundColor: '#000',
      marginRight: 8,
    }}
  />
)

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

const OfficesItems = ({
  deviceSize = 5,
  fontSizeCorrection = 0,
  imgSizeCorrection = 1,
}) =>
  officesArray.map((item, index) => {
    return (
      <li
        className="offices_item"
        style={{
          marginTop:
            index > 0 ? (deviceSize >= 2 ? 24 : 18) * imgSizeCorrection : 0,
        }}
      >
        <div
          className="offices_item_name"
          style={{ fontSize: (deviceSize >= 2 ? 18 : 13) + fontSizeCorrection }}
        >
          {item.name}
        </div>
        <div className="flex flex-col">
          {item.phone ? (
            <a
              className="offices_item_phone"
              style={{
                fontSize: (deviceSize >= 2 ? 18 : 13) + fontSizeCorrection,
              }}
              href={'tel:' + item.phone.replace(/[^+\d]/g, '')}
            >
              {item.phone}
            </a>
          ) : null}
          {item.email ? (
            <a
              className="offices_item_email"
              style={{
                fontSize: (deviceSize >= 2 ? 18 : 13) + fontSizeCorrection,
              }}
              href={'mailto:' + item.email}
            >
              {item.email}
            </a>
          ) : null}
        </div>
      </li>
    )
  })

const ProductionItems = ({
  deviceSize = 5,
  fontSizeCorrection = 0,
  imgSizeCorrection = 1,
}) =>
  productionArray.map((item, index) => {
    return (
      <li
        className="production_item"
        style={{
          marginTop:
            index > 0 ? (deviceSize >= 2 ? 24 : 18) * imgSizeCorrection : 0,
        }}
      >
        <div
          className="production_item_name"
          style={{ fontSize: (deviceSize >= 2 ? 18 : 13) + fontSizeCorrection }}
        >
          {item.name}
        </div>
        <div className="flex flex-col">
          {item.phone ? (
            <a
              className="production_item_phone"
              style={{
                fontSize: (deviceSize >= 2 ? 18 : 13) + fontSizeCorrection,
              }}
              href={'tel:' + item.phone.replace(/[^+\d]/g, '')}
            >
              {item.phone}
            </a>
          ) : null}
          {item.email ? (
            <a
              className="production_item_email"
              style={{
                fontSize: (deviceSize >= 2 ? 18 : 13) + fontSizeCorrection,
              }}
              href={'mailto:' + item.email}
            >
              {item.email}
            </a>
          ) : null}
        </div>
      </li>
    )
  })

const FilialsItems = ({
  deviceSize = 5,
  fontSizeCorrection = 0,
  imgSizeCorrection = 1,
}) =>
  filialsArray.map((item, index) => {
    return (
      <li
        className="filials_item"
        style={{
          marginTop:
            index > 0 ? (deviceSize >= 2 ? 24 : 18) * imgSizeCorrection : 0,
        }}
      >
        <div
          className="filials_item_name"
          style={{ fontSize: (deviceSize >= 2 ? 18 : 13) + fontSizeCorrection }}
        >
          {item.city}
          <br />
          {item.adress}
        </div>
        <div className="flex flex-col">
          {item.phone1 ? (
            <a
              className="filials_item_phone"
              style={{
                fontSize: (deviceSize >= 2 ? 18 : 13) + fontSizeCorrection,
              }}
              href={'tel:' + item.phone1.replace(/[^+\d]/g, '')}
            >
              {item.phone1}
            </a>
          ) : null}
          {item.phone2 ? (
            <a
              className="filials_item_phone"
              style={{
                fontSize: (deviceSize >= 2 ? 18 : 13) + fontSizeCorrection,
              }}
              href={'tel:' + item.phone2.replace(/[^+\d]/g, '')}
            >
              {item.phone2}
            </a>
          ) : null}
          {item.workTime ? (
            <div
              className="filials_item_workTime"
              style={{
                fontSize: (deviceSize >= 2 ? 18 : 13) + fontSizeCorrection,
              }}
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

  const [officesOpen, setOfficesOpen] = useState(false)
  const [filialsOpen, setFilialsOpen] = useState(false)
  const [productionOpen, setProductionOpen] = useState(false)
  const toggleOffices = () => {
    setOfficesOpen(!officesOpen)
  }
  const toggleProduction = () => {
    setProductionOpen(!productionOpen)
  }
  const toggleFilials = () => {
    setFilialsOpen(!filialsOpen)
  }
  // const fontSize = adaptiveFontSize(deviceSize)
  return (
    <div className="w-full overflow-hidden">
      <div
        className="w-full flex flex-col"
        style={{
          paddingLeft: paddingHorizontal,
          paddingRight: paddingHorizontal,
          paddingTop: deviceSize >= 2 ? 60 : 30,
          paddingBottom: deviceSize >= 2 ? 60 : 30,
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
            fontSize: (deviceSize >= 2 ? 56 : 20) + fontSizeCorrection,
            fontWeight: 500,
            color: '#FFEE17',
            textTransform: 'uppercase',
            marginBottom: deviceSize >= 2 ? 30 : 10,
          }}
        >
          Контакты
        </h2>
        {deviceSize <= 1 ? (
          <div className="w-full flex flex-col" style={{ gap: 15 }}>
            <div className="w-full flex flex-row items-center">
              <Dot />
              <div
                className="offices_title"
                style={{
                  flex: 1,
                  fontSize: 16 + fontSizeCorrection,
                  // marginTop: 16 * imgSizeCorrection,
                }}
              >
                <strong>ОФИС</strong> / Пермский край, г. Верещагино
              </div>
              <ListArrow listOpen={officesOpen} onClick={toggleOffices} />
            </div>
            <ul className={'offices' + (officesOpen ? ' open' : '')}>
              <OfficesItems
                deviceSize={deviceSize}
                fontSizeCorrection={fontSizeCorrection}
                imgSizeCorrection={imgSizeCorrection}
              />
            </ul>
            <div className="w-full flex flex-row items-center">
              <Dot />
              <div
                className="filials_title"
                style={{
                  flex: 1,
                  fontSize: 16 + fontSizeCorrection,
                  // marginTop: 16 * imgSizeCorrection,
                }}
              >
                <strong>ФИЛИАЛЫ</strong> / Пермский край
              </div>
              <ListArrow listOpen={filialsOpen} onClick={toggleFilials} />
            </div>
            <ul className={'filials' + (filialsOpen ? ' open' : '')}>
              <FilialsItems
                deviceSize={deviceSize}
                fontSizeCorrection={fontSizeCorrection}
                imgSizeCorrection={imgSizeCorrection}
              />
            </ul>
            <div className="w-full flex flex-row items-center">
              <Dot />
              <div
                className="production_title"
                style={{
                  flex: 1,
                  fontSize: 16 + fontSizeCorrection,
                  // marginTop: 16 * imgSizeCorrection,
                }}
              >
                <strong>ПРОИЗВОДСТВО</strong> / Пермский край,
                <br />
                д.Рябины, ул.Птицеводов, 5
              </div>
              <ListArrow listOpen={productionOpen} onClick={toggleProduction} />
            </div>
            <ul className={'production' + (productionOpen ? ' open' : '')}>
              {/* <ul className={'production open'}> */}
              <ProductionItems
                deviceSize={deviceSize}
                fontSizeCorrection={fontSizeCorrection}
                imgSizeCorrection={imgSizeCorrection}
              />
            </ul>
            <div className="w-full flex flex-row items-center">
              <Dot />
              <div
                className="shop_title"
                style={{
                  fontSize: 16 + fontSizeCorrection,
                }}
              >
                <strong>ФИРМЕННЫЙ МАГАЗИН</strong> / Пермский край,
                <br />
                г.Верещагино, ул.Фабричная, 69В ТЦ "Лето"
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-row" style={{ gap: 150 }}>
            <div style={{ flex: 1 }}>
              <div>
                <div
                  className="offices_title"
                  style={{
                    fontSize: 18 + fontSizeCorrection,
                    marginTop: 18 * imgSizeCorrection,
                  }}
                >
                  <strong>ОФИС</strong> / Пермский край, г. Верещагино
                </div>
              </div>
              <div className="list-arrow"></div>
              <Separator imgSizeCorrection={imgSizeCorrection} />
              <ul className="offices open">
                <OfficesItems
                  deviceSize={deviceSize}
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
              <ul className="filials open">
                <FilialsItems
                  deviceSize={deviceSize}
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
              <ul className="production open">
                <ProductionItems
                  deviceSize={deviceSize}
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
        )}
      </div>
    </div>
  )
}

export default Contacts
