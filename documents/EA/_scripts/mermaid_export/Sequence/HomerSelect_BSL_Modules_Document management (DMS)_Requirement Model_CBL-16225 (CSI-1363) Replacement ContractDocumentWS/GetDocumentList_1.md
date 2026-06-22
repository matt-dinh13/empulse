# GetDocumentList

```mermaid
sequenceDiagram
    participant External_System as External System
    participant COMA as COMA
    participant Cabinet as Cabinet
    participant DMS as DMS
    External_System->>COMA: COMA GET contracts
    External_System->>Cabinet: CAB GET documents
    COMA->>External_System: Sequence
    External_System->>DMS: DMS GET documents
    Cabinet->>External_System: Sequence
    DMS->>External_System: Sequence
```
