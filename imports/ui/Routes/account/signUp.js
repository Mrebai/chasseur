import React,{Component,Fragment} from 'react'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {message:''}

    }

    submittedForm = (e) => {
        e.preventDefault();
        {
            console.log(this.state.message)
        }
        if(this.SignUpPassword.value.length < 3 ){

            return( this.setState({message:"password too short"}))
        }
        if(this.SignUpPassword.value !==  this.SignUpPassword2.value){

            return( this.setState({message:"password doesn't match"}))
        }
        if(this.signUpUserName.value.length < 4 ){

            return( this.setState({message:"username too short"}))
        }
        Accounts.createUser({email:this.signUpEmail.value,password:this.SignUpPassword.value,username:this.signUpUserName.value},error => {
            return console.log(error.reason)
        })
    };

    render() {
        return (
            <div className='row'>
                <div className="offset-md-3 col-md-6">
                    <form onSubmit={this.submittedForm}>
                        <h6 className=" lead " id='signUp'> SIGN UP</h6>
                        <div className="form-group loginForm">
                            <label htmlFor="emailSignUp">Email Address</label>
                            <input  ref={(input) => {this.signUpEmail = input}} type="email" className="form-control input" id="emailSignUp" aria-describedby="emailHelp" placeholder="Enter a valid email"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group loginForm">
                            <label htmlFor="userNameSignUp">User Name</label>
                            <input  ref={(input) => {this.signUpUserName = input}} type="text" className="form-control input" id="userNameSignUp" aria-describedby="userNameHelp" placeholder="Enter a user name"/>
                        </div>
                        <div className="form-group loginForm">
                            <label htmlFor="SingUpPassword">Password</label>
                            <input ref={(input) => {this.SignUpPassword = input}} type="password" className="form-control input" id="SingUpPassword" placeholder="Enter a strong password "/>
                        </div>
                        <div className="form-group loginForm">
                            <label htmlFor="SingUpPasswordConf">Retype Password</label>
                            <input  ref={(input) => {this.SignUpPassword2 = input}} type="password" className="form-control input" id="SingUpPasswordConf" placeholder="Retype password"/>
                        </div>
                        <button  type="submit"  className="btn btn-lg btn-link adminNavItem btn-block">SIGN UP</button>
                    </form>

                </div>
            </div>

        )
    }
}

export default SignUp