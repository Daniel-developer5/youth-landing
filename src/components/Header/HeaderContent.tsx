import { FC } from 'react'

import Cross from './Cross'

interface HeaderContentProps {
    dark?: boolean
}

const HeaderContent: FC<HeaderContentProps> = ({ dark }) => {
    return (
        <div className={`header-content ${dark ? 'dark' : ''}`}>
            <div className='content-box'>
                <h2 className='title'>primirenie</h2>
                <div className='cross-img'>
                    <Cross />
                </div>
                <h2 className='title'>youth</h2>
            </div>
        </div>
    )
}

export default HeaderContent