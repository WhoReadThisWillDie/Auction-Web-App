import auctions from "../data/auctions.js"
import bids from "../data/bids.js"
import users from "../data/users.js";

function calculateCurrentPrice(auction) {
    const auctionBids = bids.filter(bid => bid.auctionId === auction.id)
    return auctionBids.length > 0
        ? Math.max(...auctionBids.map(bid => bid.price)) : auction.initialPrice
}

export function getAllAuctions(req, res) {
    for (const auction of auctions) {
        auction.currentPrice = calculateCurrentPrice(auction)
    }

    res.json(auctions)
}

export function getAuctionById(req, res) {
    const auctionId = parseInt(req.params.id)
    const auction = auctions.find(auction => auction.id === auctionId)

    if (!auction) {
        res.status(404).json({message: `Auction with id ${auctionId} not found`})
    }

    auction.currentPrice = calculateCurrentPrice(auction)
    return res.json(auction)
}

export function getAuctionBids(req, res) {
    const auctionId = parseInt(req.params.id)
    const auction = auctions.find(auction => auction.id === auctionId)

    if (!auction) {
        return res.status(404).json({error: "Auction with this id does not exist"})
    }

    const auctionBids = bids.filter(bid => bid.auctionId === auctionId)
    return res.json(auctionBids)
}

export function createAuction(req, res) {
    const newAuction = {id: auctions.length + 1, ...req.body}

    if (!newAuction.laptopId || !newAuction.initialPrice || !newAuction.endTime) {
        return res.status(400).json({error: "Missing required fields"})
    }

    auctions.push(newAuction)
    res.status(201).send({message: "Auction created successfully"})
}

export function createBidForAuction(req, res) {
    const newBid = {
        id: bids.length + 1,
        auctionId: parseInt(req.params.id), ...req.body,
        date: new Date().toISOString()
    }
    const auctionId = auctions.findIndex(auction => auction.id === parseInt(req.params.id))

    if (isNaN(auctionId)) {
        return res.status(400).json({error: "Invalid auction ID"});
    }
    if (req.body.auctionId) {
        return res.status(400).json({error: "Auction id should not be specified manually"})
    }
    if (auctionId === -1) {
        return res.status(404).json({error: "Auction with this id does not exist"})
    }
    if (!newBid.initialPrice || !newBid.userId) {
        return res.status(400).json({error: "Missing required fields"})
    }
    if (!users.find(user => user.id === newBid.userId)) {
        return res.status(400).json({message: "User with this id does not exist"})
    }
    if (new Date(newBid.dateTime) < new Date()) {
        return res.status(400).json({message: "Invalid date"})
    }

    bids.push(newBid)
    res.status(201).send({message: "Bid created successfully"})
}

export function editAuction(req, res) {
    const auctionId = parseInt(req.params.id);
    if (isNaN(auctionId)) {
        return res.status(400).json({error: "Invalid auction ID"});
    }

    const auctionIndex = auctions.findIndex(auction => auction.id === auctionId);
    if (auctionIndex === -1) {
        return res.status(404).json({error: "Auction with this ID does not exist"});
    }

    const updatedAuction = {id: auctionId, ...auctions[auctionIndex], ...req.body};
    if (!updatedAuction.laptopId || !updatedAuction.initialPrice || !updatedAuction.endTime) {
        return res.status(400).json({error: "Missing required fields"});
    }
    if (new Date(updatedAuction.dateTime) < new Date()) {
        return res.status(400).json({error: "Invalid date"})
    }

    auctions[auctionIndex] = updatedAuction;
    res.status(200).json({message: "Auction updated successfully"});
}

export function deleteAuction(req, res) {
    const auctionId = parseInt(req.params.id)
    const auctionIndex = auctions.findIndex(auction => auction.id === auctionId)
    if (auctionIndex === -1) {
        return res.status(404).json({error: "Auction with this id does not exist"})
    }

    auctions.splice(auctionIndex, 1)
    bids.splice(0, bids.length, ...bids.filter(bid => bid.auctionId !== auctionId));
    res.status(200).send({message: "Auction deleted successfully"})
}