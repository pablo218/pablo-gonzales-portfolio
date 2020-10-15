import React, { useState } from 'react'
import Menu from './Menu'

const SideBar = () => {

    const [visible, setVisible] = useState(false)

    const clicked = () => {
        setVisible(!visible)
    }


    return (
        <>
            <div className={`sidebar ${visible && "sidebar-visible"}`}>
                <div className="navigation" onClick={clicked}>
                    <span className={`navigation__icon ${visible ? 'navigation__icon__clicked' : ''} `}>&nbsp;</span>
                </div>
            </div>
            <Menu visible={visible} clicked={clicked} />
        </>

    )
}

export default SideBar
