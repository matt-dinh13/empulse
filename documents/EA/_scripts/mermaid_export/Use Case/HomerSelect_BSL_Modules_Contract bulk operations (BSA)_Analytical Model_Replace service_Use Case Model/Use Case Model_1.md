# Use Case Model

```mermaid
graph TD
    User_Interface_Model_Replace_service["User Interface Model : Replace service"]
    User["User"]
    n_08_733_Execute_Replace_service_bulk_operation["08.733 Execute Replace service bulk operation"]
    n_08_732_Validate_Replace_service_bulk_operation["08.732 Validate Replace service bulk operation"]
    n_08_731_Create_Replace_service_bulk_operation["08.731 Create Replace service bulk operation"]
    User -->|unnamed| n_08_731_Create_Replace_service_bulk_operation
    n_08_731_Create_Replace_service_bulk_operation -->|unnamed| n_08_732_Validate_Replace_service_bulk_operation
    User -->|unnamed| n_08_733_Execute_Replace_service_bulk_operation
```
