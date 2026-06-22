# Search criteria - BLOCKED

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Browsing Outgoing Payments/User Interface model
- **Diagram ID**: 129456
- **Elements**: 10
- **Connectors**: 5

```mermaid
graph TD
    ADD_Ready_for_disbursement_to["{ADD}Ready for disbursement to"]
    ADD_Ready_for_disbursment_from["{ADD}Ready for disbursment from"]
    Validation_and_Adjustment_of_Interval_in_Days["Validation and Adjustment of Interval in Days"]
    Created_from["Created from"]
    Created_to["Created to"]
    MOD_Rules_for_Entering_Outgoing_Payment_Search_criteria_BLOC["{MOD}Rules for Entering Outgoing Payment Search criteria - BLOCKED"]
    MOD_Evaluation_of_Outgoing_Payment_Search_criteria_BLOCKED["{MOD}Evaluation of Outgoing Payment Search criteria - BLOCKED"]
    Evaluation_of_Outgoing_Payment_Search_criteria["Evaluation of Outgoing Payment Search criteria"]
    Rules_for_Entering_Outgoing_Payment_Search_criteria["Rules for Entering Outgoing Payment Search criteria"]
    Search_criteria_BLOCKED["Search criteria - BLOCKED"]
    Search_criteria_BLOCKED -->|unnamed| MOD_Evaluation_of_Outgoing_Payment_Search_criteria_BLOCKED
    Search_criteria_BLOCKED -->|unnamed| MOD_Rules_for_Entering_Outgoing_Payment_Search_criteria_BLOC
    MOD_Evaluation_of_Outgoing_Payment_Search_criteria_BLOCKED -->|unnamed| Evaluation_of_Outgoing_Payment_Search_criteria
    MOD_Rules_for_Entering_Outgoing_Payment_Search_criteria_BLOC -->|unnamed| Validation_and_Adjustment_of_Interval_in_Days
    MOD_Rules_for_Entering_Outgoing_Payment_Search_criteria_BLOC -->|unnamed| Rules_for_Entering_Outgoing_Payment_Search_criteria
```
