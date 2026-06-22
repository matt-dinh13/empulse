# Use Case Model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Analytical Model/{ADD}Migrated contract/Use Case Model
- **Diagram ID**: 164692
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph LR
    ADD_08_772_Validate_Migrated_contract_bulk_operation(("{ADD}08.772 Validate Migrated contract bulk operation"))
    ADD_08_771_Create_Migrated_contract_bulk_operation(("{ADD}08.771 Create Migrated contract bulk operation"))
    ADD_08_773_Execute_Migrated_contract_bulk_operation(("{ADD}08.773 Execute Migrated contract bulk operation"))
    User[/"User"/]
    ADD_08_771_Create_Migrated_contract_bulk_operation -->|unnamed| ADD_08_772_Validate_Migrated_contract_bulk_operation
    ADD_08_773_Execute_Migrated_contract_bulk_operation --- User
    ADD_08_771_Create_Migrated_contract_bulk_operation --- User
```
