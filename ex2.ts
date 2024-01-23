// Defining the Point and Circle interfaces with types
interface Point {
    x: number;
    y: number;
    getX: () => number;
    getY: () => number;
    moveTo: (newX: number, newY: number) => void;
    toString: () => string;
}

interface Circle {
    center: Point;
    radius: number;
    getCenterX: () => number;
    getCenterY: () => number;
    getRadius: () => number;
    moveCenterTo: (newX: number, newY: number) => void;
    toString: () => string;
}

// Factory function for Point
const createPoint = (x: number, y: number): Point => {
    return {
        x,
        y,
        getX: function() { return this.x; },
        getY: function() { return this.y; },
        moveTo: function(newX: number, newY: number) { this.x = newX; this.y = newY; },
        toString: function() { return `Point(${this.x}, ${this.y})`; }
    };
};

// Factory function for Circle
const createCircle = (center: Point, radius: number): Circle => {
    return {
        center,
        radius,
        getCenterX: function() { return this.center.getX(); },
        getCenterY: function() { return this.center.getY(); },
        getRadius: function() { return this.radius; },
        moveCenterTo: function(newX: number, newY: number) { this.center.moveTo(newX, newY); },
        toString: function() {
            return `Circle(center: ${this.center.toString()}, radius: ${this.radius})`;
        }
    };
};

// Usage examples
const point = createPoint(1, 2);
const circle = createCircle(point, 5);

// a) Array of circles and mapping to get their radius
const circles: Circle[] = [
    createCircle(createPoint(1, 2), 5),
    createCircle(createPoint(3, 4), 10),
    createCircle(createPoint(5, 6), 15)
];

const radii: number[] = circles.map(circle => circle.getRadius());
console.log(radii);

// c) Overloaded constructor for Circle
// Since TypeScript does not support method overloading in the same way as Java,
// we can use a single factory function with optional parameters and type checks.
const createCircleOverloaded = (x?: number, y?: number, radius?: number): Circle => {
    if (x !== undefined && y !== undefined && radius !== undefined) {
        return createCircle(createPoint(x, y), radius);
    } else {
        throw new Error('Invalid arguments for creating a circle');
    }
};

const circleFromCoords = createCircleOverloaded(1, 2, 5);
console.log(circleFromCoords.toString());
 