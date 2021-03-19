import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '195902505916-pr5fq3vktpnp1hkt1pkmo91sq08lvme5.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
            });
        });
    }
    
    render() {
        return(
            <div>Google Auth</div>
        );
    }
}

export default GoogleAuth;