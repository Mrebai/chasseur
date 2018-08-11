import React, {Component} from 'react'
import ThemeContext from '../../context/screenContext';
import LanguageContext from '../../context/languageContext';
import Head from './head'
import MainNavBar from './headNavBar'
import HeadGallery from './gallery'
import HeadOffers from './headOffers'
import HomeWhyUs from './headWhyUs'
import HomeBrands from './homeBrands'
import HeadTeam from  './headTeam'
import HomeContact from './homeContact'
import Footer from './footer'
import PropTypes from 'prop-types';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            us:null,
            offers:null,
            gallery:null,
            feedback:null,
            contact:null,
            footer:null
        };
    }


    render(){
        return(
            <ThemeContext.Consumer>
                {theme => {
                    return  (
                        <LanguageContext.Consumer>
                            {
                                lng=>{
                                    return(
                                        <div>
                                            <MainNavBar lng={lng} />
                                            <Head lng={lng} />
                                            <HomeWhyUs lng={lng}  width={theme.width}/>
                                            <HeadOffers lng={lng} />
                                            <HeadGallery data={this.props.data} lng={lng} />
                                            <HomeBrands lng={lng} />
                                            <HeadTeam lng={lng} />
                                            <HomeContact lng={lng} />
                                            <Footer data={this.props.data.getAlbums} lng={lng} />
                                        </div>

                                    )
                                }
                            }
                        </LanguageContext.Consumer>
                    )
                }


                }

            </ThemeContext.Consumer>
        )
    }
}

Home.propTypes = {
    data: PropTypes.shape({
        getAlbums:PropTypes.array,
        getVideos:PropTypes.array,
        getStreaming:PropTypes.array,

    }),
    home: PropTypes.object
};

Home.defaultValue= {
    data:{
        getAlbums:[],
        getVideos:[],
        getStreaming:[],

    }
};
export default Home
