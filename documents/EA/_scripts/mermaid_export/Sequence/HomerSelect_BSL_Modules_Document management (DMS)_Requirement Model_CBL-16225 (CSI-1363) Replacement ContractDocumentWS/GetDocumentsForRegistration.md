# GetDocumentsForRegistration

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Requirement Model/CBL-16225 (CSI-1363) Replacement ContractDocumentWS methods/GetDocumentsForRegistration
- **Diagram ID**: 144217
- **Elements**: 3
- **Connectors**: 4

```mermaid
sequenceDiagram
    participant External_system as External system
    participant REM as REM
    participant DMS as DMS
    External_system->>+REM: GET /registration/contracts/{contractCode}/documents
    REM->>+External_system: Sequence
    DMS->>+REM: Sequence
    REM->>+DMS: GET documents
```
