# Archivation process 

```mermaid
sequenceDiagram
    participant COMA as COMA
    participant DMS as DMS
    participant Cabinet as Cabinet
    participant Central_Archive as Central Archive
    participant External_system as External system
    participant Time as Time
    COMA->>COMA: Set contract archiving progress
    COMA->>DMS: ContractArchived
    DMS->>Cabinet: DocumentArchived
    Cabinet->>Central_Archive: archiveFile
    External_system->>COMA: archiveContract
    Central_Archive->>Cabinet: archiveFile
    COMA->>External_system: archiveContract
    Time->>COMA: Archive contracts
```
