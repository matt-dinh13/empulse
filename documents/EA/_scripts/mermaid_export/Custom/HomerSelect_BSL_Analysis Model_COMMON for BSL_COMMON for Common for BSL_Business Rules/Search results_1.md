# Search results

```mermaid
graph TD
    Search_by_substring["Search by substring"]
    Display_results_for_limited_search_rule["Display results for limited search rule"]
    Display_results_for_unlimited_search_rule["Display results for unlimited search rule"]
    Search_time_out_rule["Search time-out rule"]
    Search_with_limited_number_of_results["Search with limited number of results"]
    Sorting_of_search_results_rule["Sorting of search results rule"]
    Search_with_unlimited_number_of_results["Search with unlimited number of results"]
    Display_results_for_unlimited_search_rule -->|unnamed| Search_with_unlimited_number_of_results
    Search_time_out_rule -->|unnamed| Search_with_unlimited_number_of_results
    Sorting_of_search_results_rule -->|unnamed| Search_with_unlimited_number_of_results
    Display_results_for_limited_search_rule -->|unnamed| Search_with_limited_number_of_results
    Search_time_out_rule -->|unnamed| Search_with_limited_number_of_results
    Sorting_of_search_results_rule -->|unnamed| Search_with_limited_number_of_results
```
