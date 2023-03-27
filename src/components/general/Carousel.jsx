import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import ResponsiveContainerHOC from "../layout/ResponsiveContainerHOC";
import "./style.scss";

function ControlledCarousel({ name, length }) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    let fileNames = [];
    for (let i = 0; i < length; i++) {
        fileNames.push(`/img/${name}-${i + 1}.png`);
    }

    return (
        <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            className="d-block w-100"
        >
            {fileNames.map((fileName) => (
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={fileName}
                        alt="First slide"
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default ResponsiveContainerHOC(ControlledCarousel);
