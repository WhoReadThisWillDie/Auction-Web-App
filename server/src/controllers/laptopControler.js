import laptops from "../data/laptops.js";

export function getAllLaptops(req, res) {
    res.send(laptops)
}