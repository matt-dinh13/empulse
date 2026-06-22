# Use Case Model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Analytical Model/Add service /Use Case Model
- **Diagram ID**: 164411
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph LR
    User[/"User"/]
    n_08_723_Execute_Add_service_bulk_operation(("08.723 Execute Add service bulk operation"))
    n_08_722_Validate_Add_service_bulk_operation(("08.722 Validate Add service bulk operation"))
    n_08_721_Create_Add_service_bulk_operation(("08.721 Create Add service bulk operation"))
    User --- n_08_721_Create_Add_service_bulk_operation
    n_08_721_Create_Add_service_bulk_operation -.->|include| n_08_722_Validate_Add_service_bulk_operation
    User --- n_08_723_Execute_Add_service_bulk_operation
```
