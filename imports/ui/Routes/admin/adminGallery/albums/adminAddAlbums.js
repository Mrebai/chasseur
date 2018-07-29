import React, {Component} from 'react'
import AddAlbumImgs from './addAlbumImgs'
import {graphql} from 'react-apollo'
import {addAlbum} from '../../../../api/mutations'


class AdminAddAlbum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images:[],
            imageInput:'',
            mainImage:'',
        }
    }

    currentImage = (e) => this.setState({imageInput:e});
    addImage = () => {
        if(this.state.imageInput.length !== 0 ){
            let imgs = this.state.images;
            imgs.unshift(this.state.imageInput);
            this.setState({images:imgs},
                (state =>{
                    console.log(this.state.images);
                    return this.setState({imageInput:''})
                })
            )
        }

    };

    setMainImg = (img) => this.setState({mainImage:img});

    deleteImage = (img) => {
        let imgs = this.state.images;
        const index = this.state.images.indexOf(img);
        if (index > -1) {
            imgs.splice(index, 1);
            this.setState({images:imgs})
        }
    };
    submitForm = (e) =>{
        e.preventDefault();
        this.props.addAlbumMutation({variables:{
                title:this.title.value,
                info: this.desc.value,
                thumbnail: (this.state.mainImage.length > 0)?this.state.mainImage: this.state.images[0],
                images:  this.state.images

            }}). then(data => console.log(data)). catch(e => console.log(e))
    };
    render() {
        return (
            <div className="container">

                <form onSubmit={this.submitForm}>
                    <div className="form-group">
                        <label htmlFor="albumTitle">Album title</label>
                        <input ref={(input) => this.title= input} type="text" className="form-control" id="albumTitle" aria-describedby="albumTitle" placeholder="Enter Title"/>

                    </div>

                    <div className="form-group">
                        <label htmlFor="albumDesc">Example textarea</label>
                        <textarea ref={(input) => this.desc= input} className="form-control" id="albumDesc" rows="2"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="albumTitle">Add Images</label>
                        <div className="row">
                            <input value={this.state.imageInput} onChange={(e) => this.currentImage(e.target.value)} type="text" className="form-control col-md-9" id="albumTitle"  placeholder="Paste image link here" />
                            <button type="button" className="btn col-md-3" onClick={() => this.addImage()}>Add Image</button>
                        </div>
                        {
                            (this.state.imageInput.length)?
                                <img style={{height:"50px", width:"auto"}} src={this.state.imageInput} alt="Can't desplay image"/>:
                                <div></div>
                        }
                    </div>
                    <div>
                        <AddAlbumImgs images={this.state.images} mainImage={this.state.mainImage} deleteImage={this.deleteImage} setMainImg={this.setMainImg}/>

                    </div>

                    <button type="submit" className="btn btn-primary mt-4">Submit</button>
                    <button  type="button" className="btn btn-link ml-4 mt-4">Cancel</button>

                </form>
            </div>
        )
    }
}

export default graphql(addAlbum,{name:'addAlbumMutation'})(AdminAddAlbum);