<<<<<<< HEAD
import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {

    
    state = {
        auth: false,
        name: '',
        
    };

    responseFacebook = response => {
        console.log(response);
        if(response.status !== 'unknown')
        this.setState({
            auth: true,
            name: response.name,
        });
        
    }

    componentClicked = () => {
        console.log('Facebook btn clicked');
    }

    render(){
        let facebookData;

        this.state.auth ?
        facebookData = (
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px',
                    color: '#000'
                }}>
                    
                    <h2>Welcome {this.state.name}!</h2>
                    
                </div>
            ) : 
            facebookData = (<FacebookLogin
                appId="589497852187892"
                autoLoad={true}
                fields="name,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />);

        return (
            <>
                {facebookData}
            </>
        );
    }
}
=======
import React, {Component} from 'react'; 
import FacebookLogin from 'react-facebook-login'; 

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
                <div style={{ 
                    width: '400px', 
                    margin: 'auto', 
                    background: '#f4f4f4', 
                    padding: '20px', 
                    color: '#000' 
                }}> 

                    <img src={this.state.picture} alt={this.state.name} /> 
                    <h2>Welcome {this.state.name}!</h2> 
                </div> 

            ) :  

            facebookData = (<FacebookLogin 
                appId="589497852187892" 
                scope="user_photos,user_posts" 
                autoLoad={true} 
                fields="name,picture" 
                onClick={this.componentClicked} 
                callback={this.responseFacebook} />); 

        return ( 
            <> 
                {facebookData} 
            </> 
        ); 

    } 

} 
>>>>>>> remotes/origin/Prasadi
