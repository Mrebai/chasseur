import React, {Component} from 'react'

import {graphql} from 'react-apollo'
import {editStreaming} from '../../../../api/mutations'


class AdminEditStream extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            videoInput:'',
        }
    }

    currentVideo = (e) => this.setState({videoInput:e});

    componentDidMount(){
        this.setState({data : this.props.data.filter(item => item._id === this.props.match.params.id)},() => {
            (this.state.data.length === 1)?
                this.setState({videoInput: this.state.data[0].link}):null
        })
    };

    submitForm = (e) =>{
        e.preventDefault();
        this.props.editStreamMutation({variables:{
                id:this.props.match.params.id,
                title:this.title.value,
                info: this.desc.value,
                link:this.state.videoInput
            }}). then(data => console.log(data)). catch(e => console.log(e))
    };

    render() {
        return (

            <div className="container">
                {

                    (this.state.data.length > 0) ?

                        <form onSubmit={this.submitForm}>
                            <div className="form-group">
                                <label htmlFor="albumTitle">Stream title</label>
                                <input defaultValue={ this.state.data[0].title} ref={(input) => this.title= input} type="text" className="form-control" id="streamTitle" aria-describedby="strreamTitle" placeholder="Enter Title"/>

                            </div>

                            <div className="form-group">
                                <label htmlFor="albumDesc">Description</label>
                                <textarea defaultValue={ this.state.data[0].info} ref={(input) => this.desc= input} className="form-control" id="albumDesc" rows="2"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="albumTitle">Stream link ID</label>
                                <div className="row">
                                    <input defaultValue={this.props.data.link} value={this.state.videoInput} onChange={(e) => this.currentVideo(e.target.value)} type="text" className="form-control col-md-9" id="albumTitle"  placeholder="Paste image link here" />
                                </div>
                                {
                                    (this.state.videoInput.length !== 0)?
                                        <div className="embed-responsive embed-responsive-21by9">
                                            <iframe  className="embed-responsive-item" src={"https://www.youtube.com/embed/"+ this.state.videoInput}></iframe>
                                        </div>:
                                        <div></div>
                                }
                            </div>

                            <button type="submit" className="btn btn-primary mt-4">Submit</button>
                            <button  type="button" className="btn btn-link ml-4 mt-4">Cancel</button>

                        </form>:
                        <p> can't find your streaming</p>
                }

            </div>
        )
    }
}

export default graphql(editStreaming,{name:'editStreamMutation'})(AdminEditStream);