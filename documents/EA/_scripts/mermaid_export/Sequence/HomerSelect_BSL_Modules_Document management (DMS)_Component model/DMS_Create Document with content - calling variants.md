# DMS:Create Document with content - calling variants

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Component model
- **Diagram ID**: 162019
- **Elements**: 7
- **Connectors**: 10

```mermaid
sequenceDiagram
    participant Cabinet as Cabinet
    participant External_system as External system
    participant DMS as DMS
    participant ContractManagement as ContractManagement
    Cabinet->>+External_system: Sequence
    External_system->>+Cabinet: Cabinet.CreateDocument
    DMS->>+Cabinet: Cabinet.createDocument
    Cabinet->>+DMS: Sequence
    DMS->>+External_system: Sequence
    External_system->>+ContractManagement: AddDocumentToContract
    External_system->>+ContractManagement: AddDocumentToContract
    DMS->>+External_system: Sequence
    External_system->>+DMS: CreateDocument
    External_system->>+DMS: CreateDocument
```
