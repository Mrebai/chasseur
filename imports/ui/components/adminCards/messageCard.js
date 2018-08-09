import React, {Component} from 'react'
import { Collapse, Button, CardBody, Card , Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {graphql} from 'react-apollo'
import {deleteMsg} from '../../api/mutations'
import {ago} from 'time-ago'
class AdminMessageCard extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false,
            modal: false
        };
        this.modal = this.modal.bind(this);
    }
    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    modal(e) {
        this.setState({
            modal: !this.state.modal
        });
    }
    delete = () =>
        this.props.deleteMsgMut({variables:{
                id: this.props.data._id
            }}).then(res => console.log(res)).catch(e => console.log(e));
    render() {
        return (
            <div>
                <div onClick={this.toggle}  className="d-flex justify-content-between px-1 messageHead">
                    <div className=' ml-2'>      <p>{this.props.data.name}</p></div>
                    <div className=''>      <p>{this.props.data.subject}</p></div>
                    <div className=' mr-2' >{ago(this.props.data.date) + "   "} <span  onClick={this.modal} className={'ml-1'}><i className="far fa-trash-alt"></i> </span> </div>

                </div>
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <CardBody>
                            <div className="row msgBodyElem">
                                <div className="col-4 col-sm-2"> Name:</div>
                                <div className="col-8 col-sm-10"> {this.props.data.name}</div>
                            </div>
                            <div className="row msgBodyElem">
                                <div className="col-4 col-sm-2"> Phone:</div>
                                <div className="col-8 col-sm-10"> {this.props.data.phone}</div>
                            </div>
                            <div className="row msgBodyElem">
                                <div className="col-4 col-sm-2"> Email:</div>
                                <div className="col-8 col-sm-10"> {this.props.data.email}</div>
                            </div>
                            <div className="row msgBodyElem">
                                <div className="col-4 col-sm-2"> Offer:</div>
                                <div className="col-8 col-sm-10"> {this.props.data.offer}</div>
                            </div>
                            <div className="row msgBodyElem">
                                <div className="col-4 col-sm-2"> Date:</div>
                                <div className="col-8 col-sm-10"> {this.props.data.resDate}</div>
                            </div>
                            <div className="row msgBodyElem">
                                <div className="col-4 col-sm-2"> Subject:</div>
                                <div className="col-8 col-sm-10"> {this.props.data.subject}</div>
                            </div>
                            <div className="row msgBodyElem">
                                <div className="col-4 col-sm-2"> Message:</div>
                                <div className="col-8 col-sm-10"> {this.props.data.message}</div>
                            </div>
                        </CardBody>
                    </Card>
                </Collapse>

                <Modal isOpen={this.state.modal} toggle={this.modal} className={this.props.className}>
                    <ModalHeader toggle={this.modal}>Delete message?</ModalHeader>
                    <ModalFooter>
                        <Button color="danger" onClick={() => {this.modal();
                        this.delete()
                        }}>Delete</Button>{' '}
                        <Button color="secondary" onClick={this.modal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default graphql(deleteMsg,{name:'deleteMsgMut',options:{refetchQueries:['getMessage']}}) (AdminMessageCard)