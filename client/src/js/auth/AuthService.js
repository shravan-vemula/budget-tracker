import { EventEmitter } from 'events'
import { isTokenExpired } from './jwtHelper'
import auth0 from 'auth0-js'


export default class AuthService extends EventEmitter {
  constructor(clientId, domain) {
    super()
    // Configure Auth0
    this.auth0 = new auth0.WebAuth({
      clientID: clientId,
      domain: domain,
      responseType: 'token id_token',
      redirectUri: `${window.location.origin}`
    })

    this.signup = this.signup.bind(this)

  }

  signup(email, password){
    this.auth0.signup({
      connection: "Username-Password-Authentication",
      email:email,
      password:password,
    }, function(err) {
      if (err) {
        alert('Email already exists');
    
      }else{
        window.location = window.location.origin+"/login" 
      }
    })
  }

loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken()
    return !!token && !isTokenExpired(token)
  }
setToken(accessToken) {
    // Saves user access token and ID token into local storage
    localStorage.setItem('access_token', accessToken)
  }

getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('access_token')
  }
logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('budgetId');
    localStorage.removeItem('access_token')
    window.location = window.location.origin+"/login" ;
  }
}