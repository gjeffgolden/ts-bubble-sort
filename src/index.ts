class Sorter {
    constructor(public collection: number[]) {}

    sort(): void {
        const { length } = this.collection

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++ ) {
                if (this.collection[j] > this.collection[j + 1]) {
                    const lefthandElement = this.collection[j]
                    this.collection[j] = this.collection[j + 1]
                    this.collection[j + 1] = lefthandElement
                }
            }
        }
    }
}

const sorter = new Sorter([8, 3, 7, 1, 0])

sorter.sort()

console.log(sorter.collection)