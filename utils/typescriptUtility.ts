export function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomString(length: number): string {
    return Math.random().toString(36).substring(2, 2 + length);
}

export function getCurrentDate(): string {
    return new Date().toISOString().split("T")[0];
}

export function getTimestamp(): number {
    return Date.now();
}

export function getDate(days: number): string {
    const date = new Date();
    date.setDate(date.getDate() + days);

    return date.toISOString().split("T")[0];
}