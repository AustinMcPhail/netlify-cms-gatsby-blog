import React from 'react'
import { Link } from "gatsby"
import NavItem from './NavItem'

function Nav({title, routes}) {
    return (
        <nav>
            <h2><Link
              style={{
                boxShadow: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >{title}</Link></h2>
            <ul style={{
              listStyle:`none`
            }}>
              {routes.map(r => 
              <NavItem key={r.path} title={r.title} path={r.path}/>
            )}
            </ul>
          </nav>
    )
}

export default Nav
