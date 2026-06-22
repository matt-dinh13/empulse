# Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Access Rights
- **Diagram ID**: 112250
- **Elements**: 8
- **Connectors**: 4

```mermaid
graph TD
    n_01_682_Anonymize_archived_temporary_applications["01.682 Anonymize archived temporary applications"]
    n_01_682_Anonymize_archived_temporary_applications["01.682 Anonymize archived temporary applications"]
    n_01_685_Hide_contracts["01.685 Hide contracts"]
    n_01_685_Hide_contracts["01.685 Hide contracts"]
    n_01_020_Create_contract["01.020 Create contract"]
    n_01_680_Delete_temporary_applications["01.680 Delete temporary applications"]
    n_01_680_Delete_temporary_applications["01.680 Delete temporary applications"]
    MOD_01_020_Create_contract["{MOD}01.020 Create contract"]
    MOD_01_020_Create_contract -->|unnamed| n_01_020_Create_contract
    n_01_680_Delete_temporary_applications -->|unnamed| n_01_680_Delete_temporary_applications
    n_01_685_Hide_contracts -->|unnamed| n_01_685_Hide_contracts
    n_01_682_Anonymize_archived_temporary_applications -->|unnamed| n_01_682_Anonymize_archived_temporary_applications
```
