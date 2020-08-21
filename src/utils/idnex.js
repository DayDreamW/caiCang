export function sleep(timeout) {
    return new Promise((res) => setTimeout(res, timeout))
}

export function randomNum (num) {
    return Math.floor(Math.random() * num)
}