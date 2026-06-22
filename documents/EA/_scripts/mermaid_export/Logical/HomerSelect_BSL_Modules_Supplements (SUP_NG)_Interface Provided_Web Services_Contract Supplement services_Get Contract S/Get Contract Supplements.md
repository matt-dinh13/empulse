# Get Contract Supplements

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Interface Provided/Web Services/Contract Supplement services/Get Contract Supplements
- **Diagram ID**: 163448
- **Elements**: 17
- **Connectors**: 18

```mermaid
classDiagram
    class RequestSourceId["RequestSourceId"]
    class SalesQuoteItem["SalesQuoteItem"]
    class TransactionChangeRequest["TransactionChangeRequest"]
    class SalesQuoteApplied["SalesQuoteApplied"]
    class AccountTransaction["AccountTransaction"]
    class AccountTransactionSupplement["AccountTransactionSupplement"]
    class MOD_13_110_Find_Contract_Supplements["{MOD}13.110 Find Contract Supplements"]
    class ContractSupplements["ContractSupplements"]
    class FindContractSupplementsRequest["FindContractSupplementsRequest"]
    class ADD_13_100_Get_Contract_Supplement["{ADD}13.100 Get Contract Supplement"]
    class SupplementDocument["SupplementDocument"]
    class CustomData["CustomData"]
    class RelatedSubject["RelatedSubject"]
    class ContractSupplementStatusTransition["ContractSupplementStatusTransition"]
    class ContractSupplement["ContractSupplement"]
    class GetContractSupplementRequest["GetContractSupplementRequest"]
    class ContractSupplements["ContractSupplements"]
    ContractSupplement --> SupplementDocument : unnamed
    SalesQuoteApplied --> SalesQuoteItem : unnamed
    AccountTransactionSupplement --> TransactionChangeRequest : unnamed
    AccountTransactionSupplement --> SalesQuoteApplied : unnamed
    SalesQuoteItem --> AccountTransaction : unnamed
    ContractSupplement --> AccountTransactionSupplement : unnamed
    ContractSupplement --> RequestSourceId : unnamed
    ContractSupplement --> CustomData : unnamed
    ContractSupplement --> RelatedSubject : unnamed
    ContractSupplement --> ContractSupplementStatusTransition : unnamed
    ContractSupplements --> ContractSupplement : unnamed
    ContractSupplements ..> ADD_13_100_Get_Contract_Supplement : unnamed
    ContractSupplements --> FindContractSupplementsRequest : unnamed
    ContractSupplements --> ContractSupplement : unnamed
    ContractSupplements ..> MOD_13_110_Find_Contract_Supplements : unnamed
    ContractSupplements --> GetContractSupplementRequest : unnamed
    ContractSupplements --> ContractSupplements : unnamed
    ContractSupplements --> ContractSupplement : unnamed
```
