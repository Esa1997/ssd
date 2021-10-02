import React, {Component} from 'react'; 
import FacebookLogin from 'react-facebook-login';
import Home from '../Home';

export default class Facebook extends Component { 

    state = { 
        auth: false, 
        name: '', 
        picture: '', 
        accessToken: '',
        id: ''
    }; 

    responseFacebook = response => { 
        console.log(response); 
        if(response.status !== 'unknown') 
        this.setState({ 
            auth: true, 
            name: response.name, 
            accessToken: response.accessToken, 
            id: response.id,
            picture: response.picture.data.url 
        }); 
         
    } 

    componentClicked = () => { 
        console.log('Facebook btn clicked'); 
    } 
 

    render(){ 
        let facebookData;
        console.log(this.state.picture);         
        this.state.auth ? 
        facebookData = ( 
                <Home access_tkn={this.state.accessToken} id={this.state.id} picture={this.state.picture}/>
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
