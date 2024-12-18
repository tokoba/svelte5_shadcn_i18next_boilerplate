const c2f = (c: number): number => {
    return (c * 9) / 5 + 32
}
const f2c = (f: number): number => {
    return ((f - 32) * 5) / 9
}

export class Temperature {
    #celcius = $state(0) /* # is for a private variable */
    #fahrenheit = $state(32) /* # is for a private variable */

    get celsius(): number {
        return this.#celcius
    }
    set celsius(c) {
        this.#celcius = c
        this.#fahrenheit = parseFloat(c2f(c).toFixed(1))
    }
    get fahrenheit(): number {
        return this.#fahrenheit
    }
    set fahrenheit(f) {
        this.#fahrenheit = f
        this.#celcius = parseFloat(f2c(f).toFixed(1))
    }
}
