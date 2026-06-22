# Search criteria - CANCELED

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Browsing Outgoing Payments/User Interface model
- **Diagram ID**: 129460
- **Elements**: 10
- **Connectors**: 5

```mermaid
graph TD
    ADD_Ready_for_disbursement_to["{ADD}Ready for disbursement to"]
    ADD_Ready_for_disbursment_from["{ADD}Ready for disbursment from"]
    Validation_and_Adjustment_of_Interval_in_Days["Validation and Adjustment of Interval in Days"]
    Created_from["Created from"]
    Created_to["Created to"]
    MOD_Evaluation_of_Outgoing_Payment_Search_criteria_CANCELED["{MOD}Evaluation of Outgoing Payment Search criteria - CANCELED"]
    MOD_Rules_for_Entering_Outgoing_Payment_Search_criteria_CANC["{MOD}Rules for Entering Outgoing Payment Search criteria - CANCELED"]
    Evaluation_of_Outgoing_Payment_Search_criteria["Evaluation of Outgoing Payment Search criteria"]
    Rules_for_Entering_Outgoing_Payment_Search_criteria["Rules for Entering Outgoing Payment Search criteria"]
    Search_criteria_CANCELED["Search criteria - CANCELED"]
    Search_criteria_CANCELED -->|unnamed| MOD_Rules_for_Entering_Outgoing_Payment_Search_criteria_CANC
    Search_criteria_CANCELED -->|unnamed| MOD_Evaluation_of_Outgoing_Payment_Search_criteria_CANCELED
    MOD_Rules_for_Entering_Outgoing_Payment_Search_criteria_CANC -->|unnamed| Rules_for_Entering_Outgoing_Payment_Search_criteria
    MOD_Rules_for_Entering_Outgoing_Payment_Search_criteria_CANC -->|unnamed| Validation_and_Adjustment_of_Interval_in_Days
    MOD_Evaluation_of_Outgoing_Payment_Search_criteria_CANCELED -->|unnamed| Evaluation_of_Outgoing_Payment_Search_criteria
```
