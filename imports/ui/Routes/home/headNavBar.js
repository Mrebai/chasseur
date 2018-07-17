import React, {Component} from 'react'
import {english,french} from '../../languages'
import LanguageContext from '../../context/languageContext'

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
            isOpen: false,
            language:'fr',
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    setLanguage = (lng) => this.setState({language:lng});
    render() {
        return (
            <LanguageContext.Consumer >
                {
                    ({changeLng}) =>(
                        <div className=" navBarContainer  ">
                            <Navbar className={"container "}  light expand="md">
                                <NavbarBrand href="/"> <img className={'logo'} src="/logo.png" alt=""/>  </NavbarBrand>
                                <NavbarToggler className='navToggler ' onClick={this.toggle} />
                                <Collapse  className='collapsedNav '  isOpen={this.state.isOpen} navbar>
                                    <Nav className="ml-auto" navbar>
                                        <NavItem  className='navLinkElement'>
                                            <NavLink style={{color:'#FFFFFF'}} href="/components/">{this.props.lng.offers.toUpperCase()}</NavLink>
                                        </NavItem>
                                        <NavItem  className='navLinkElement'>
                                            <NavLink style={{color:'#FFFFFF'}} href="https://github.com/reactstrap/reactstrap">{this.props.lng.reserve.toUpperCase()}</NavLink>
                                        </NavItem>
                                        <NavItem  className='navLinkElement'>
                                            <NavLink style={{color:'#FFFFFF'}} href="https://github.com/reactstrap/reactstrap">{this.props.lng.gallery.toUpperCase()}</NavLink>
                                        </NavItem>
                                        <NavItem  className='navLinkElement'>
                                            <NavLink style={{color:'#FFFFFF'}} href="https://github.com/reactstrap/reactstrap">{this.props.lng.contact.toUpperCase()}</NavLink>
                                        </NavItem>
                                        <NavItem  className='navLinkElement'>
                                            <NavLink style={{color:'#FFFFFF'}} href="https://github.com/reactstrap/reactstrap">{this.props.lng.about.toUpperCase()}</NavLink>
                                        </NavItem>
                                        <UncontrolledDropdown className='navLinkElement' nav inNavbar>
                                            <DropdownToggle style={{color:'#FFFFFF'}}   nav caret>
                                                {this.props.lng.language.toUpperCase()}
                                            </DropdownToggle>
                                            <DropdownMenu right>
                                                <DropdownItem  onClick={ () => changeLng('fr')}>
                                                    Francais
                                                </DropdownItem>
                                                <DropdownItem onClick={() => changeLng('en')}>
                                                    English
                                                </DropdownItem>

                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </Nav>
                                </Collapse>
                            </Navbar>
                        </div>
                    )
                }

            </LanguageContext.Consumer>

        )
    }
}

export default MainNavBar