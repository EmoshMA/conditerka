import './Documentation.css'

function Documentation() {
    return <>
        <div className="links">
            <ul className="spisok">
                <li className="spisokmini">
                    <a href="#">Результаты СОУТ</a>
                </li>
                <li className="spisokmini">
                    <a href="#">Сертификаты качества пищевого сырья</a>
                </li>
                <li className="spisokmini">
                    <a href="#">Победитель Конкурса "Инновационный продукт"</a>
                </li>
                <li className="spisokmini">
                    <a href="#">Решение о техническом регламенте Таможенного союза о безопасности шоколада и шоколадной продукции</a>
                </li>
                <li className="spisokmini">
                    <a href="#">Технический регламент таможенного союза о безопасности пищевой продукции</a>
                </li>
                <li className="spisokmini">
                    <a href="#">Технический регламент таможенного союза пищевая продукция в части ее маркировки</a>
                </li>
            </ul>
        </div>
        <footer>
            <div className="container">
                <ul className="spisokfooter">
                    <li className="spisokfootermini">
                        О шоколаде
                    </li>
                    <li className="spisokfootermini">
                        Продукция
                    </li>
                    <li className="spisokfootermini">
                        Производство
                    </li>
                </ul>
                <ul className="spisokfooter">
                    <li className="spisokfootermini">
                        Достижения
                    </li>
                    <li className="spisokfootermini">
                        Новости
                    </li>
                    <li className="spisokfootermini">
                        Документация
                    </li>
                </ul>
                <div className="copyright">
                © Yellow Candy 2023
                </div>
            </div>
        </footer>

    </>;
}

export default Documentation