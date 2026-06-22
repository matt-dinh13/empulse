# REST API

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Account Pricing/REST API
- **Diagram ID**: 138710
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class ADD_ContractBillingDayDto["{ADD}ContractBillingDayDto"]
    class ADD_Billing_day["{ADD}Billing day"]
    class ContractClosingDayDto["ContractClosingDayDto"]
    class Closing_day["Closing day"]
    class Account_Pricing["Account Pricing"]
    Closing_day --> Account_Pricing : /calculators/contract/billing-day
    Closing_day ..> ContractClosingDayDto : unnamed
    Account_Pricing --> ADD_Billing_day : /calculators/contract/billing-day/calculator
    ADD_Billing_day ..> ADD_ContractBillingDayDto : unnamed
```
