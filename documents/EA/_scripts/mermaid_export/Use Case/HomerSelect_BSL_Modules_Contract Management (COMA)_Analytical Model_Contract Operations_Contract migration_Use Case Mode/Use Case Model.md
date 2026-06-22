# Use Case Model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contract Operations/Contract migration/Use Case Model
- **Diagram ID**: 164704
- **Elements**: 5
- **Connectors**: 4

```mermaid
graph LR
    ADD_Rollback_contract_status_from_migrated_COMA["{ADD}Rollback contract status from migrated (COMA)"]
    ADD_Contract_migration_rollback_via_API(("{ADD}Contract migration rollback via API"))
    External_System[/"External System"/]
    ADD_Set_contract_status_to_Migrated_COMA["{ADD}Set contract status to Migrated (COMA)"]
    ADD_Contract_migrate_via_API(("{ADD}Contract migrate via API"))
    ADD_Contract_migration_rollback_via_API -->|unnamed| ADD_Rollback_contract_status_from_migrated_COMA
    ADD_Contract_migrate_via_API --- External_System
    ADD_Contract_migration_rollback_via_API --- External_System
    ADD_Contract_migrate_via_API -->|unnamed| ADD_Set_contract_status_to_Migrated_COMA
```
