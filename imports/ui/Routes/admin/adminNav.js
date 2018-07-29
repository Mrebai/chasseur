import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

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
                        <button  className="btn btn-lg btn-link adminNavItem btn-block " >Home</button>
                    </NavItem>
                    <NavItem>
                        <button onClick={() => this.changeBtn('inbox')} style={(this.state.activeBtn === 'inbox')? {color:"#FFF",backgroundColor:"rgba(254,69,101,1)"}:{}} className="btn btn-lg btn-link adminNavItem btn-block" >Inbox</button>
                    </NavItem>
                    <NavItem>
                        <button onClick={() => this.changeBtn('albums')} style={(this.state.activeBtn === 'albums')? {color:"#FFF",backgroundColor:"rgba(254,69,101,1)"}:{}}  className="btn btn-lg btn-link adminNavItem btn-block" >Albums</button>
                    </NavItem>
                    <NavItem>
                        <button onClick={() => this.changeBtn('videos')} style={(this.state.activeBtn === 'videos')? {color:"#FFF",backgroundColor:"rgba(254,69,101,1)"}:{}}  className="btn btn-lg btn-link adminNavItem btn-block" >Videos</button>
                    </NavItem>
                    <NavItem>
                        <button onClick={() => this.changeBtn('streaming')} style={(this.state.activeBtn === 'streaming')? {color:"#FFF",backgroundColor:"rgba(254,69,101,1)"}:{}}  className="btn btn-lg btn-link adminNavItem btn-block" >Streaming</button>
                    </NavItem>
                </Nav>

            </div>
        );
    }
}