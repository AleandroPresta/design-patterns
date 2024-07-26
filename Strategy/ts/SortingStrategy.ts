export interface SortingStrategy {
    sort(data: number[]): void;
}

export class BubbleSortStrategy implements SortingStrategy {

    sort(data: number[]): void {
        console.log('BubbleSort: sort');
    }

}

export class QuickSortStrategy implements SortingStrategy {

    sort(data: number[]): void {
        console.log('QuickSort: sort');
    }

}

export class MergeSortStrategy implements SortingStrategy {

    sort(data: number[]): void {
        console.log('MergeSort: sort');
    }

}