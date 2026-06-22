# CreateContractDocument

```mermaid
sequenceDiagram
    participant External_System as External System
    participant DMS as DMS
    participant COMA as COMA
    External_System->>DMS: POST documents
    External_System->>COMA: POST contracts
    DMS->>External_System: Sequence
    COMA->>External_System: Sequence
```
