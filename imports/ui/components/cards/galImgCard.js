import React, {Component} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class GalImgCard extends Component {
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

    render() {
        return (
            <div className='  col-md-4 imgView'>
                <div className=' imgImgView' style={{backgroundImage:"url(" + this.props.img + ")", backgroundSize:'cover', backgroundPosition:'center' ,backgroundRepeat:"no-repeat"}}>
                    <button onClick={this.toggle} className="btn btn-link"><i class="fas fa-expand-arrows-alt"></i></button>
                </div>
                <Modal size={'lg'} isOpen={this.state.modal} toggle={this.toggle} className={'imgModal'}>
                    <ModalBody>
                        <img className={'imageSourceGal'} src={this.props.img} alt="image"/>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default GalImgCard