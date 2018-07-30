import React, {Component} from 'react'
import {graphql} from 'react-apollo'
import {editVideo} from '../../../../api/mutations'

class AdminEditVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:{},
            videoInput:'',
        }
    }

    currentVideo = (e) => this.setState({videoInput:e});


    componentDidMount(){
        this.setState({data : this.props.data.filter(item => item._id === this.props.match.params.id)},() => {
            (this.state.data.length === 1)?
                this.setState({videoInput: this.state.data[0].video}):null
        })
    };
    submitForm = (e) =>{
        e.preventDefault();
        this.props.editVideoMutation({variables:{
                id:this.state.data[0]._id,
                title:this.title.value,
                info: this.desc.value,

                video:  this.state.videoInput

            }}). then(data => console.log(data)). catch(e => console.log(e))
    };
    render() {
        return (
            <div className="container">
                {
                    (this.state.data.length > 0) ?
                        <form onSubmit={this.submitForm}>
                            <div className="form-group">
                                <label htmlFor="albumTitle">Video title</label>
                                <input ref={(input) => this.title = input} defaultValue={this.state.data[0].title}
                                       type="text" className="form-control" id="videoTitle"
                                       aria-describedby="videoTitle" placeholder="Enter Title"/>

                            </div>

                            <div className="form-group">
                                <label htmlFor="albumDesc">Description</label>
                                <textarea ref={(input) => this.desc = input} className="form-control" id="albumDesc"
                                          defaultValue={this.state.data[0].info} rows="2"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="albumTitle">Video link ID</label>
                                <div className="row">
                                    <input value={this.state.videoInput}
                                           onChange={(e) => this.currentVideo(e.target.value)} type="text"
                                           className="form-control col-md-9" id="albumTitle"
                                           placeholder="Paste image link here"/>

                                </div>
                                {
                                    (this.state.videoInput.length) ?
                                        <div className="embed-responsive embed-responsive-21by9">
                                            <iframe className="embed-responsive-item"
                                                    src={"https://www.youtube.com/embed/" + this.state.videoInput}></iframe>
                                        </div> :
                                        <div></div>
                                }
                            </div>

                            <button type="submit" className="btn btn-primary mt-4">Submit</button>
                            <button type="button" className="btn btn-link ml-4 mt-4">Cancel</button>

                        </form>:
                        <p>Video not found</p>
                }
            </div>
        )
    }
}

export default graphql(editVideo,{name:'editVideoMutation',options:{refetchQueries:['galleryQuery']}}) (AdminEditVideo)