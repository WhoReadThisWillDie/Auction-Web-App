import laptops from "../data/laptops.js";
import auctions from "../data/auctions.js";

export function getAllLaptops(req, res) {
    res.send(laptops)
}

export function getLaptopById(req, res) {
    const laptopId = parseInt(req.params.id)
    const laptop = laptops.find(laptop => laptop.id === laptopId)

    if (laptop) {
        return res.send(laptop)
    }
    return res.status(404).json({error: "Laptop with this id does not exist"})
}

export function getLaptopAuctions(req, res) {
    const laptopId = parseInt(req.params.id)
    const laptop = laptops.find(laptop => laptop.id === laptopId)

    if (!laptop) {
        return res.status(404).json({error: "Laptop with this id does not exist"})
    }

    const laptopAuctions = auctions.find(auction => auction.laptopId === laptopId)
    return res.send(laptopAuctions)
}

export function createLaptop(req, res) {
    const newLaptop = req.body
    if (!newLaptop.name || !newLaptop.brand || !newLaptop.processor || !newLaptop.graphicsCard || !newLaptop.ram || !newLaptop.ssd) {
        return res.status(400).json({error: "Missing required fields"})
    }

    newLaptop.id = laptops.length + 1

    laptops.push(newLaptop)
    res.status(201).send()
}

export function editLaptop(req, res) {
    const editedLaptop = req.body
    const laptop = laptops.find(laptop => laptop.id === editedLaptop.id)

    if (!laptop) {
        return res.status(404).json({error: "Laptop with this id does not exist"})
    }
    if (!editedLaptop.name || !editedLaptop.brand || !editedLaptop.processor || !editedLaptop.graphicsCard || !editedLaptop.ram || !editedLaptop.ssd) {
        return res.status(400).json({error: "Missing required fields"})
    }

    laptops.splice(laptops.findIndex(laptop => laptop.id === editedLaptop.id), 1, editedLaptop)
    res.status(204).send()
}

export function deleteLaptop(req, res) {
    const laptopId = parseInt(req.params.id)
    const laptopIndex = laptops.findIndex(laptop => laptop.id === laptopId)
    if (laptopIndex === -1) {
        return res.status(404).json({error: "Laptop with this id does not exist"})
    }

    laptops.splice(laptopIndex, 1)
    res.status(204).send()
}