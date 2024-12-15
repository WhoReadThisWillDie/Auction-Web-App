import {tokenStore} from "../stores/tokenStore.js";
import {get} from "svelte/store";

export const fetchWins = async () => {
    const response = await fetch('http://localhost:3000/wins', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${get(tokenStore)}`
        }
    });

    const data = await response.json();
    if (response.ok) {
        return data;
    }
    throw new Error(data.error);
}