import React, {Component} from 'react'
import {Button,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {graphql,compose} from 'react-apollo'
import {deleteStreaming,toggleLive} from '../../api/mutations'
import {withRouter} from 'react-router-dom'
import Switch from "react-switch";

class AdminStreamingCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: '',
            modal: false,
            checked: this.props.data.live
        };
        this.toggle = this.toggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        this.setState({ checked: this.props.data.live})
    }
    handleChange(checked) {
        this.setState({ checked });
        this.props.toggleStrMutation({variables:{
            id:this.props.data._id,
            live: checked
            }})

    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    deleteMutation = () => {
        this.props.deleteStrMutation({
            variables:{
                id:  this.props.data._id
            }
        }).then(data => console.log(data)).catch(err => console.log(err))
    };
    getDate = () => {
        const date = new Date(this.props.data.date);
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        let dt = date.getDate();

        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }

        return(year+'-' + month + '-'+dt);
    };
    render() {
        return (
            <div className={"vidCardContainer " }>

                <div  className={"card " + this.props.cardClass + ' ' + this.state.size} >

                    <div className="embed-responsive embed-responsive-21by9">
                            <iframe  className="embed-responsive-item" src={"https://www.youtube.com/embed/"+ this.props.data.link}/>

                    </div>
                    <div className="card-body videoCardBody">
                        <div className='row'>
                            <div className="col-7">
                                <h6 className="card-title">{this.props.data.title}</h6>
                                <p>{this.getDate() }</p>
                            </div>
                            <div className="col-2">
                                <Switch
                                    onChange={this.handleChange}
                                    checked={this.state.checked}
                                    id="normal-switch"
                                    className={'mt-1'}
                                />                            </div>

                            <div className="col-1">
                                <button className="btn btn-link" onClick={() => this.props.history.push("/admin/editstream/" + this.props.data._id )}><i className="fas fa-edit"></i></button>
                            </div>
                            <div className="col-1">
                                <button className="btn btn-link" onClick={this.toggle}><i className="fas fa-times"></i></button>
                            </div>
                        </div>

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


export default compose(
    graphql (deleteStreaming,{name:'deleteStrMutation',options:{refetchQueries:['galleryQuery']}}),
    graphql (toggleLive,{name:'toggleStrMutation'})
)(withRouter(AdminStreamingCard))



