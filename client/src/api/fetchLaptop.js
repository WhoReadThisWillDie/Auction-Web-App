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

export const createLaptop = async (name, brand, cpu, gpu, ram, ssd, imagePath) => {
    const response = await fetch(`http://localhost:3000/laptops`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${get(tokenStore)}`
        },
        body: JSON.stringify({name, brand, cpu, gpu, ram, ssd, imagePath})
    });

    const data = await response.json();
    if (response.ok) {
        return data;
    }
    throw new Error(data.error);
}

export const editLaptop = async (id, name, brand, cpu, gpu, ram, ssd) => {
    const response = await fetch(`http://localhost:3000/laptops/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${get(tokenStore)}`
        },
        body: JSON.stringify({name, brand, cpu, gpu, ram, ssd})
    });

    const data = await response.json();
    if (response.ok) {
        return data;
    }
    throw new Error(data.error);
}

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