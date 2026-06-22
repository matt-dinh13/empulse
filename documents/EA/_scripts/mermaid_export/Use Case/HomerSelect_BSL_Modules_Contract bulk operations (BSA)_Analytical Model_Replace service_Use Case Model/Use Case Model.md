# Use Case Model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Analytical Model/Replace service/Use Case Model
- **Diagram ID**: 164412
- **Elements**: 5
- **Connectors**: 3

```mermaid
graph LR
    User_Interface_Model_Replace_service["User Interface Model : Replace service"]
    User[/"User"/]
    n_08_733_Execute_Replace_service_bulk_operation(("08.733 Execute Replace service bulk operation"))
    n_08_732_Validate_Replace_service_bulk_operation(("08.732 Validate Replace service bulk operation"))
    n_08_731_Create_Replace_service_bulk_operation(("08.731 Create Replace service bulk operation"))
    User --- n_08_731_Create_Replace_service_bulk_operation
    n_08_731_Create_Replace_service_bulk_operation -.->|include| n_08_732_Validate_Replace_service_bulk_operation
    User --- n_08_733_Execute_Replace_service_bulk_operation
```
