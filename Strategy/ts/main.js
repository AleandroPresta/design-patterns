"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SortingContext_1 = require("./SortingContext");
const SortingStrategy_1 = require("./SortingStrategy");
const sortingContext = new SortingContext_1.SortingContext(new SortingStrategy_1.BubbleSortStrategy());
sortingContext.sort([1, 2, 3, 4, 5]); // BubbleSort: sort
sortingContext.setStrategy(new SortingStrategy_1.QuickSortStrategy());
sortingContext.sort([1, 2, 3, 4, 5]); // QuickSort: sort
sortingContext.setStrategy(new SortingStrategy_1.MergeSortStrategy());
sortingContext.sort([1, 2, 3, 4, 5]); // MergeSort: sort
