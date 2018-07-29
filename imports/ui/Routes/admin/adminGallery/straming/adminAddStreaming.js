import React, {Component} from 'react'

import {graphql} from 'react-apollo'
import {addStreaming} from '../../../../api/mutations'


class AdminAddStream extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoInput:'',
        }
    }

    currentVideo = (e) => this.setState({videoInput:e});



    submitForm = (e) =>{
        e.preventDefault();
        this.props.addStreamMutation({variables:{
                title:this.title.value,
                info: this.desc.value,
                link:this.state.videoInput
            }}). then(data => console.log(data)). catch(e => console.log(e))
    };
    render() {
        return (
            <div className="container">

                <form onSubmit={this.submitForm}>
                    <div className="form-group">
                        <label htmlFor="albumTitle">Stream title</label>
                        <input ref={(input) => this.title= input} type="text" className="form-control" id="streamTitle" aria-describedby="strreamTitle" placeholder="Enter Title"/>

                    </div>

                    <div className="form-group">
                        <label htmlFor="albumDesc">Description</label>
                        <textarea ref={(input) => this.desc= input} className="form-control" id="albumDesc" rows="2"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="albumTitle">Stream link ID</label>
                        <div className="row">
                            <input value={this.state.videoInput} onChange={(e) => this.currentVideo(e.target.value)} type="text" className="form-control col-md-9" id="albumTitle"  placeholder="Paste image link here" />
                        </div>
                        {
                            (this.state.videoInput.length)?
                                <div className="embed-responsive embed-responsive-21by9">
                                    <iframe  className="embed-responsive-item" src={"https://www.youtube.com/embed/"+ this.state.videoInput}></iframe>
                                </div>:
                                <div></div>
                        }
                    </div>

                    <button type="submit" className="btn btn-primary mt-4">Submit</button>
                    <button  type="button" className="btn btn-link ml-4 mt-4">Cancel</button>

                </form>
            </div>
        )
    }
}

export default graphql(addStreaming,{name:'addStreamMutation'})(AdminAddStream);