import React from 'react'
import Link from 'gatsby-link'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

const Header = () => (
  <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Square Education
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">
          Link Right
        </NavItem>
        <NavItem eventKey={2} href="#">
          Link Right
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
// const Header = () => (
//   <div
//     style={{
//       background: 'rebeccapurple',
//       marginBottom: '1.45rem',
//     }}
//   >
//     <div>
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: 'white',
//             textDecoration: 'none',
//           }}
//         >
//           Square Education
//         </Link>
//         <h4
//           style={{
//             float: 'right',
//           }}
//         >
//           <Link
//             to="/about/"
//             style={{
//               color: 'white',
//               textDecoration: 'none',
//             }}
//           >
//             {' '}
//             About
//           </Link>
//           <Link
//             to="/team/"
//             style={{
//               color: 'white',
//               textDecoration: 'none',
//             }}
//           >
//             {' '}
//             Team
//           </Link>
//           <Link
//             to="/contact"
//             style={{
//               color: 'white',
//               textDecoration: 'none',
//             }}
//           >
//             {' '}
//             Contact
//           </Link>
//         </h4>
//       </h1>
//     </div>
//   </div>
// )

export default Header
