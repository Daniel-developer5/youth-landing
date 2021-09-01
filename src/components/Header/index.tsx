import { FC } from 'react'

import HeaderContent from './HeaderContent'

import './Header.scss'

const Header: FC = () => {
    return (
        <header className='header'>
            <HeaderContent />
            <div className='slide-right-animation'>
                <HeaderContent dark />
            </div>
        </header>
    )
}

export default Header