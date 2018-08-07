import React, {Component,Fragment} from 'react'
import AdminMessageCard from '../../../components/adminCards/messageCard'
import {getMessage} from '../../../api/queries'
import { Query } from "react-apollo";
class showMessages extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
     msg = ( ) =>
        <Query query={getMessage}>
            {({ loading, error, data }) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;

                return (
                    <div className={'container'}>
                        <div className="row">
                            <div className="offset-md-1 col-md-10">
                                {
                                    data.getMessage.map( item =>
                                        <div key={item._id}>
                                            <AdminMessageCard  data={item} />
                                        </div>
                                        )
                                }
                            </div>
                        </div>
                    </div>
                );
            }}
        </Query>
    ;

    render() {

        return (
            <div className="">
                {
                    this.msg()
                }
            </div>
        )
    }
}

export default showMessages