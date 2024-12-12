import laptops from '../data/laptops.js'
import auctions from '../data/auctions.js'

function getLaptopsByBrand(brands, filteredLaptops) {
    const brandsArray = Array.isArray(brands) ? brands : [brands]
    return filteredLaptops.filter(laptop => brandsArray.includes(laptop.brand))
}

function getLaptopsByProcessor(filters, filteredLaptops) {
    const filtersArray = Array.isArray(filters) ? filters : [filters]
    return filteredLaptops.filter(laptop => filtersArray.includes(laptop.processor.split(' ')[0]))
}

function getLaptopsByGraphicsCard(graphicsCards, filteredLaptops) {
    const graphicsCardsArray = Array.isArray(graphicsCards) ? graphicsCards : [graphicsCards]
    return filteredLaptops.filter(laptop => graphicsCardsArray.includes(laptop.graphicsCard.split(' ')[0]))
}

function getLaptopsByRam(rams, filteredLaptops) {
    const ramsArray = Array.isArray(rams) ? rams : [rams]
    return filteredLaptops.filter(laptop => ramsArray.includes(laptop.ram))
}

function getLaptopsBySsd(ssds, filteredLaptops) {
    const ssdArray = Array.isArray(ssds) ? ssds : [ssds]
    return filteredLaptops.filter(laptop => ssdArray.includes(laptop.ssd))
}



export function getAllLaptops(req, res) {
    let result = Array.from(laptops)

    if (req.query.brand) {
        result = getLaptopsByBrand(req.query.brand, result)
    }
    if (req.query.processor) {
        result = getLaptopsByProcessor(req.query.processor, result)
    }
    if (req.query.graphicsCard) {
        result = getLaptopsByGraphicsCard(req.query.graphicsCard, result)
    }
    if (req.query.ram) {
        result = getLaptopsByRam(req.query.ram, result)
    }
    if (req.query.ssd) {
        result = getLaptopsBySsd(req.query.ssd, result)
    }

    res.json(result)
}

export function getLaptopById(req, res) {
    const laptopId = parseInt(req.params.id)
    const laptop = laptops.find(laptop => laptop.id === laptopId)

    if (!laptop) {
        return res.status(404).send({error: 'Laptop with this id does not exist'})
    }

    return res.json(laptop)
}

export function getLaptopAuctions(req, res) {
    const laptopId = parseInt(req.params.id)
    const laptop = laptops.find(laptop => laptop.id === laptopId)

    if (!laptop) {
        return res.status(404).send({error: 'Laptop with this id does not exist'})
    }

    const laptopAuctions = auctions.find(auction => auction.laptopId === laptopId)
    return res.json(laptopAuctions)
}

export function createLaptop(req, res) {
    const newLaptop = {id: req.params.id, ...req.body}

    if (!newLaptop.name || !newLaptop.brand || !newLaptop.processor || !newLaptop.graphicsCard || !newLaptop.ram || !newLaptop.ssd) {
        return res.status(400).send({error: 'Missing required fields'})
    }

    laptops.push(newLaptop)
    res.status(201).send({message: 'Laptop created successfully'})
}

export function editLaptop(req, res) {
    const laptopId = parseInt(req.params.id)
    const laptopIndex = laptops.findIndex(laptop => laptop.id === laptopId)

    if (laptopIndex === -1) {
        return res.status(404).send({error: 'Laptop with this id does not exist'})
    }
    if (req.body.id) {
        return res.status(400).send({error: 'LaptopId should not be specified manually'})
    }

    const updatedLaptop = {id: laptopId, ...laptops[laptopIndex], ...req.body}
    if (!updatedLaptop.name || !updatedLaptop.brand || !updatedLaptop.processor || !updatedLaptop.graphicsCard || !updatedLaptop.ram || !updatedLaptop.ssd) {
        return res.status(400).send({error: 'Missing required fields'})
    }

    laptops[laptopIndex] = updatedLaptop
    res.status(200).send({message: 'Laptop updated successfully'})
}

export function deleteLaptop(req, res) {
    const laptopId = parseInt(req.params.id)
    const laptopIndex = laptops.findIndex(laptop => laptop.id === laptopId)

    if (laptopIndex === -1) {
        return res.status(404).send({error: 'Laptop with this id does not exist'})
    }

    laptops.splice(laptopIndex, 1)
    auctions.splice(0, auctions.length, ...auctions.filter(auction => auction.laptopId !== laptopId))
    res.status(200).send({message: 'Laptop deleted successfully'})
}