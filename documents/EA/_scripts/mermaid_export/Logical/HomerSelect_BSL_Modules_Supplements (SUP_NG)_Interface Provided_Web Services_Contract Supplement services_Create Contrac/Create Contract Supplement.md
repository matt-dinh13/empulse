# Create Contract Supplement

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Interface Provided/Web Services/Contract Supplement services/Create Contract Supplement
- **Diagram ID**: 163446
- **Elements**: 15
- **Connectors**: 17

```mermaid
classDiagram
    class SalesQuoteItem["SalesQuoteItem"]
    class RequestSourceId["RequestSourceId"]
    class TransactionChangeRequest["TransactionChangeRequest"]
    class SalesQuoteApplied["SalesQuoteApplied"]
    class AccountTransaction["AccountTransaction"]
    class AccountTransactionSupplement["AccountTransactionSupplement"]
    class SupplementTypeSpecificData["SupplementTypeSpecificData"]
    class SupplementDocument["SupplementDocument"]
    class CustomData["CustomData"]
    class RelatedSubject["RelatedSubject"]
    class ContractSupplementStatusTransition["ContractSupplementStatusTransition"]
    class n_13_010_Create_Contract_Supplement["13.010 Create Contract Supplement"]
    class ContractSupplement["ContractSupplement"]
    class CreateContractSupplementRequest["CreateContractSupplementRequest"]
    class ContractSupplements["ContractSupplements"]
    CreateContractSupplementRequest --> RequestSourceId : unnamed
    CreateContractSupplementRequest --> SupplementTypeSpecificData : unnamed
    ContractSupplement --> RequestSourceId : unnamed
    ContractSupplement --> CustomData : unnamed
    ContractSupplement --> RelatedSubject : unnamed
    SalesQuoteItem --> AccountTransaction : unnamed
    SalesQuoteApplied --> SalesQuoteItem : unnamed
    ContractSupplement --> SupplementDocument : unnamed
    ContractSupplement --> ContractSupplementStatusTransition : unnamed
    ContractSupplement --> AccountTransactionSupplement : unnamed
    AccountTransactionSupplement --> TransactionChangeRequest : unnamed
    AccountTransactionSupplement --> SalesQuoteApplied : unnamed
    ContractSupplements --> ContractSupplement : unnamed
    ContractSupplements ..> n_13_010_Create_Contract_Supplement : unnamed
    ContractSupplements --> ContractSupplement : unnamed
    ContractSupplements --> CreateContractSupplementRequest : unnamed
    ContractSupplements --> ContractSupplement : unnamed
```
