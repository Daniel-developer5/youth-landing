import { FC, useEffect, useRef } from 'react'

import SlickSlider, { Settings } from 'react-slick'

import './Slider.scss'

interface SliderProps {
    show: boolean
}

const Slider: FC<SliderProps> = ({ show }) => {
    const sliderRef = useRef<SlickSlider | null>(null)

    const settings: Settings = {
        infinite: true,
        speed: 500,
        arrows: false,
        dots: false,
        autoplay: true
    }

    useEffect(() => {
        sliderRef.current?.slickPause()        
    }, [])

    useEffect(() => {
        if (show) {
            sliderRef.current?.slickPlay()        
        }
    }, [show])

    return (
        <section className={`about-us-slider ${show ? 'show' : ''}`}>
            <SlickSlider {...settings} ref={ref => sliderRef.current = ref}>
                <div className='slide slide-1'></div>
                <div className='slide slide-2'></div>
                <div className='slide slide-3'></div>
            </SlickSlider>
        </section>
    )
}

export default Slider