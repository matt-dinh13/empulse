# Schema Definitions

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Services (COS_NG)/Interface Provided/Web Services/Contract Services/Schema Definitions
- **Diagram ID**: 163245
- **Elements**: 8
- **Connectors**: 7

```mermaid
classDiagram
    class Role["Role"]
    class ContractServiceStatusTransition["ContractServiceStatusTransition"]
    class ContractServiceStatus["ContractServiceStatus"]
    class ServiceOperationStatusType["ServiceOperationStatusType"]
    class Tariff["Tariff"]
    class Service["Service"]
    class RelatedSubject["RelatedSubject"]
    class ContractService["ContractService"]
    ContractService --> RelatedSubject : unnamed
    ContractService --> Service : unnamed
    ContractService --> Tariff : unnamed
    ContractService --> ServiceOperationStatusType : unnamed
    ContractService --> ContractServiceStatus : unnamed
    ContractService --> ContractServiceStatusTransition : unnamed
    ContractService --> Role : unnamed
```
