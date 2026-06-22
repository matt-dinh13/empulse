# DMS:How to get Document content

```mermaid
sequenceDiagram
    participant External_system as External system
    participant Cabinet as Cabinet
    participant DMS as DMS
    External_system->>Cabinet: GetBigDocumentData
    External_system->>DMS: GetDocument
    Cabinet->>External_system: Sequence
    External_system->>External_system: Get fileUuid from Document
    DMS->>External_system: Sequence
```
