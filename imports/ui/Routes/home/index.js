import React from 'react'
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
export default Home = (props) => {

    return(
        <ThemeContext.Consumer>
            {theme => {
                console.log(theme);
              return  (
                  <LanguageContext.Consumer>
                      {
                          lng=>{
                              console.log(lng);
                              return(

                                  <div>
                                      <MainNavBar lng={lng} />
                                      <Head lng={lng} />
                                      <HomeWhyUs lng={lng}  width={theme.width}/>
                                      <HeadOffers lng={lng} />
                                      <HeadGallery lng={lng} />
                                      <HomeBrands lng={lng} />
                                      <HeadTeam lng={lng} />
                                      <HomeContact lng={lng} />
                                      <Footer lng={lng} />
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