import bids from "../data/bids.js"
import users from "../data/users.js"
import auctions from "../data/auctions.js"

export function getAllBids(req, res) {
    res.json(bids)
}

export function getBidById(req, res) {
    const bidId = parseInt(req.params.id)
    const bid = bids.find(bid => bid.id === bidId)
    if (bid) {
        return res.json(bid)
    }
    res.status(404).json({ message: `Bid with id ${bidId} not found` })
}

export function createBid(req, res) {
    const newBid = req.body
    if (!newBid.price || !newBid.userId || !newBid.auctionId) {
        return res.status(400).json({error: "Missing required fields"})
    }

    newBid.id = bids.length + 1
    newBid.dateTime = new Date()

    if (!users.find(user => user.id === newBid.userId)) {
        return res.status(400).json({ message: "User with this id does not exist" })
    }
    if (!auctions.find(auction => auction.id === newBid.auctionId)) {
        return res.status(400).json({ message: "Auction with this id does not exist" })
    }
    if (new Date(newBid.dateTime) < new Date()) {
        return res.status(400).json({ message: "Invalid date" })
    }

    bids.push(newBid)
    res.status(201).send()
}

export function deleteBid(req, res) {
    const bidId = parseInt(req.params.id)
    const bidIndex = bids.findIndex(bid => bid.id === bidId)
    if (bidIndex === -1) {
        return res.status(404).json({ message: "Bid with this id does not exist" })
    }
    bids.splice(bidIndex, 1)
    res.status(204).send()
}