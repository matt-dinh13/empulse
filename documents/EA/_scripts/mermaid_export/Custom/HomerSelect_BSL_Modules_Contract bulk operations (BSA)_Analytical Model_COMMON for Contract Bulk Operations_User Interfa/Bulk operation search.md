# Bulk operation search

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Analytical Model/COMMON for Contract Bulk Operations/User Interface Model
- **Diagram ID**: 145051
- **Elements**: 15
- **Connectors**: 2

```mermaid
graph TD
    Contract_number["Contract number"]
    Show_archived["Show archived"]
    n_08_702_Get_bulk_operation_detail["08.702 Get bulk operation detail"]
    Bulk_operation_list["Bulk operation list"]
    n_08_701_Search_bulk_operation["08.701 Search bulk operation"]
    Search["Search"]
    Description["Description"]
    Created_by_me["Created by me"]
    Created_To["Created To"]
    Created_From["Created From"]
    Status["Status"]
    Operation_type["Operation type"]
    Search_criteria["Search criteria"]
    Search_criteria["Search criteria"]
    Bulk_operation_search["Bulk operation search"]
    Search -->|unnamed| n_08_701_Search_bulk_operation
    Bulk_operation_list -->|unnamed| n_08_702_Get_bulk_operation_detail
```
