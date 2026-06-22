# Collection tool requests evaluation

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Collection tools management/Use case model
- **Diagram ID**: 156555
- **Elements**: 12
- **Connectors**: 8

```mermaid
graph LR
    Change_due_date_request_creation_and_processing["Change due date request creation and processing"]
    n_08_063_Process_request_for_change_due_date(("08.063 Process request for change due date"))
    Change_due_date_request_creation_and_processing["Change due date request creation and processing"]
    MOD_08_406_Process_request_for_loan_restructuring(("{MOD}08.406 Process request for loan restructuring"))
    Loan_restructuring_request_creation["Loan restructuring request creation"]
    Time[/"Time"/]
    Payment_holiday_request_creation["Payment holiday request creation"]
    MOD_08_362_Process_payment_holiday_request(("{MOD}08.362 Process payment holiday request"))
    Contract_supplement_registration_process["Contract supplement registration process"]
    n_08_920_Evaluate_collection_tool_service_request(("08.920 Evaluate collection tool service request"))
    Payment_holiday_processing["Payment holiday processing"]
    Loan_restructuring_processing["Loan restructuring processing"]
    Loan_restructuring_request_creation -->|unnamed| n_08_920_Evaluate_collection_tool_service_request
    Contract_supplement_registration_process -->|unnamed| n_08_920_Evaluate_collection_tool_service_request
    Change_due_date_request_creation_and_processing -->|unnamed| n_08_920_Evaluate_collection_tool_service_request
    Payment_holiday_request_creation -->|unnamed| n_08_920_Evaluate_collection_tool_service_request
    n_08_920_Evaluate_collection_tool_service_request -.->|include| MOD_08_362_Process_payment_holiday_request
    n_08_920_Evaluate_collection_tool_service_request -.->|include| MOD_08_406_Process_request_for_loan_restructuring
    n_08_920_Evaluate_collection_tool_service_request -.->|include| n_08_063_Process_request_for_change_due_date
    Time --> n_08_920_Evaluate_collection_tool_service_request
```
