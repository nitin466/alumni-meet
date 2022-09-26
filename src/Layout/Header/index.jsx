import React, { Fragment,useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem
} from 'reactstrap';
import logo from '../../assets/logo.png'
const Headers = (args)=>{
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Fragment>
            <Navbar {...args} expand="md" dark className='navBar'>
                <NavbarBrand href="/">
                    {/* Navodaya */}
                    <img src={logo} alt='logo'/>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="ms-auto" navbar>
                    <NavItem>
                    <NavLink>Home</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink>
                        About
                    </NavLink>
                    </NavItem>
                    {/* <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Options
                    </DropdownToggle>
                    <DropdownMenu end>
                        <DropdownItem>Option 1</DropdownItem>
                        <DropdownItem>Option 2</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Reset</DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown> */}
                </Nav>
                </Collapse>
            </Navbar>
        </Fragment>
    )
}
export default Headers