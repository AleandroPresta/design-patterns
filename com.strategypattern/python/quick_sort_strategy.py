from sorting_strategy import SortingStrategy

class QuickSortStrategy(SortingStrategy):
    def sort(self, data) -> list:
        self.quick_sort(data, 0, len(data) - 1)
        return data

    def quick_sort(self, arr, low, high):
        if low < high:
            pi = self.partition(arr, low, high)
            self.quick_sort(arr, low, pi - 1)
            self.quick_sort(arr, pi + 1, high)

    def partition(self, arr, low, high):
        i = low - 1
        pivot = arr[high]

        for j in range(low, high):
            if arr[j] < pivot:
                i += 1
                arr[i], arr[j] = arr[j], arr[i]

        arr[i + 1], arr[high] = arr[high], arr[i + 1]
        return i + 1