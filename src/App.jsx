import React from 'react'
import AdminLayout from "../src/layouts/Admin";
import UserLayout from '../src/layouts/User';
import AuthLayout from "../src/layouts/Auth";
import { Redirect, Route, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
const App = () => {
    const history = useHistory();

    React.useEffect(()=>{
        // console.log('app')
        // if(useSelector(selectUser)){
        //     history.push('/admin/index');
        // }
    },[])
    return (
        <div>
            <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
            <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
            <Route path="/user" render={(props) => <UserLayout {...props} />} />
            <Redirect from="/" to="/auth" />
        </div>
    )
}

export default App