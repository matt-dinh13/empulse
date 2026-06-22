# CLM-952 (CBL-1934) Change Due Date Request Service - Add Minimum Days field

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-952 (CBL-1934) Change Due Date Request Service - Add Minimum Days field
- **Diagram ID**: 103470
- **Elements**: 5
- **Connectors**: 4

```mermaid
graph TD
    Business_Rules_Business_Rules["Business Rules : Business Rules"]
    Use_Case_Change_due_date_request_creation_and_processing["Use Case : Change due date request creation and processing"]
    If_no_Minimal_Days_value_is_entered_functionality_behaviour_["If  no 'Minimal Days' value is entered, functionality behaviour stays the same."]
    REQ_1_System_checks_for_minimal_count_of_days_between_the_la["REQ#1 - System checks for minimal count of days between the last original due date and newly chosen installment due date on CHDDR service usage."]
    Change_Due_Date_Request_Service_Add_Minimum_Days_field["Change Due Date Request Service - Add Minimum Days field"]
    REQ_1_System_checks_for_minimal_count_of_days_between_the_la -->|unnamed| Change_Due_Date_Request_Service_Add_Minimum_Days_field
    If_no_Minimal_Days_value_is_entered_functionality_behaviour_ -->|unnamed| REQ_1_System_checks_for_minimal_count_of_days_between_the_la
    Use_Case_Change_due_date_request_creation_and_processing -->|unnamed| REQ_1_System_checks_for_minimal_count_of_days_between_the_la
    Business_Rules_Business_Rules -->|unnamed| REQ_1_System_checks_for_minimal_count_of_days_between_the_la
```
