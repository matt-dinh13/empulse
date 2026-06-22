# Authorize Contract Supplement Transactions

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Interface Provided/Web Services/Contract Supplement services/Authorize Contract Supplement Transactions
- **Diagram ID**: 163986
- **Elements**: 3
- **Connectors**: 2

```mermaid
classDiagram
    class ADD_13_025_Authorize_transactions_in_Contract_Supplement["{ADD}13.025 Authorize transactions in Contract Supplement"]
    class AuthorizeContractSupplementTransactions["AuthorizeContractSupplementTransactions"]
    class ContractSupplements["ContractSupplements"]
    ContractSupplements --> AuthorizeContractSupplementTransactions : unnamed
    ContractSupplements ..> ADD_13_025_Authorize_transactions_in_Contract_Supplement : unnamed
```
