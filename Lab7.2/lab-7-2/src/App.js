import './App.css';
import GoodsCard from "./components/GoodsCard";

function App() {
    const goods = [
        {
            id: 1,
            imgSrc: 'https://content.rozetka.com.ua/goods/images/big_tile/379797258.jpg',
            title: 'Macallan Sherry Oak 25 YO 0.7 л 43%',
            description: 'Досить цікаво чи продають десь на розлив? Чув що віддає тархуном. Планував прикупити на Василя.',
            advantages: 'доступная цена',
            disadvantages: 'маленькая емкость',
            price: '149 999₴'
        },
        {
            id: 2,
            imgSrc: 'https://content.rozetka.com.ua/goods/images/big/10681855.jpg',
            title: 'Арманьяк Baron Gaston Legrand Bas Armagnac Carafe Pansue 1934',
            description: 'Купив щоб розпивати з тєстєм Петром Олексієвичем Варєніком в гаражі, поки Ніна не бачить. Відправив гроші через термінал Приватбанк на номер Водафон продавця. На жаль, прибіг Кутась й вкусив за ногу й відправив помилково на інший номер. Тепер збираємо з Петром Олексієвичем на нову пляшку.',
            advantages: 'Коробка красива',
            disadvantages: 'Нельзя употреблять после перегонки почками.',
            price: '806 615₴'
        },
        {
            id: 3,
            imgSrc: 'https://content1.rozetka.com.ua/goods/images/big/10697003.jpg',
            title: 'Вино Petrus Pomerol красное сухое 0.75 л 13.5%',
            description: 'Уговорили, возьму пару ящичков на дачу под шашлычки. А маринад из него для мяса должен быть божественен',
            advantages: 'не порошковое.',
            disadvantages: 'З однією ниркою важко пити',
            price: '533 458₴'
        },
        {
            id: 4,
            imgSrc: '',
            title: '',
            description: '',
            advantages: '',
            disadvantages: '',
            price: ''
        },
    ];


    return (
        <div className="App">
            <h1>Hello</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
                    {
                        goods.map(item => (
                            <div className="col-lg-4 mb-3 d-flex align-items-stretch h-5">
                                <GoodsCard item={item}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
