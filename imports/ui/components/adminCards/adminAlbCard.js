import React, {Component} from 'react'
import {Button,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {graphql} from 'react-apollo'
import {deleteAlbum} from '../../api/mutations'
import {Link,withRouter} from 'react-router-dom'
class AdminAlbCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    deleteMutation = () => {
        this.props.deleteAlbMutation({
            variables:{
                id:  this.props.data._id
            }
        }).then(data => console.log(data)).catch(err => console.log(err))
    };
    render() {
        return (
            <div className="adminCardContainer mt-2">
                <div className="row">
                    <div className="col-md-2 " style={{backgroundImage:"url(" + this.props.data.thumbnail + ")", backgroundSize:'cover', backgroundPosition:'center' ,backgroundRepeat:"no-repeat"}}>

                    </div>
                    <div className="col-md-8 adminCardFrame" >
                        <p className="adminCardTitle">{this.props.data.title}</p>
                    </div>
                    <div className="col-md-2 adminCardFrame">
                        <button className="btn btn-link" onClick={() => this.props.history.push("/admin/editimage/" + this.props.data._id )}> <i className="fas fa-edit"></i> </button>
                        <button className="btn btn-link" onClick={this.toggle}>  <i className="fas fa-times"></i></button>
                    </div>
                </div>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{this.props.data.title}</ModalHeader>
                    <ModalBody>
                        {'Are you sure you want to delete ' + this.props.data.title + " ?"}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={() =>{
                            this.toggle();
                            this.deleteMutation();
                        }}>Delete</Button>{' '}
                        <Button color="link" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default withRouter(graphql(deleteAlbum,{name:'deleteAlbMutation',options:{refetchQueries:['galleryQuery']}})(AdminAlbCard))