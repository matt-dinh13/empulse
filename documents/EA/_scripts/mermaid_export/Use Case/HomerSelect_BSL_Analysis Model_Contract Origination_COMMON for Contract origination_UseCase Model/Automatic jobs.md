# Automatic jobs

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/UseCase Model
- **Diagram ID**: 151369
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph LR
    n_01_682_Anonymize_archived_temporary_applications(("01.682 Anonymize archived temporary applications"))
    n_01_685_Hide_contracts(("01.685 Hide contracts"))
    Time[/"Time"/]
    n_01_680_Delete_temporary_applications(("01.680 Delete temporary applications"))
    n_01_682_Anonymize_archived_temporary_applications --- Time
    Time --> n_01_685_Hide_contracts
    Time --- n_01_680_Delete_temporary_applications
```
