export function filterLaptopsByBrand(brands, filteredLaptops) {
    const brandsArray = Array.isArray(brands) ? brands : [brands]
    return filteredLaptops.filter(laptop => brandsArray.includes(laptop.brand))
}

export function filterLaptopsByCpu(filters, filteredLaptops) {
    const cpusArray = Array.isArray(filters) ? filters : [filters];
    return filteredLaptops.filter(laptop =>
        cpusArray.some(filter => laptop.cpu.toLowerCase().includes(filter.toLowerCase()))
    );
}

export function filterLaptopsByGpu(gpus, filteredLaptops) {
    const gpusArray = Array.isArray(gpus) ? gpus : [gpus];
    return filteredLaptops.filter(laptop =>
        gpusArray.some(filter => laptop.gpu.toLowerCase().includes(filter.toLowerCase()))
    );
}


export function filterLaptopsByRam(rams, filteredLaptops) {
    const ramsArray = Array.isArray(rams) ? rams : [rams]
    return filteredLaptops.filter(laptop => ramsArray.includes(laptop.ram))
}

export function filterLaptopsBySsd(ssds, filteredLaptops) {
    const ssdArray = Array.isArray(ssds) ? ssds : [ssds]
    return filteredLaptops.filter(laptop => ssdArray.includes(laptop.ssd))
}