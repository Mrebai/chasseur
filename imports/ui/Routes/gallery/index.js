import React, {Component} from 'react'
import {Route,Switch} from "react-router-dom"
import GalVideos from './galVideo'
import GalAlbums from './galAlbums'
import GalStreaming from './galStreaming'
import GalImg from './galimg'
import PropTypes from 'prop-types';
import MainNavBar from '../home/headNavBar'
import NotFound from '../notFound404'
import LanguageContext from '../../context/languageContext';
class GalleryIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <LanguageContext.Consumer>
                {
                    lng=>{
                        return(
                            <div>
                                <MainNavBar display={'hideClass'} lng={lng} />

                                <div >
                                    <div className={'container galleryBigCont'} >
                                        <Switch>
                                            <Route exact path={this.props.match.path + '/Albums'} render={(match) =>  <GalAlbums match={match.match}  data={this.props.data.getAlbums}/>}  />
                                            <Route exact path={this.props.match.path + '/Albums/:id'} render={(match) =>  <GalImg match={match.match}  data={this.props.data.getAlbums}/>}  />
                                            <Route exact path={this.props.match.path + '/Streaming'} render={(match) =>  <GalStreaming match={match.match}  data={this.props.data.getStreaming}/>}  />
                                            <Route exact path={this.props.match.path + '/Videos'} render={(match) =>  <GalVideos match={match.match}  data={this.props.data.getVideos}/>}  />
                                            <Route component={NotFound} />
                                        </Switch>

                                    </div>
                                </div>

                            </div>

                        )
                    }
                }
            </LanguageContext.Consumer>
        )
    }
}
GalleryIndex.propTypes = {
    data: PropTypes.shape({
        getAlbums:PropTypes.array,
        getVideos:PropTypes.array,
        getStreaming:PropTypes.array,
    }),
    home: PropTypes.object.isRequired
};

GalleryIndex.defaultValue= {
    data:{
        getAlbums:[],
        getVideos:[],
        getStreaming:[],
    }
};
export default GalleryIndex