import React, {Component} from 'react'; 
import FacebookLogin from 'react-facebook-login';
import Home from '../Home';

export default class Facebook extends Component { 
    //the variables are initialized
    state = { 
        auth: false, 
        name: '', 
        picture: '', 
        accessToken: '',
        id: ''
    }; 

    //check the response status, is it is successful auth is set to true. 
    //the returned data from the facebook response is set to the variables.
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
 
    //check auth is true or false, if false send the Facebook Login request, if true pass the
    // set the parameters and pass the paamaters/
    render(){ 
        let facebookData;
        console.log(this.state.picture);         
        this.state.auth ? 
        facebookData = ( 
                //access token and the user id is passed to the  Home component through props
                <Home access_tkn={this.state.accessToken} id={this.state.id} picture={this.state.picture}/>
            ) :  
            facebookData = (<FacebookLogin // Request is sent throigh the FacebookLogin component to the to get the autherization access token
                appId="845402736341872" 
                scope="user_photos,user_posts,email,pages_show_list,pages_read_engagement,public_profile,pages_manage_posts" 
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
