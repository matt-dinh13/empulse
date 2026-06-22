# UploadDocumentFile

```mermaid
sequenceDiagram
    participant DMS as DMS
    participant External_system as External system
    participant Cabinet as Cabinet
    DMS->>External_system: Sequence
    External_system->>DMS: document-files
    Cabinet->>DMS: Sequence
    DMS->>Cabinet: Sequence
```
