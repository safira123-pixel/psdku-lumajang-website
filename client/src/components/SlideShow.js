import React from 'react'
import { Slide } from 'react-slideshow-image';
import Hero from './Hero'

const SlideShow = () => {
    return (
        <Slide
            autoplay={true}
            easing='cubic-out'
        >
            <div className="each-slide-effect">
                <Hero
                    backgroundImg='./assets/images/depan1.jpeg'
                    titleText="PSDKU LUMAJANG"
                    subtitleText={
                        <span>Politeknik Negeri Malang | PSDKU Lumajang</span>
                    }
                />
            </div>
            <div className="each-slide-effect">
                <Hero
                    backgroundImg="./assets/images/gedung.jpeg"
                    titleText="PSDKU LUMAJANG"
                    subtitleText={
                        <span>Politeknik Negeri Malang | PSDKU Lumajang</span>
                    }
                />
            </div>
            <div className="each-slide-effect">
                <Hero
                    backgroundImg='./assets/images/gedung1.jpeg'
                    titleText="PSDKU LUMAJANG"
                    subtitleText={
                        <span>Politeknik Negeri Malang | PSDKU Lumajang</span>
                    }
                />
            </div>
            <div className="each-slide-effect">
                <Hero
                    backgroundImg='./assets/images/otomotif2.jpeg'
                    titleText="PSDKU LUMAJANG"
                    subtitleText={
                        <span>Politeknik Negeri Malang | PSDKU Lumajang</span>
                    }
                />
            </div>
        </Slide>
    )
}

export default SlideShow