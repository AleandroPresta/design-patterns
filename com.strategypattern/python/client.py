from sorting_context import SortingContext
from bubble_sort_strategy import BubbleSortStrategy
from merge_sort_strategy import MergeSortStrategy

class Client:
    def main() -> None:
        sorting_context: SortingContext = SortingContext(BubbleSortStrategy())
        array1 : list[int] = [5, 2, 9, 1, 5]
        sorted_array_1 = sorting_context.perform_sort(array1)
        print("Sorted Array", sorted_array_1)
        
        sorting_context.set_sorting_strategy(MergeSortStrategy())
        array2 : list[int] = [5, 2, 9, 1, 5]
        sorted_array_2 = sorting_context.perform_sort(array2)
        print("Sorted Array", sorted_array_2)
        
    if __name__ == "__main__":
        main()