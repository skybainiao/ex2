function power(m: number, n: number): number {
    if (!Number.isInteger(n) || n < 0)
        return NaN;
    if (n === 0)
        return 1;
    else if (n === 1)
        return m;
    else if (n % 2 === 0)
        return power(m * m, n / 2);
    else
        return m * power(m, n - 1);
}

function uppercase<T extends { toString(): string }>(s: T): string {
    return s.toString().toUpperCase();
}

type Color = "Red" | "Green" | "Blue";
function rgb(color: Color): number {
    switch(color) {
        case "Red":
            return 0xff0000;
        case "Green":
            return 0x00ff00;
        case "Blue":
            return 0x0000ff;
    }
}

interface ValuedItem {
    value: number;
}
function addValues(a: ValuedItem[]): number {
    let sum = 0;
    for(let i = 0; i < a.length; i++) {
        sum += a[i].value;
    }
    return sum;
}

interface StringItem {
    get(index: number): string;
}
function addValuesString(a: StringItem, length: number): string {
    let total = "";
    for(let i = 0; i < length; i++) {
        total += a.get(i);
    }
    return total;
}

function reverse<T>(a: T[]): T[] {
    const result = new Array(a.length);
    for(let i = 0; i < a.length; i++) {
        result[i] = a[a.length - 1 - i];
    }
    return result;
}

function concat<T>(a: T[], b: T[]): T[] {
    return a.concat(b);
}
