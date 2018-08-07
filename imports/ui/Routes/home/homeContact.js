import React, {Component} from 'react'
import {graphql} from 'react-apollo'
import {sendMsg} from '../../api/mutations'

class HomeContact extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    sendMessage = (e) =>{
        e.preventDefault();
        console.log(this.date.value);
        console.log(this.offer.value);

        this.props.sendMessage({variables:{
                name: this.name.value,
                phone: this.number.value,
                email: this.email.value,
                resDate:this.date.value,
                offer:this.offer.value,
                subject: this.subject.value,
                message:this.message.value
            }}).then(data => console.log(data)).catch(e =>
        console.log(e))
};
    componentDidMount(){

    }
    render() {
        return (
            <div className="homeContactContainer">
                <h3 className=" SectionTitle offersTitle">{this.props.lng.contactUs.toUpperCase()}</h3>
                <div className={'titleUnderlined mb-4'}></div>
                <div className="container">
                    <form action="" onSubmit={this.sendMessage}>
                        <div className="row">
                            <div className="col-md-4 homeContactInfo">
                                <input ref={(input) => this.name = input} className="form-control form-control my-4" type="text" placeholder={this.props.lng.name} required/>
                                <input ref={(input) => this.number = input} className="form-control form-control my-4" type="number" placeholder={this.props.lng.phoneNumber} required/>
                                <input ref={(input) => this.email = input} className="form-control form-control my-4" type="email" placeholder={this.props.lng.eMailAddress} />
                                <input aria-placeholder={'choose your date'} ref={(input) => this.date = input} className="form-control form-control my-4" type="date" placeholder={this.props.lng.eMailAddress} />
                                <div className="form-group">
                                    <select  ref={(input) => this.offer = input} className="form-control" id="offerSelector">
                                        <option>{this.props.lng.offer1}</option>
                                        <option>{this.props.lng.offer2}</option>
                                        <option>{this.props.lng.offer3}</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-8 homeMessageContent">
                                <input ref={(input) => this.subject = input} className="form-control form-control my-4" type="text" placeholder={this.props.lng.subject} required/>
                                <textarea ref={(input) => this.message = input} className="form-control" id="exampleFormControlTextarea1 my-4" rows="6"  placeholder={this.props.lng.yourMsg} required/>
                            </div>
                        </div>

                        <button className="btn ReserveNowBtn mb-4" type='submit'>{this.props.lng.sendMsg.toUpperCase()}</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default graphql(sendMsg,{name:'sendMessage'})(HomeContact)