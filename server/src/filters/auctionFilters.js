import laptops from "../data/laptops.js";

export function filterAuctionsByLowestPrice(price, filteredAuctions)  {
    return filteredAuctions.filter(auction => auction.currentPrice >= price)
}

export function filterAuctionsByHighestPrice(price, filteredAuctions)  {
    return filteredAuctions.filter(auction => auction.currentPrice <= price)
}

export function filterAuctionsByEndTime(endTime, filteredAuctions)  {
    return filteredAuctions.filter(auction => new Date(auction.endTime) <= new Date(endTime))
}

export function filterAuctionsByLaptopName(laptopName, filteredAuctions)  {
    return filteredAuctions.filter(auction =>
        laptops.find(laptop => laptop.id === auction.laptopId).name.includes(laptopName)
    )
}