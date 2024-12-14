import auctions from "../data/auctions.js"
import bids from "../data/bids.js"
import users from "../data/users.js"
import laptops from "../data/laptops.js";
import * as auctionFilters from "../filters/auctionFilters.js";

function calculateCurrentPrice(auction) {
    const auctionBids = bids.filter(bid => bid.auctionId === auction.id)
    return auctionBids.length > 0
        ? Math.max(...auctionBids.map(bid => bid.price), auction.initialPrice) : auction.initialPrice
}

function getLaptopNameById(laptopId) {
    const laptop = laptops.find(laptop => laptop.id === laptopId);
    return laptop ? laptop.name : "Unknown Laptop";
}

export function getAllAuctions(req, res) {
    let result = Array.from(auctions);

    result = result.map(auction => ({
        id: auction.id,
        currentPrice: calculateCurrentPrice(auction),
        laptopName: getLaptopNameById(auction.laptopId),
        endTime: auction.endTime
    }));

    if (req.query.lowestPrice) {
        result = auctionFilters.filterAuctionsByLowestPrice(req.query.lowestPrice, result);
    }
    if (req.query.highestPrice) {
        result = auctionFilters.filterAuctionsByHighestPrice(req.query.highestPrice, result);
    }
    if (req.query.endTime) {
        result = auctionFilters.filterAuctionsByEndTime(req.query.endTime, result);
    }
    if (req.query.laptopName) {
        result = auctionFilters.filterAuctionsByLaptopName(req.query.laptopName, result);
    }

    res.json(result);
}


export function getAuctionById(req, res) {
    const auctionId = parseInt(req.params.id)
    const auction = auctions.find(auction => auction.id === auctionId)

    if (!auction) {
        return res.status(404).send({message: "Auction with this id does not exist"})
    }

    const result = {
        id: auction.id,
        currentPrice: calculateCurrentPrice(auction),
        laptopName: getLaptopNameById(auction.laptopId),
        endTime: auction.endTime
    }

    return res.json(result)
}

export function getAuctionBids(req, res) {
    const auctionId = parseInt(req.params.id)
    const auction = auctions.find(auction => auction.id === auctionId)

    if (!auction) {
        return res.status(404).send({error: "Auction with this id does not exist"})
    }

    const auctionBids = bids.filter(bid => bid.auctionId === auctionId)
    return res.json(auctionBids)
}

export function createAuction(req, res) {
    const newAuction = {id: auctions.length + 1, ...req.body}

    if (req.body.id) {
        return res.status(400).send({error: "Id should not be specified manually"})
    }
    if (!newAuction.laptopId || !newAuction.initialPrice || !newAuction.endTime) {
        return res.status(400).send({error: "Missing required fields"})
    }

    auctions.push(newAuction)
    res.status(201).send({message: "Auction created successfully"})
}

export function createBidForAuction(req, res) {
    const newBid = {
        id: bids.length + 1,
        auctionId: parseInt(req.params.id),
        userId: req.userId,
        ...req.body,
        dateTime: new Date().toISOString()
    }
    const auction = auctions.find(auction => auction.id === parseInt(req.params.id))
    auction.currentPrice = calculateCurrentPrice(auction)

    if (req.body.id || req.body.auctionId || req.body.userId || req.body.dateTime) {
        return res.status(400).send({error: "Id, auctionId, userId and dateTime should not be specified manually"})
    }
    if (!auction) {
        return res.status(404).send({error: "Auction with this id does not exist"})
    }
    if (!users.find(user => user.id === newBid.userId)) {
        return res.status(400).send({message: "User with this id does not exist"})
    }
    if (!newBid.price) {
        return res.status(400).send({error: "Missing required fields"})
    }
    if (newBid.price <= auction.currentPrice) {
        return res.status(400).send({error: "Invalid bid price"})
    }

    bids.push(newBid)
    res.status(201).send({message: "Bid created successfully"})
}

export function editAuction(req, res) {
    const auctionId = parseInt(req.params.id)

    const auctionIndex = auctions.findIndex(auction => auction.id === auctionId)
    if (auctionIndex === -1) {
        return res.status(404).send({error: "Auction with this id does not exist"})
    }
    if (req.body.id) {
        return res.status(400).send({error: "AuctionId should not be specified manually"})
    }

    const updatedAuction = {id: auctionId, ...auctions[auctionIndex], ...req.body}
    if (!updatedAuction.laptopId || !updatedAuction.initialPrice || !updatedAuction.endTime) {
        return res.status(400).send({error: "Missing required fields"})
    }
    if (new Date(updatedAuction.dateTime) < new Date()) {
        return res.status(400).send({error: "Invalid date"})
    }

    auctions[auctionIndex] = updatedAuction
    res.status(200).send({message: "Auction updated successfully"})
}

export function deleteAuction(req, res) {
    const auctionId = parseInt(req.params.id)
    const auctionIndex = auctions.findIndex(auction => auction.id === auctionId)

    if (auctionIndex === -1) {
        return res.status(404).send({error: "Auction with this id does not exist"})
    }

    auctions.splice(auctionIndex, 1)
    bids.splice(0, bids.length, ...bids.filter(bid => bid.auctionId !== auctionId))
    res.status(200).send({message: "Auction deleted successfully"})
}