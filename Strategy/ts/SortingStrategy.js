"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeSortStrategy = exports.QuickSortStrategy = exports.BubbleSortStrategy = void 0;
class BubbleSortStrategy {
    sort(data) {
        console.log('BubbleSort: sort');
    }
}
exports.BubbleSortStrategy = BubbleSortStrategy;
class QuickSortStrategy {
    sort(data) {
        console.log('QuickSort: sort');
    }
}
exports.QuickSortStrategy = QuickSortStrategy;
class MergeSortStrategy {
    sort(data) {
        console.log('MergeSort: sort');
    }
}
exports.MergeSortStrategy = MergeSortStrategy;
