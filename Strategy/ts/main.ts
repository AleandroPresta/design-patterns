import { SortingContext } from "./SortingContext";
import { BubbleSortStrategy, QuickSortStrategy, MergeSortStrategy } from "./SortingStrategy";

const sortingContext: SortingContext = new SortingContext(new BubbleSortStrategy());

sortingContext.sort([1, 2, 3, 4, 5]); // BubbleSort: sort

sortingContext.setStrategy(new QuickSortStrategy());

sortingContext.sort([1, 2, 3, 4, 5]); // QuickSort: sort

sortingContext.setStrategy(new MergeSortStrategy());

sortingContext.sort([1, 2, 3, 4, 5]); // MergeSort: sort