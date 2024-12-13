export function filterLaptopsByBrand(brands, filteredLaptops) {
    const brandsArray = Array.isArray(brands) ? brands : [brands]
    return filteredLaptops.filter(laptop => brandsArray.includes(laptop.brand))
}

export function filterLaptopsByProcessor(filters, filteredLaptops) {
    const filtersArray = Array.isArray(filters) ? filters : [filters]
    return filteredLaptops.filter(laptop => filtersArray.includes(laptop.processor.split(' ')[0]))
}

export function filterLaptopsByGraphicsCard(graphicsCards, filteredLaptops) {
    const graphicsCardsArray = Array.isArray(graphicsCards) ? graphicsCards : [graphicsCards]
    return filteredLaptops.filter(laptop => graphicsCardsArray.includes(laptop.graphicsCard.split(' ')[0]))
}

export function filterLaptopsByRam(rams, filteredLaptops) {
    const ramsArray = Array.isArray(rams) ? rams : [rams]
    return filteredLaptops.filter(laptop => ramsArray.includes(laptop.ram))
}

export function filterLaptopsBySsd(ssds, filteredLaptops) {
    const ssdArray = Array.isArray(ssds) ? ssds : [ssds]
    return filteredLaptops.filter(laptop => ssdArray.includes(laptop.ssd))
}