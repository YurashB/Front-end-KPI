import './App.css';
import GoodsCard from "./components/GoodsCard";

function App() {
    const goods = [
        {
            id: 1,
            imgSrc: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbookpro-14-16-202310_GEO_US?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1699558878362',
            title: 'MacBook Pro 16-inch',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, nobis?',
            price: '$6999',
            link: 'https://www.apple.com/shop/buy-mac/macbook-pro/16-inch-space-black-apple-m3-max-with-16-core-cpu-and-40-core-gpu-48gb-memory-1tb'
        },
        {
            id: 2,
            imgSrc: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-mac-pro-display-202108?wid=400&hei=500&fmt=jpeg&qlt=95&.v=1625864626000',
            title: 'Pro Display XDR',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, nobis?',
            price: '$4999',
            link: 'https://www.apple.com/shop/buy-mac/macbook-pro/16-inch-space-black-apple-m3-max-with-16-core-cpu-and-40-core-gpu-48gb-memory-1tb'
        },
        {
            id: 3,
            imgSrc: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-pro-digitalmat-gallery-1-202306?wid=364&hei=333&fmt=jpeg&qlt=95&.v=1683842315753',
            title: 'Mac Pro',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, nobis?',
            price: '$69999',
            link: 'https://www.apple.com/shop/buy-mac/macbook-pro/16-inch-space-black-apple-m3-max-with-16-core-cpu-and-40-core-gpu-48gb-memory-1tb'
        },
        {
            id: 4,
            imgSrc: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-pro-202210?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1664578794100',
            title: 'Ipad Pro',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, nobis?',
            price: '$699',
            link: 'https://www.apple.com/shop/buy-mac/macbook-pro/16-inch-space-black-apple-m3-max-with-16-core-cpu-and-40-core-gpu-48gb-memory-1tb'
        },
        {
            id: 5,
            imgSrc: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1693086290312',
            title: 'IPhone 15 Pro',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, nobis?',
            price: '$999',
            link: 'https://www.apple.com/shop/buy-mac/macbook-pro/16-inch-space-black-apple-m3-max-with-16-core-cpu-and-40-core-gpu-48gb-memory-1tb'
        },{
            id: 6,
            imgSrc: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-s9-202309?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1693943487336',
            title: 'Apple Watch Series 9',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, nobis?',
            price: '$399',
            link: 'https://www.apple.com/shop/buy-mac/macbook-pro/16-inch-space-black-apple-m3-max-with-16-core-cpu-and-40-core-gpu-48gb-memory-1tb'
        },{
            id: 7,
            imgSrc: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-ultra2-202309?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1693611623658',
            title: 'Apple Watch Ultra 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, nobis?',
            price: '$699',
            link: 'https://www.apple.com/shop/buy-mac/macbook-pro/16-inch-space-black-apple-m3-max-with-16-core-cpu-and-40-core-gpu-48gb-memory-1tb'
        },
    ];


    return (
        <div className="App">
            <h1 className='text-center mt-4'>List of products</h1>
            <div className="container">
                <div className="row">
                    {
                        goods.map(item => (
                            <div className="d-flex align-items-stretch col-3 m-lg-5">
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
