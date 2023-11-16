import React from 'react';

const Image = (props) => {
    const imgSrc = props.src
    const [height, setHeight] = React.useState(props.size.height > 0 ? Number(props.size.height) : 385);
    const [width, setWidth] = React.useState(props.size.width > 0 ? Number(props.size.width) : 730);
    const [src, setSrc] = React.useState(props.src);

    console.log(height)
    return (
        <div>
            <a href={props.href}>
                <img
                    src={src}
                    alt={props.alt} width={width} height={height}/>
            </a>
            <div>
                <button id="add-pic-btn" onClick={addPicture}>Додати</button>
                <button id="increase-pic-btn" onClick={increasePicture}>Збільшити</button>
                <button id="reduce-pic-btn" onClick={reducePicture}>Зменшити</button>
                <button id="remove-pic-btn" onClick={removePicture}>Видалити</button>
            </div>
        </div>
    );

    function increasePicture() {
        if (!src) {
            alert("Src was deleted");
        } else {
            setHeight(height + 20)
            setWidth(width + 20)
        }
    }

    function reducePicture() {
        if (!src) {
            alert("Src was deleted");
        } else {
            setHeight(height - 20)
            setWidth(width - 20)
        }
    }

    function removePicture() {
        setSrc("")
    }

    function addPicture() {
        setSrc(imgSrc)
    }
};

export default Image;