import { FC, useEffect, useRef, useState } from 'react'

import Slider from './Slider'

import './AboutUs.scss'

const AboutUs: FC = () => {
    const [ show, setShow ] = useState<boolean>(false)
    const sectionRef = useRef<HTMLElement>(null)

    const onScrollToSection = () => {
        if (!sectionRef.current) {
            return
        }

        if (window.scrollY >= sectionRef.current.offsetTop - 500) {
            setShow(true)
            window.removeEventListener('scroll', onScrollToSection)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onScrollToSection)

        return () => window.removeEventListener('scroll', onScrollToSection)
    }, [])

    return (
        <section className={`about-us ${show ? 'show' : ''}`} ref={sectionRef}>
            <Slider show={show} />
            <div className='text-box'>
                <p className='text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies nisl et diam varius, non dapibus purus convallis. Nulla mollis nisi non risus vulputate elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget nibh ipsum. Aenean quis sapien in nulla feugiat placerat. Nam posuere est eu egestas sollicitudin. Curabitur ullamcorper nulla risus, at bibendum justo egestas a. Donec tincidunt, nibh vel condimentum fermentum, quam magna viverra nulla, a consequat sapien sapien a tellus. Sed vel suscipit tellus. Vestibulum vitae felis nisl. Duis feugiat eget sapien sit amet vehicula. Vivamus et pharetra risus, a iaculis diam.
                </p>
            </div>
        </section>
    )
}

export default AboutUs