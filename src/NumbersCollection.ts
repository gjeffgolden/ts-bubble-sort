export class NumbersCollection {
    data: number[]

    constructor(data: number[]) {
        this.data = data
    }

    //get allows calling as instance.length without a function call
    get length(): number {
        return this.data.length
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex]
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftElement = this.data[leftIndex]
        this.data[leftIndex] = this.data[rightIndex]
        this.data[rightIndex] = leftElement
    }
}