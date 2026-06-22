# DMS:Create Document with content - calling variants

```mermaid
sequenceDiagram
    participant External_system as External system
    participant DMS as DMS
    participant Cabinet as Cabinet
    participant ContractManagement as ContractManagement
    External_system->>DMS: CreateDocument
    DMS->>External_system: Sequence
    External_system->>Cabinet: Cabinet.CreateDocument
    DMS->>External_system: Sequence
    External_system->>ContractManagement: AddDocumentToContract
    External_system->>ContractManagement: AddDocumentToContract
    Cabinet->>External_system: Sequence
    External_system->>DMS: CreateDocument
    Cabinet->>DMS: Sequence
    DMS->>Cabinet: Cabinet.createDocument
```
