import bids from "../data/bidsData.js"

export function getAllBids(req, res) {
    res.json(bids)
}