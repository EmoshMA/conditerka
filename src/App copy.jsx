import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import doc from './assets/doc.svg'
import mail from './assets/mail.png'
import facebook from './assets/facebook.png'
import insta from './assets/insta.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div className="wraper">
          <div className="header_wraper">
            <div className="log">
              <img src='img\Group.png' alt="" />
            </div>
            <ul>
              <li>
                <a href="#">О шоколаде</a>
              </li>
              <li>
                <a href="#">Продукция</a>
              </li>
              <li>
                <a href="#">Достиженя</a>
              </li>
              <li>
                <a href="#">Новости</a>
              </li>
              <li>
                <a href="#">Документация</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
          </div>
          <div className="heder_logo_text">
            <p>
              СЛАДКО ТАМ
              <br />
              ГДЕ МЫ
            </p>
          </div>
        </div>
      </header>
      <main>
        <div className="wraper2">
          <div className="wrap_img">
            <div className="img_wrap">
              <img src="./img/image2.png" alt="" />
              <div className="continet_text">
                <p className='wokolad'>Шоколад</p>
                <p className='info'>На нашей фабрике шоколатье измельчают ингредиенты, чтобы шоколад буквально таял во рту. Чтобы добиться еще более нежной текстуры шоколада, мы час за часом медленно и тщательно перемешиваем нагретую шоколадную массу. В нашем шоколаде есть место только ингредиентам высочайшего качества. Красители, усилители вкуса и консерванты — это не наш путь.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <div className="content1">
        <div className="op">
          <h1 className="h1">Современное безопасное производство!</h1>
          <div className="inf">
            Регулярно на кондитерской фабрике “Yellow Candy” происходят изменения —
            предприятие растет, наращивает производственные мощности, внедряет новые
            технологии, расширяет ассортимент выпускаемой продукции, завоевывает новые
            награды. С 2012 года на предприятии внедрена система менеджмента качества
            по международному стандарту ISO 9001, что гарантирует высокое качество и
            безопасность готовой продукции. На нашем предприятии работают только
            квалифицированные профессионалы в этой сфере. Высококачественное
            оборудование позволяет с высокой скоростью тщательно обрабатывать нашу
            продукцию для Вас.
          </div>
        </div>
        <img className="img1" src="img/image19.png" alt="" />
      </div>
      <div className="content2">
        <h1 className="w1">Количество проданного товара за последний месяц</h1>
        <img style={{ width: "80%" }} src="img/Grafik.png" alt="" />
      </div>



      <div className="ecran4">
    <div className="fon4">
      <div className="fon4-2">
        <div className="fon4-text">
          <h2>Новости</h2>
          <h3>
            Одна из крупнейших кондитерских фабрик <br /> "Yellow Candy" сегодня
            отмечает Юбилей
          </h3>
          <p className="date">14 сентября 2023</p>
          <p className="main-text">
            Нашей фабрике – 80 лет! Начав свою деятельность в 1943 году, бессменно
            занимается производством кондитерских продуктов. Благодаря усилиям
            трудового коллектива, сохранению традиций, профессионализму и
            энтузиазму работников производства, чьи усилия были направлены на
            повышение качества и расширение ассортимента продукции, узнаваемость
            брендов. Технологическая модернизация предприятия идет по пути
            динамичного развития и уверенно смотрит в будущее.
          </p>
          <p className="podrobnee">Подробнее&gt;&gt;</p>
        </div>
      </div>
      
      <img src="./src/assets/image22.png" alt="" srcset="" />
    </div>
  </div>






  {/* <div className="ecran3">
  <div className="blok3 b-1">
    <p>Брауни</p>
    <img src="./src/assets/img1.png" alt="" />
  </div>
  <div className="blok3 b-2">
    <p>Конфеты</p>
    <img src="./src/assets/img2.png" alt="" />
  </div>
  <div className="blok3 b-3">
    <p>Шоколад</p>
    <img src="./src/assets/img3.png" alt="" />
  </div>
  <div className="blok3 b-4">
    <p>Батончики</p>
    <img src="./src/assets/img4.png" alt="" />
  </div>
  <div className="blok3 b-5">
    <p>Печенье</p>
    <img src="./src/assets/img5.png" alt="" />
  </div>
  <div className="blok3 b-6">
    <p>Рулеты</p>
    <img src="./src/assets/img6.png" alt="" />
  </div>
</div> */}




<div className="ecran3">
  <div className="bl3-1">
    <div className="blok3 b-1">
      <p>Брауни</p>
      <img src="./src/assets/img1.png" alt="" />
    </div>
    <div className="blok3 b-2">
      <p>Конфеты</p>
      <img src="./src/assets/img2.png" alt="" />
    </div>
    <div className="blok3 b-3">
      <p>Шоколад</p>
      <img src="./src/assets/img3.png" alt="" />
    </div>
  </div>
  <div className="bl3-1">
    <div className="blok3 b-4">
      <p>Батончики</p>
      <img src="./src/assets/img4.png" alt="" />
    </div>
    <div className="blok3 b-5">
      <p>Печенье</p>
      <img src="./src/assets/img5.png" alt="" />
    </div>
    <div className="blok3 b-6">
      <p>Рулеты</p>
      <img src="./src/assets/img6.png" alt="" />
    </div>
  </div> 
</div>
    </>
  )
}

export default App
