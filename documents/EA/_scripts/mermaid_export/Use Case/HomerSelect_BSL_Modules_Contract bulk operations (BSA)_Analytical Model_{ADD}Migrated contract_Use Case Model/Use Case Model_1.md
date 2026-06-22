# Use Case Model

```mermaid
graph TD
    ADD_08_772_Validate_Migrated_contract_bulk_operation["{ADD}08.772 Validate Migrated contract bulk operation"]
    ADD_08_771_Create_Migrated_contract_bulk_operation["{ADD}08.771 Create Migrated contract bulk operation"]
    ADD_08_773_Execute_Migrated_contract_bulk_operation["{ADD}08.773 Execute Migrated contract bulk operation"]
    User["User"]
    ADD_08_771_Create_Migrated_contract_bulk_operation -->|unnamed| ADD_08_772_Validate_Migrated_contract_bulk_operation
    ADD_08_773_Execute_Migrated_contract_bulk_operation -->|unnamed| User
    ADD_08_771_Create_Migrated_contract_bulk_operation -->|unnamed| User
```
