# UploadDocumentFile

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Requirement Model/CBL-16225 (CSI-1363) Replacement ContractDocumentWS methods/UploadDocumentFile
- **Diagram ID**: 141667
- **Elements**: 3
- **Connectors**: 4

```mermaid
sequenceDiagram
    participant DMS as DMS
    participant External_system as External system
    participant Cabinet as Cabinet
    DMS->>+External_system: Sequence
    External_system->>+DMS: document-files
    Cabinet->>+DMS: Sequence
    DMS->>+Cabinet: Sequence
```
