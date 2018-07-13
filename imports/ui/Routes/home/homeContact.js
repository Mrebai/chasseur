import React, {Component} from 'react'

class HomeContact extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="homeContactContainer">
                <h3 className=" SectionTitle offersTitle">CONTACT US</h3>
                <div className={'titleUnderlined mb-4'}></div>
                <div className="container">
                    <form action="">
                        <div className="row">
                            <div className="col-md-4 homeContactInfo">
                                <input ref={(input) => this.name = input} className="form-control form-control my-4" type="text" placeholder="Name" required/>
                                <input ref={(input) => this.number = input} className="form-control form-control my-4" type="number" placeholder="Phone Number" required/>
                                <input ref={(input) => this.email = input} className="form-control form-control my-4" type="email" placeholder="e-mail" required/>
                            </div>

                            <div className="col-md-8 homeMessageContent">
                                <input ref={(input) => this.subject = input} className="form-control form-control my-4" type="text" placeholder="subject" required/>
                                <textarea ref={(input) => this.message = input} className="form-control" id="exampleFormControlTextarea1 my-4" rows="4"  placeholder="your message ..." required/>
                            </div>
                        </div>

                        <button className="btn ReserveNowBtn mb-4" type='submit'>SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default HomeContact