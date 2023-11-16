import React from "react";
import PersonalData from "./PersonalData";
import TextList from "./TextList";
import Image from "../image/Image";

class ClassContent extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <main>
                <PersonalData
                    birthData={this.props.birthData}
                    education={this.props.education}
                    hobbies={this.props.hobbies}
                    films={this.props.films}
                />
                <TextList texts={this.props.texts}/>
                <Image
                    href={this.props.image.href}
                    src={this.props.image.src}
                    alt={this.props.image.alt}
                    size={this.props.image.size}
                />
            </main>
        )
    }

}

export default ClassContent