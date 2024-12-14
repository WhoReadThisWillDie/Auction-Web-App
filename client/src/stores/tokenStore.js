import { writable } from 'svelte/store';
import {decodeToken} from "../jwt/decodeToken.js";

const tokenFromStorage = localStorage.getItem('token')
const decodedToken = tokenFromStorage ? decodeToken(tokenFromStorage) : null

const tokenStore = writable(decodedToken)

export default tokenStore