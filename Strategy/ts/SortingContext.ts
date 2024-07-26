import { SortingStrategy } from "./SortingStrategy";

export class SortingContext {
    private strategy: SortingStrategy;

    constructor(strategy: SortingStrategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: SortingStrategy): void {
        this.strategy = strategy;
    }

    public sort(data: number[]): void {
        this.strategy.sort(data);
    }
}