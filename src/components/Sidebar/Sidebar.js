import React from 'react'
import Nav from './Nav'

function Sidebar({title}) {
    return (
        <div style={{
            display: `flex`,
            flexDirection: `column`,
            paddingLeft: `2rem`,
            paddingRight: `2rem`
          }}
        >
            <Nav 
                title={title} 
                routes={[
                    {title: 'Art', path: '/art'},
                    {title: 'Me', path: '/me'},
                    {title: 'Connect', path: '/connect'}
                ]}
            />
        </div>
    )
}

export default Sidebar
