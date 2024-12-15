import {tokenStore} from "../stores/tokenStore.js";
import {get} from "svelte/store";

export const fetchAuction = async (auctionId) => {
    const response = await fetch(`http://localhost:3000/auctions/${auctionId}`)
    try {
        return await response.json()
    }
    catch (error) {
        throw new Error(error);
    }
}

export const fetchAuctionBids = async (auctionId) => {
    const response = await fetch(`http://localhost:3000/auctions/${auctionId}/bids`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${get(tokenStore)}`
        }
    });

    console.log(localStorage.getItem('token'))

    const data = await response.json();

    if (response.ok) {
        return data;
    }
    throw new Error(data.message);
}