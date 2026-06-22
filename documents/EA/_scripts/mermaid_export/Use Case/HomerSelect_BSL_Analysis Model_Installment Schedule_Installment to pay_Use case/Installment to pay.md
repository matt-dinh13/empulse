# Installment to pay

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Installment to pay/Use case
- **Diagram ID**: 157650
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph LR
    Installment_to_pay_calculation["Installment to pay calculation"]
    External_system[/"External system"/]
    Calculate_Installment_to_pay(("Calculate Installment to pay"))
    Calculate_Installment_to_pay -->|unnamed| Installment_to_pay_calculation
    External_system -->|unnamed| Calculate_Installment_to_pay
```
