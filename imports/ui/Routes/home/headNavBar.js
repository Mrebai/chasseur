import React, {Component} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
class MainNavBar  extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className=" navBarContainer  ">
                <Navbar className={"container "}  light expand="md">
                    <NavbarBrand href="/"> <img className={'logo'} src="/logo.png" alt=""/>  </NavbarBrand>
                    <NavbarToggler className='navToggler ' onClick={this.toggle} />
                    <Collapse  className='collapsedNav '  isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem  className='navLinkElement'>
                                <NavLink style={{color:'#FFFFFF'}} href="/components/">GALLERY</NavLink>
                            </NavItem>
                            <NavItem  className='navLinkElement'>
                                <NavLink style={{color:'#FFFFFF'}} href="https://github.com/reactstrap/reactstrap">OFFERS</NavLink>
                            </NavItem>
                            <NavItem  className='navLinkElement'>
                                <NavLink style={{color:'#FFFFFF'}} href="https://github.com/reactstrap/reactstrap">CALENDAR</NavLink>
                            </NavItem>
                            <NavItem  className='navLinkElement'>
                                <NavLink style={{color:'#FFFFFF'}} href="https://github.com/reactstrap/reactstrap">ABOUT</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default MainNavBar