import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import {Link} from 'react-router-dom'
export default class AdminNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeBtn:''
        };
        this.changeBtn=  this.changeBtn.bind(this)
    }

    changeBtn = (btn) => {
        this.setState({activeBtn:btn});
        this.props.currentTab(btn);
    };
    render() {
        return (
            <div className='container'>

                <Nav  className='adminNavContainer'>
                    <NavItem>
                        <Link to={'/'} className="btn btn-lg btn-link adminNavItem btn-block " >Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link  to={'/admin'} onClick={() => this.changeBtn('inbox')} style={(this.state.activeBtn === 'inbox')? {color:"#FFF",backgroundColor:"rgba(254,69,101,1)"}:{}} className="btn btn-lg btn-link adminNavItem btn-block" >Inbox</Link>
                    </NavItem>
                    <NavItem>
                        <Link  to={'/admin'} onClick={() => this.changeBtn('albums')} style={(this.state.activeBtn === 'albums')? {color:"#FFF",backgroundColor:"rgba(254,69,101,1)"}:{}}  className="btn btn-lg btn-link adminNavItem btn-block" >Albums</Link>
                    </NavItem>
                    <NavItem>
                        <Link  to={'/admin'} onClick={() => this.changeBtn('videos')} style={(this.state.activeBtn === 'videos')? {color:"#FFF",backgroundColor:"rgba(254,69,101,1)"}:{}}  className="btn btn-lg btn-link adminNavItem btn-block" >Videos</Link>
                    </NavItem>
                    <NavItem>
                        <Link  to={'/admin'} onClick={() => this.changeBtn('streaming')} style={(this.state.activeBtn === 'streaming')? {color:"#FFF",backgroundColor:"rgba(254,69,101,1)"}:{}}  className="btn btn-lg btn-link adminNavItem btn-block" >Streaming</Link>
                    </NavItem>
                </Nav>

            </div>
        );
    }
}