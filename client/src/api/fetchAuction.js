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

export const editAuction = async (auctionId, initialPrice, endTime) => {
    const response = await fetch(`http://localhost:3000/auctions/${auctionId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${get(tokenStore)}`
        },
        body: JSON.stringify({initialPrice, endTime})
    });

    const data = await response.json();
    if (response.ok) {
        return data;
    }
    throw new Error(data.error);
}

export const deleteAuction = async (auctionId) => {
    const response = await fetch(`http://localhost:3000/auctions/${auctionId}`, {
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

export const fetchAuctionBids = async (auctionId) => {
    const response = await fetch(`http://localhost:3000/auctions/${auctionId}/bids`, {
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
    throw new Error(data.message);
}

export const postBid = async (auctionId, price) => {
    const response = await fetch(`http://localhost:3000/auctions/${auctionId}/bids`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${get(tokenStore)}`
        },
        body: JSON.stringify({
            'price': price
        })
    });

    const data = await response.json();

    if (response.ok) {
        return data;
    }
    throw new Error(data.error);
}