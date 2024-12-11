import laptops from "../data/laptops.js";
import auctions from "../data/auctions.js";

export function getAllLaptops(req, res) {
    res.json(laptops)
}

export function getLaptopById(req, res) {
    const laptopId = parseInt(req.params.id)
    const laptop = laptops.find(laptop => laptop.id === laptopId)

    if (!laptop) {
        return res.status(404).send({error: "Laptop with this id does not exist"})
    }

    return res.json(laptop)
}

export function getLaptopAuctions(req, res) {
    const laptopId = parseInt(req.params.id)
    const laptop = laptops.find(laptop => laptop.id === laptopId)

    if (!laptop) {
        return res.status(404).send({error: "Laptop with this id does not exist"})
    }

    const laptopAuctions = auctions.find(auction => auction.laptopId === laptopId)
    return res.json(laptopAuctions)
}

export function createLaptop(req, res) {
    const newLaptop = {id: req.params.id, ...req.body}

    if (!newLaptop.name || !newLaptop.brand || !newLaptop.processor || !newLaptop.graphicsCard || !newLaptop.ram || !newLaptop.ssd) {
        return res.status(400).send({error: "Missing required fields"})
    }

    laptops.push(newLaptop)
    res.status(201).send({message: "Laptop created successfully"})
}

export function editLaptop(req, res) {
    const laptopId = parseInt(req.params.id)
    const laptopIndex = laptops.findIndex(laptop => laptop.id === laptopId)

    if (laptopIndex === -1) {
        return res.status(404).send({error: "Laptop with this id does not exist"})
    }
    if (req.body.id) {
        return res.status(400).send({error: "LaptopId should not be specified manually"})
    }

    const updatedLaptop = {id: laptopId, ...laptops[laptopIndex], ...req.body}
    if (!updatedLaptop.name || !updatedLaptop.brand || !updatedLaptop.processor || !updatedLaptop.graphicsCard || !updatedLaptop.ram || !updatedLaptop.ssd) {
        return res.status(400).send({error: "Missing required fields"})
    }

    laptops[laptopIndex] = updatedLaptop
    res.status(200).send({message: "Laptop updated successfully"})
}

export function deleteLaptop(req, res) {
    const laptopId = parseInt(req.params.id)
    const laptopIndex = laptops.findIndex(laptop => laptop.id === laptopId)

    if (laptopIndex === -1) {
        return res.status(404).send({error: "Laptop with this id does not exist"})
    }

    laptops.splice(laptopIndex, 1)
    auctions.splice(0, auctions.length, ...auctions.filter(auction => auction.laptopId !== laptopId));
    res.status(200).send({message: "Laptop deleted successfully"})
}