# DMS:How to get Document content

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Component model
- **Diagram ID**: 162020
- **Elements**: 3
- **Connectors**: 5

```mermaid
sequenceDiagram
    participant External_system as External system
    participant Cabinet as Cabinet
    participant DMS as DMS
    External_system->>+Cabinet: GetBigDocumentData
    External_system->>+DMS: GetDocument
    Cabinet->>+External_system: Sequence
    External_system->>+External_system: Get fileUuid from Document
    DMS->>+External_system: Sequence
```
