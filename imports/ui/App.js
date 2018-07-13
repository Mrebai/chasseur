import React,{Component} from "react";
import Routes from './Routes'
import {ThemeContext} from './context';
import "./css/video-react.css"; // import css
import './css/styleSheet.css'
import './css/resp.css'

import { Query } from "react-apollo";
import {userQuery} from './api/queries'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    user = ( ) =>


                    <ThemeContext.Provider value={{width:this.state.width,}}>

                        <Routes/>
                    </ThemeContext.Provider>;



    render(){
    return (
        <div>
            {
                this.user()
            }
        </div>

    )

  }
}
export default App
