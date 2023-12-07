import React from 'react';
import LaptopImg from '../assets/images/laptop.jpg';
import IconTextCard from "./IconTextCard";

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
                    backgroundImage: `url(${LaptopImg})`,
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
        </div>
    );
};

export default Main;
