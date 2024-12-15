import {tokenStore} from "../stores/tokenStore.js";
import {get} from "svelte/store";

export const fetchLaptop = async (laptopId) => {
    const response = await fetch(`http://localhost:3000/laptops/${laptopId}`)
    try {
        return await response.json()
    } catch (error) {
        throw new Error(error);
    }
}

export const createLaptop = async (laptopId, initialPrice, endTime) => {}

export const editLaptop = async (laptopId, initialPrice, endTime) => {}

export const deleteLaptop = async (laptopId) => {
    const response = await fetch(`http://localhost:3000/laptops/${laptopId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${get(tokenStore)}`
        }
    })

    const data = await response.json();
    if (response.ok) {
        return data;
    }
    throw new Error(data.error);
}