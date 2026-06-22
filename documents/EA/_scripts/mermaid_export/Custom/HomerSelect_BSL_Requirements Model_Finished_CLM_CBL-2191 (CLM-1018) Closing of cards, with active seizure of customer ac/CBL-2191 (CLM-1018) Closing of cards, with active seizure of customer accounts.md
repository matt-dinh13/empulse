# CBL-2191 (CLM-1018) Closing of cards, with active seizure of customer accounts

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-2191 (CLM-1018) Closing of cards, with active seizure of customer accounts
- **Diagram ID**: 101257
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph TD
    Logical_data_model_Business_event_Logical_data_model["Logical data model : Business event - Logical data model"]
    Use_Case_Model_Processing_a_notification_about_credit_accoun["Use Case Model : Processing a notification about credit account closure"]
    Closing_of_cards_with_active_seizure_of_customer_accounts["Closing of cards, with active seizure of customer accounts"]
    System_creates_business_event_after_receiving_notification_f["System creates business event after receiving notification from Account Management that account is seized (arrest) and can not be closed."]
    Logical_data_model_Business_event_Logical_data_model -->|unnamed| System_creates_business_event_after_receiving_notification_f
    Use_Case_Model_Processing_a_notification_about_credit_accoun -->|unnamed| System_creates_business_event_after_receiving_notification_f
    System_creates_business_event_after_receiving_notification_f -->|unnamed| Closing_of_cards_with_active_seizure_of_customer_accounts
```
