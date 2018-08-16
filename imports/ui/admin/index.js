import React, {Component} from 'react'
import {PostList,PostCreate,PostEdit} from "./post/Posts";
import {WriterList,WriterEdit,WriterCreate} from "./post/Writers";
import {Resource, Delete, Admin} from 'react-admin';
class AdminIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Admin dataProvider={ this.props.data}>
                <Resource name="Post" list={PostList} edit={PostEdit} create={PostCreate}  />
                <Resource name="Writer" list={WriterList} edit={WriterEdit} create={WriterCreate}  />
            </Admin>


        )
    }
}

export default AdminIndex
