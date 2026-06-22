# Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contract Operations/Contract migration/Access Rights
- **Diagram ID**: 164702
- **Elements**: 4
- **Connectors**: 2

```mermaid
graph TD
    ADD_Contract_migration_rollback["{ADD}Contract migration rollback"]
    ADD_Contract_migration_rollback_via_API["{ADD}Contract migration rollback via API"]
    ADD_Contract_migrate_via_API["{ADD}Contract migrate via API"]
    ADD_Contract_migrate["{ADD}Contract migrate"]
    ADD_Contract_migrate_via_API -->|unnamed| ADD_Contract_migrate
    ADD_Contract_migration_rollback_via_API -->|unnamed| ADD_Contract_migration_rollback
```
