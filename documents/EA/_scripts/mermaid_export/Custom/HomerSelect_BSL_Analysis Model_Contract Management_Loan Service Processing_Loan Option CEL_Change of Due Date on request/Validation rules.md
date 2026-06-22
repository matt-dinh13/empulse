# Validation rules

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date on request/Validation rules
- **Diagram ID**: 73106
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph TD
    Financial_amount_0["Financial amount ›= 0"]
    Numeric_string["Numeric string"]
    Mandatory["Mandatory"]
    ADD_New_fee_amount_for_CHDD["{ADD}New fee amount for CHDD"]
    ADD_New_fee_amount_for_CHDD -->|unnamed| Financial_amount_0
    ADD_New_fee_amount_for_CHDD -->|unnamed| Numeric_string
    ADD_New_fee_amount_for_CHDD -->|unnamed| Mandatory
```
