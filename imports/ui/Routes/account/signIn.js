import React,{Component,Fragment} from 'react'
import GalleryIndex from "../gallery";
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom'
import {withApollo} from 'react-apollo'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    submittedForm2 = (e) => {
        e.preventDefault();
        if(this.userName.value.length < 1 ){
            return( this.setState({message:"please enter you user name"}))
        }
        if(this.password.value.length < 1 ){

            return( this.setState({message:"you must enter your password"}));
        }
        Meteor.loginWithPassword(this.userName.value,this.password.value,error => {
            if(!error){
                this.setState({message:""});
                this.props.client.resetStore();
                this.props.history.push('/admin')

            }else  return(error.reason);

        });
    };
    render() {
        return (
            <div className='row'>
                <div className="offset-md-3 col-md-6">
                    <form onSubmit={this.submittedForm2} className='loginFormContainer my-auto'>
                        <h6 className=" lead " id='signIn'> SIGN IN</h6>
                        <div className="form-group loginForm">
                            <label htmlFor="emailSignUp">User Name</label>
                            <input  ref={(input) => {this.userName = input}} type="text" className="form-control defaultInput" id="userNameSignIn" aria-describedby="userNameHelp" placeholder="Enter a user name or email"/>

                        </div>
                        <div className="form-group loginForm">
                            <label htmlFor="SingUpPassword">Password</label>
                            <input ref={(input) => {this.password = input}} type="password" className="form-control defaultInput" id="SingInPassword" placeholder="Enter a strong password " aria-describedby="PasswordHelp"/>
                            <small id="PasswordHelp" className="form-text text-muted"><a href="#"> Forgot Password?</a></small>
                        </div>
                        <button type="submit"  className="btn btn-lg btn-link adminNavItem btn-block">Login</button>
                        <small id="noAccount" className="form-text text-muted"><a href="#">I don't have an account</a></small>

                    </form>
                </div>
            </div>

        )
    }
}
Login.propTypes = {
    data: PropTypes.shape({
        getAlbums:PropTypes.array,
        getVideos:PropTypes.array,
        getStreaming:PropTypes.array,

    }),
    home: PropTypes.object
};

Login.defaultValue= {
    data:{
        getAlbums:[],
        getVideos:[],
        getStreaming:[],

    }
};
export default withRouter(withApollo(Login))