import React from 'react';

const PersonalData = (props) => {
    return (
        <div>
            <p>
                Місце народження: {props.birthData}
            </p>
            <dl>
                <dt id="edc">Освіта:</dt>
                {
                    props.education.map((data, idx) => (
                        <dd key={idx}>{data}</dd>
                    ))}
            </dl>
            <div>
                <p>Хоббі</p>
                <ul>
                    {props.hobbies.map((data, idx) => (
                        <li id={'el-' + idx} key={idx} onClick={() => elementClick(idx)}>{data}</li>
                    ))}
                </ul>
            </div>
            <p>Улюблені фільми</p>
            <ol>
                {props.films.map((data, idx) => (
                    <li key={idx}>{data}</li>
                ))}
            </ol>
        </div>
    );

    function elementClick(idx) {
        let elementById = document.getElementById("el-0");
        let elementByQuerySelector = document.querySelector("#el-1");

        console.log(elementById)
        if (idx === 0) {
            changeBackgroundAndTextColor(elementById);
        } else if (idx === 1) {
            changeBackgroundAndTextColor(elementByQuerySelector)
        }

    }

    function changeBackgroundAndTextColor(element) {
        element.style.backgroundColor = randomColor()
        element.style.color = randomColor()
    }

    function randomColor() {
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        return "rgb(" + x + "," + y + "," + z + ")";
    }
};

export default PersonalData;