# SetDocumentRegistrationCheck

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Requirement Model/CBL-16225 (CSI-1363) Replacement ContractDocumentWS methods/SetDocumentRegistrationCheck
- **Diagram ID**: 141548
- **Elements**: 2
- **Connectors**: 2

```mermaid
sequenceDiagram
    participant External_system as External system
    participant DMS as DMS
    External_system->>+DMS: documents/{documentUuid}
    DMS->>+External_system: Sequence
```
