# Search criteria - PAID

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Browsing Outgoing Payments/User Interface model
- **Diagram ID**: 129453
- **Elements**: 11
- **Connectors**: 5

```mermaid
graph TD
    Is_Online_disbursement["Is Online disbursement"]
    Transaction_date_from["Transaction date from"]
    Transaction_date_to["Transaction date to"]
    Validation_and_Adjustment_of_Interval_in_Days["Validation and Adjustment of Interval in Days"]
    Show_all_payment_types["Show all payment types"]
    Payment_type["Payment type"]
    Evaluation_of_Outgoing_Payment_Search_criteria_PAID["Evaluation of Outgoing Payment Search criteria - PAID"]
    Rules_for_Entering_Outgoing_Payment_Search_criteria_PAID["Rules for Entering Outgoing Payment Search criteria - PAID"]
    Evaluation_of_Outgoing_Payment_Search_criteria["Evaluation of Outgoing Payment Search criteria"]
    Rules_for_Entering_Outgoing_Payment_Search_criteria["Rules for Entering Outgoing Payment Search criteria"]
    Search_criteria_PAID["Search criteria - PAID"]
    Search_criteria_PAID -->|unnamed| Rules_for_Entering_Outgoing_Payment_Search_criteria_PAID
    Search_criteria_PAID -->|unnamed| Evaluation_of_Outgoing_Payment_Search_criteria_PAID
    Rules_for_Entering_Outgoing_Payment_Search_criteria_PAID -->|unnamed| Validation_and_Adjustment_of_Interval_in_Days
    Rules_for_Entering_Outgoing_Payment_Search_criteria_PAID -->|unnamed| Rules_for_Entering_Outgoing_Payment_Search_criteria
    Evaluation_of_Outgoing_Payment_Search_criteria_PAID -->|unnamed| Evaluation_of_Outgoing_Payment_Search_criteria
```
