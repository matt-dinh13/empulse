# Business Rules

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Loan Restructuring/Business Rules
- **Diagram ID**: 152672
- **Elements**: 4
- **Connectors**: 2

```mermaid
graph TD
    ADD_Check_ContractLRESRequest_input_parameters["{ADD}Check ContractLRESRequest input parameters"]
    Financial_amount_0["Financial amount › 0"]
    Mandatory["Mandatory"]
    Preferred_monthly_installment_validation["Preferred monthly installment validation"]
    Preferred_monthly_installment_validation -->|unnamed| Mandatory
    Preferred_monthly_installment_validation -->|unnamed| Financial_amount_0
```
