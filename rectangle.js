import { ltc } from './logToConsole.js';

export function areaOfRectangle(length,width) {
    // let radius = r;
    // ltc(`Radius = ${radius}`);
    // let part1 = r**2;
    // ltc(`Radius squared = ${part1}`);
    // let part2 = Math.PI;
    // ltc(`Pi = ${part2}`);
    // let area = part1 * part2;
    // ltc(`Area = ${area}`);
    let area = length * width;
    return `Area of rectangle = ${area}`;
}