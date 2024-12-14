import { writable } from 'svelte/store';
import {decodeToken} from "../jwt/decodeToken.js";

const tokenFromStorage = localStorage.getItem('token')
const decodedToken = tokenFromStorage ? decodeToken(tokenFromStorage) : null

export const tokenStore = writable(decodedToken)
