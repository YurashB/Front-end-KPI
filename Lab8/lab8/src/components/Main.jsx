import React from 'react';
import IconTextCard from "./IconTextCard";
import PricingCard from "./PricingCard";


const Main = () => {
    const firstCards = [
        {
            title: "Creative",
            content: "Far far away, behind the word mountains, far from the countries.",
            icon: "fas bi bi-lightning-charge-fill cian"
        },
        {
            title: "Design",
            content: "Far far away, behind the word mountains, far from the countries.",
            icon: "fas bi bi-life-preserver cian"
        },
    ]
    const secondCards = [
        {
            title: "Years of Experience",
            content: "Far far away, behind the word mountains, far from the countries.",
            icon: "fas bi bi-buildings cian wrap-icon"
        },
        {
            title: "Innovations",
            content: "Far far away, behind the word mountains, far from the countries.",
            icon: "fas bi bi-laptop wrap-icon cian"
        },
        {
            title: "Solutions",
            content: "Far far away, behind the word mountains, far from the countries.",
            icon: "fas bi bi-lock-fill wrap-icon cian"
        },
    ]
    const thirdCard = [
        {
            title: "Innovations",
            content: "Far far away, behind the word mountains, far from the countries.",
            icon: "fas bi bi-laptop wrap-icon cian"
        },
        {
            title: "Solutions",
            content: "Far far away, behind the word mountains, far from the countries.",
            icon: "fas bi bi-lock-fill wrap-icon cian"
        },
    ]
    const pricing = [
        {
            title: "Free",
            price: "0.00",
            backgroundColor: "color-1",
            features: [
                "Basic support",
                "Migration Support",
                "Dedicated Technical Support",
                "Services",
            ]
        },
        {
            title: "Premium",
            price: "99.00",
            backgroundColor: "color-2",
            features: [
                "Basic support",
                "Migration Support",
                "Dedicated Technical Support",
                "Services",
            ]
        },
        {
            title: "Enterprise",
            price: "180.00",
            backgroundColor: "color-3",
            features: [
                "Basic support",
                "Migration Support",
                "Dedicated Technical Support",
                "Services",
            ]
        }
    ]

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col d-flex">
                    <div className="intro align-self-center">
                        <h1 className="mb-5">Design is not just what it looks like and how it feels. Design is
                            how it works.</h1>
                        <div className="d-flex flex-row">
                            {firstCards.map(card => (
                                <IconTextCard title={card.title} content={card.content} icon={card.icon}/>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col p-0 " style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/laptop.jpg'})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    position: "relative",
                    height: 700
                }}>
                    <div className="block text-white">
                        <i className="bi bi-buildings" style={{fontSize: 40}}></i>
                        <h3>Modern Design</h3>
                        <p>Far far away, behind the word mountains, far from the countries.</p>
                    </div>
                </div>
            </div>
            <div className="row bg-light">
                <div className="container bg-light">
                    <div className="row justify-content-center pt-100">
                        <div className="col-6 text-center mb-5 mt-5">
                            <span className="subtitle">About us</span>
                            <h2 className="fw-normal">Far far away, behind the word mountains, far from the
                                countries.</h2>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-center">
                            {secondCards.map(card => (
                                <div className="col-lg-3 mb-3">
                                    <IconTextCard title={card.title} content={card.content} icon={card.icon}/>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            <div className="row pt-100 pb-100">
                    <div className="untree_co-grid">
                            <a href="#" className="img img-1" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/img1.jpg'})`}}></a>
                            <a href="#" className="img img-2" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/img2.jpg'})`}}></a>
                            <a href="#" className="img img-3" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/img3.jpg'})`}}></a>
                            <a href="#" className="img img-4" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/img4.jpg'})`}}></a>
                            <a href="#" className="img img-5" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/img5.jpg'})`}}></a>
                    </div>
            </div>
            <div className="row bg-light pb-100">
                <div className="container bg-light">
                    <div className="row justify-content-center">
                        <div className="col-6 text-center mb-5 mt-5 pt-100">
                            <span className="subtitle">Pricing for all</span>
                            <h2 className="fw-normal">Far far away, behind the word mountains, far from the
                                countries.</h2>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-center">
                            {pricing.map(card => (
                                <div className="col-lg-3 p-0">
                                    <PricingCard
                                        backgroundColor={card.backgroundColor}
                                        title={card.title}
                                        price={card.price}
                                        features={card.features}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            <div className="pt-100 pb-100"></div>
            <div className="row pb-100">
                <div className="col text-center mb-5 d-flex justify-content-center ">
                    <div className="w-75 text-start">
                        <span className="subtitle">About us</span>
                        <h2 className="fw-normal">Far far away, behind the word mountains, far from the
                            countries.</h2>
                    </div>
                </div>
                <div className="col d-flex justify-content-center align-items-center">
                    <div>
                        {thirdCard.map(card => (
                            <IconTextCard title={card.title} content={card.content} icon={card.icon}/>
                        ))}
                    </div>
                </div>
            </div>
            <div className="row pt-100 pb-100">
                <div className="testimonial-grid">
                    <div className="testimonial-image"
                         style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/img.png'})`}}></div>
                    <div className="testimonial-inner w-75">
                        <blockquote>
                            “Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
                            Semantics, a large language ocean.”
                            <div className="person-image mt-3 d-flex align-items-center pt-5">
                                <img src="/images/ElonMusk.jpg" alt="Image" className="img-fluid"/>
                                <div>
                                    <span className="name row">Elon Musk</span>
                                    <span className="position row">CEO, Co-Founder</span>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
