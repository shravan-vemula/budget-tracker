import AuthService from './AuthService';
import {api} from 'js/utils/resources';

const auth = new AuthService(api.CLIENT_ID, api.DOMAIN);

export default auth;