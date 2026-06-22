# Contract Supplements - Get Contract Supplement by CUID v4

```mermaid
classDiagram
    class TransactionSupplement_v4["TransactionSupplement_v4"]
    class SupplementTypeSpecificData_v4["SupplementTypeSpecificData_v4"]
    class AccountTransaction_v2["AccountTransaction_v2"]
    class SalesQuote["SalesQuote"]
    class SupplementDocument["SupplementDocument"]
    class CustomData["CustomData"]
    class RelatedSubject["RelatedSubject"]
    class CollectionToolServiceRequest["CollectionToolServiceRequest"]
    class ContractSupplementStatusTransition["ContractSupplementStatusTransition"]
    class ContractSupplements["ContractSupplements"]
    class ContractSupplement["ContractSupplement"]
    class MOD_contracts["(MOD)contracts"]
    class GetContractSupplementsByCustomer["GetContractSupplementsByCustomer"]
    class ContractSupplements["ContractSupplements"]
    class n_13_120_Get_Contract_Supplements_of_Customer_service["13.120 Get Contract Supplements of Customer service"]
    ContractSupplements --> n_13_120_Get_Contract_Supplements_of_Customer_service : unnamed
    ContractSupplements --> GetContractSupplementsByCustomer : unnamed
    ContractSupplements --> ContractSupplements : unnamed
    ContractSupplement --> ContractSupplementStatusTransition : unnamed
    ContractSupplement --> RelatedSubject : unnamed
    ContractSupplement --> CustomData : unnamed
    ContractSupplement --> SupplementDocument : unnamed
    TransactionSupplement_v4 --> SalesQuote : unnamed
    SalesQuote --> AccountTransaction_v2 : unnamed
    ContractSupplement --> SupplementTypeSpecificData_v4 : unnamed
    TransactionSupplement_v4 --> SupplementTypeSpecificData_v4 : unnamed
    CollectionToolServiceRequest --> SupplementTypeSpecificData_v4 : unnamed
```
