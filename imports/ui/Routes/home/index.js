import React from 'react'
import {ThemeContext} from '../../context';
import Head from './head'
import MainNavBar from './headNavBar'
import HeadGallery from './gallery'
import HeadOffers from './headOffers'
import HomeWhyUs from './headWhyUs'
import HomeBrands from './homeBrands'
import HeadTeam from  './headTeam'
import HomeContact from './homeContact'
import Footer from './footer'
export default Home = (props) => {

    return(
        <ThemeContext.Consumer>
            {theme => {
                console.log(theme);
              return  (
                  <div>
                      <MainNavBar/>
                      <Head/>
                      <HomeWhyUs width={theme.width}/>
                      <HeadOffers/>
                      <HeadGallery/>
                      <HomeBrands/>
                      <HeadTeam/>
                      <HomeContact/>
                      <Footer/>
                  </div>
                    )
                }


            }

        </ThemeContext.Consumer>
    )
}