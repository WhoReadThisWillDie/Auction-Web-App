import auctions from "../data/auctions.js"
import bids from "../data/bids.js"

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

    if (auction) {
        auction.currentPrice = calculateCurrentPrice(auction)
        return res.json(auction)
    }

    res.status(404).json({ message: `Auction with id ${auctionId} not found` })
}

export function createAuction(req, res) {
    const newAuction = req.body
    if (!newAuction.laptopId || !newAuction.initialPrice || !newAuction.endTime) {
        return res.status(400).json({error: "Missing required fields"})
    }

    newAuction.id = auctions.length + 1
    auctions.push(newAuction)
    res.status(201).send()
}

export function editAuction(req, res) {
    const editedAuction = req.body
    const auction = auctions.find(auction => auction.id === editedAuction.id)

    if (!auction) {
        return res.status(404).json({error: "Auction with this id does not exist"})
    }
    if (!editedAuction.laptopId || !editedAuction.initialPrice || !editedAuction.endTime) {
        return res.status(400).json({error: "Missing required fields"})
    }

    auctions.splice(auctions.findIndex(auction => auction.id === editedAuction.id), 1, editedAuction)
    res.status(204).send()
}

export function deleteAuction(req, res) {
    const auctionId = parseInt(req.params.id)
    const auctionIndex = auctions.findIndex(auction => auction.id === auctionId)
    if (auctionIndex === -1) {
        return res.status(404).json({error: "Auction with this id does not exist"})
    }

    auctions.splice(auctionIndex, 1)
    res.status(204).send()
}