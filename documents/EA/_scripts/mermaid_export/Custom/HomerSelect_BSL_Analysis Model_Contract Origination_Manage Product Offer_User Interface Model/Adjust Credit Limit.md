# Adjust Credit Limit

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model
- **Diagram ID**: 144563
- **Elements**: 9
- **Connectors**: 4

```mermaid
graph TD
    Adjusted_credit_limit["Adjusted credit limit"]
    Interval_of_credit_limit_for_adjustment["Interval of credit limit for adjustment"]
    UseCase_Model_Offer_detail["UseCase Model : Offer detail"]
    Cancel["Cancel"]
    Recalculate_offer["Recalculate offer"]
    Maximal_credit_limit["Maximal credit limit"]
    Minimal_credit_limit["Minimal credit limit "]
    n_01_156_Adjust_credit_limit["01.156 Adjust credit limit"]
    Adjust_credit_limit["Adjust credit limit"]
    Adjust_credit_limit -->|unnamed| n_01_156_Adjust_credit_limit
    Minimal_credit_limit -->|unnamed| Interval_of_credit_limit_for_adjustment
    Maximal_credit_limit -->|unnamed| Interval_of_credit_limit_for_adjustment
    UseCase_Model_Offer_detail -->|unnamed| n_01_156_Adjust_credit_limit
```
