# CreateContractDocument

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Requirement Model/CBL-16225 (CSI-1363) Replacement ContractDocumentWS methods/CreateContractDocument
- **Diagram ID**: 141545
- **Elements**: 3
- **Connectors**: 4

```mermaid
sequenceDiagram
    participant External_System as External System
    participant DMS as DMS
    participant COMA as COMA
    External_System->>+DMS: POST documents
    External_System->>+COMA: POST contracts
    DMS->>+External_System: Sequence
    COMA->>+External_System: Sequence
```
