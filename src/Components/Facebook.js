import React, {Component} from 'react'; 
import FacebookLogin from 'react-facebook-login';
import Home from '../Home';

export default class Facebook extends Component { 

    state = { 
        auth: false, 
        name: '', 
        picture: '', 
        accessToken: '' 
    }; 

    responseFacebook = response => { 
        console.log(response); 
        if(response.status !== 'unknown') 
        this.setState({ 
            auth: true, 
            name: response.name, 
            accessToken: response.accessToken, 
            picture: response.picture.data.url 
        }); 
         
    } 

    componentClicked = () => { 
        console.log('Facebook btn clicked'); 
    } 
 

    render(){ 
        let facebookData; 
        this.state.auth ? 
        facebookData = ( 
                <Home access_tkn={this.state.accessToken}/>
            ) :  
            facebookData = (<FacebookLogin 
                appId="845402736341872" 
                scope="user_photos,user_posts,public_profile" 
                autoLoad={true} 
                fields="name,picture" 
                onClick={this.componentClicked} 
                callback={this.responseFacebook} />
        ); 

        return ( 
            <> 
                {facebookData} 
            </> 
        ); 

    } 

} 
