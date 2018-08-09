import React,{Component} from "react";
import Routes from './Routes'
import ThemeContext from './context/screenContext';
import LanguageContext from './context/languageContext';
import {english,french} from './languages'
import './css/styleSheet.css'
import './css/admin.css'
import './css/resp.css'


import { Query } from "react-apollo";
import {userQuery} from './api/queries'


class App extends Component {

    constructor(props) {
        super(props);
        this.changeLng = (lng) => this.setState({language:lng});
        this.state = {changeLng:this.changeLng, width: 0, height: 0,language:'fr' ,};
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


    user = ( ) => (
        <Query query={userQuery}>
            {({ loading, error, data }) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;

                return (
                    <ThemeContext.Provider value={{width:this.state.width,user:data.user}}>
                        <LanguageContext.Provider value={(this.state.language === 'fr')?{...this.state,...french}:{...english,...this.state}}>
                        <Routes user={data.user} />
                            {
                                console.log(data.user)
                            }
                        </LanguageContext.Provider>
                    </ThemeContext.Provider>
                );
            }}
        </Query>
    );
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
