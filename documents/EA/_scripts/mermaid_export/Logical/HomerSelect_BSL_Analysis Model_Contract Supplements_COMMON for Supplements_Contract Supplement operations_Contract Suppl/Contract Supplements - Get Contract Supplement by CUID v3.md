# Contract Supplements - Get Contract Supplement by CUID v3

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/Interface Provided/Web Services/ContractSupplements
- **Diagram ID**: 164453
- **Elements**: 13
- **Connectors**: 10

```mermaid
classDiagram
    class SupplementDocument["SupplementDocument"]
    class CustomData["CustomData"]
    class RelatedSubject["RelatedSubject"]
    class CollectionToolServiceRequest["CollectionToolServiceRequest"]
    class ContractSupplementStatusTransition["ContractSupplementStatusTransition"]
    class SupplementTypeSpecificData["SupplementTypeSpecificData"]
    class Transaction["Transaction"]
    class ContractSupplements["ContractSupplements"]
    class ContractSupplement["ContractSupplement"]
    class MOD_contracts["(MOD)contracts"]
    class GetContractSupplementsByCustomer["GetContractSupplementsByCustomer"]
    class ContractSupplements["ContractSupplements"]
    class n_13_120_Get_Contract_Supplements_of_Customer_service["13.120 Get Contract Supplements of Customer service"]
    ContractSupplements ..> n_13_120_Get_Contract_Supplements_of_Customer_service : unnamed
    ContractSupplements --> GetContractSupplementsByCustomer : unnamed
    ContractSupplements --> ContractSupplements : unnamed
    SupplementTypeSpecificData <|-- CollectionToolServiceRequest : unnamed
    SupplementTypeSpecificData <|-- Transaction : unnamed
    ContractSupplement ..> SupplementTypeSpecificData : unnamed
    ContractSupplement ..> ContractSupplementStatusTransition : unnamed
    ContractSupplement --> RelatedSubject : unnamed
    ContractSupplement --> CustomData : unnamed
    ContractSupplement --> SupplementDocument : unnamed
```
