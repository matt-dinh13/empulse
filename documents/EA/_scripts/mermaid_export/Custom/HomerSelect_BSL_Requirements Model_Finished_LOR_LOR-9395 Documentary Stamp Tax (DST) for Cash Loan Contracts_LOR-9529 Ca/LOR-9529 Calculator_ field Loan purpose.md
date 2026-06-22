# LOR-9529 Calculator: field Loan purpose

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9395 Documentary Stamp Tax (DST) for Cash Loan Contracts/LOR-9529 Calculator: field Loan purpose
- **Diagram ID**: 153113
- **Elements**: 7
- **Connectors**: 2

```mermaid
graph TD
    Mandatory_when_visible["Mandatory when visible"]
    MOD_Calculation_of_customer_offer["{MOD}Calculation of customer offer"]
    Loan_purpose["Loan purpose"]
    Structured_parameters["Structured parameters"]
    MOD_Switches_for_LOR_tasks["{MOD}Switches for LOR tasks"]
    LOR_9529_Calculator_field_Loan_purpose["LOR-9529 Calculator: field Loan purpose"]
    LOR_9395_Documentary_Stamp_Tax_DST_for_Cash_Loan_Contracts["LOR-9395 Documentary Stamp Tax (DST) for Cash Loan Contracts"]
    LOR_9529_Calculator_field_Loan_purpose -->|unnamed| LOR_9395_Documentary_Stamp_Tax_DST_for_Cash_Loan_Contracts
    Loan_purpose -->|unnamed| Mandatory_when_visible
```
