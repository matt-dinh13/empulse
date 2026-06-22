# Search criteria - POS

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Browsing Outgoing Payments/User Interface model
- **Diagram ID**: 129454
- **Elements**: 12
- **Connectors**: 5

```mermaid
graph TD
    ADD_Ready_for_disbursement_to["{ADD}Ready for disbursement to"]
    ADD_Ready_for_disbursment_from["{ADD}Ready for disbursment from"]
    Validation_and_Adjustment_of_Interval_in_Days["Validation and Adjustment of Interval in Days"]
    OBS_order_number["OBS order number"]
    Created_from["Created from"]
    Created_to["Created to"]
    Addressed_to_Salesroom["Addressed to Salesroom"]
    MOD_Evaluation_of_Outgoing_Payment_Search_criteria_POS["{MOD}Evaluation of Outgoing Payment Search criteria - POS"]
    MOD_Rules_for_Entering_Outgoing_Payment_Search_criteria_POS["{MOD}Rules for Entering Outgoing Payment Search criteria - POS"]
    Evaluation_of_Outgoing_Payment_Search_criteria["Evaluation of Outgoing Payment Search criteria"]
    Rules_for_Entering_Outgoing_Payment_Search_criteria["Rules for Entering Outgoing Payment Search criteria"]
    Search_criteria_POS["Search criteria - POS"]
    Search_criteria_POS -->|unnamed| MOD_Evaluation_of_Outgoing_Payment_Search_criteria_POS
    Search_criteria_POS -->|unnamed| MOD_Rules_for_Entering_Outgoing_Payment_Search_criteria_POS
    MOD_Rules_for_Entering_Outgoing_Payment_Search_criteria_POS -->|unnamed| Validation_and_Adjustment_of_Interval_in_Days
    MOD_Rules_for_Entering_Outgoing_Payment_Search_criteria_POS -->|unnamed| Rules_for_Entering_Outgoing_Payment_Search_criteria
    MOD_Evaluation_of_Outgoing_Payment_Search_criteria_POS -->|unnamed| Evaluation_of_Outgoing_Payment_Search_criteria
```
