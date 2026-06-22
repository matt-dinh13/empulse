# Add Sales Quote to Contract Supplement

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Interface Provided/Web Services/Contract Supplement services/Add Sales Quote to Contract Supplement
- **Diagram ID**: 163452
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class ContractService["ContractService"]
    class n_13_020_Add_Sales_Quote_to_Contract_Supplement["13.020 Add Sales Quote to Contract Supplement"]
    class AddSalesQuoteRequest["AddSalesQuoteRequest"]
    class ContractSupplements["ContractSupplements"]
    ContractSupplements --> AddSalesQuoteRequest : unnamed
    ContractSupplements ..> n_13_020_Add_Sales_Quote_to_Contract_Supplement : unnamed
    AddSalesQuoteRequest --> ContractService : unnamed
```
