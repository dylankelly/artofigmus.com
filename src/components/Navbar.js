import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/igmus-logo.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: ''
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active'
            })
          : this.setState({
              navBarActiveClass: ''
            })
      }
    )
  }

  render() {
    return (
      <aside className="menu sidebar-menu">
        <nav
          role="navigation"
          aria-label="main-navigation"
        >
          <img src={logo} className="logo-primary" alt="Igmus" style={{ width: '88px' }} />
          <ul className="menu-list">
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </nav>
      </aside>
    )
  }
}

export default Navbar
