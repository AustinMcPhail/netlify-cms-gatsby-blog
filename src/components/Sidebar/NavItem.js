import React from 'react'
import { Link } from "gatsby"

function NavItem({title, path}) {
    return (
        <Link to={path}
            >
        <li style={{
            width: `100%`,
            marginBottom: `0`
        }}>
            {title}
        </li>
        </Link>
    )
}

export default NavItem
