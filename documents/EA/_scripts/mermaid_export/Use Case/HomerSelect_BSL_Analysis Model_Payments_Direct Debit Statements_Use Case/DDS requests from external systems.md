# DDS requests from external systems

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Use Case
- **Diagram ID**: 162816
- **Elements**: 17
- **Connectors**: 16

```mermaid
graph LR
    n_05_263_Get_DDS_export_status(("05.263 Get DDS export status"))
    CaBus_AM[/"CaBus-AM"/]
    DDS_Consumed_JMS_messages_DDS_request["DDS : Consumed JMS messages - DDS request"]
    n_05_273_Process_DDS_requests_message(("05.273 Process DDS requests message"))
    n_05_271_Process_DDS_request(("05.271 Process DDS request"))
    MOD_Evaluate_DDM_eligibility_for_DDS_generation["{MOD}Evaluate DDM eligibility for DDS generation"]
    Get_first_working_date_after_passed_date["Get first working date after passed date"]
    Logical_Data_Model_Direct_Debit_Statements["Logical Data Model : Direct Debit Statements"]
    DDS_Number_of_days_before_the_due_date_determination["DDS - Number of days before the due date determination"]
    Time[/"Time"/]
    External_system[/"External system"/]
    Calculate_DDS_amount_from_DD_request["Calculate DDS amount from DD request"]
    DDS_request_validation_rules["DDS request validation rules"]
    Use_case_model_Data_prepared_notification_UC_model["Use case model : Data prepared notification - UC model"]
    n_01_522_Get_prepared_data_from_external_system(("01.522 Get prepared data from external system"))
    n_05_270_Process_DDS_requests_file(("05.270 Process DDS requests file"))
    DDS_Requests_DDS_Requests_file_structure["DDS Requests :DDS Requests - file structure"]
    DDS_Number_of_days_before_the_due_date_determination -->|unnamed| Get_first_working_date_after_passed_date
    n_05_273_Process_DDS_requests_message -->|unnamed| DDS_Consumed_JMS_messages_DDS_request
    n_05_273_Process_DDS_requests_message -.->|include| n_05_271_Process_DDS_request
    n_05_271_Process_DDS_request -->|unnamed| MOD_Evaluate_DDM_eligibility_for_DDS_generation
    n_05_271_Process_DDS_request -->|unnamed| Calculate_DDS_amount_from_DD_request
    n_05_271_Process_DDS_request -->|unnamed| DDS_request_validation_rules
    n_05_271_Process_DDS_request -->|unnamed| Get_first_working_date_after_passed_date
    DDS_Requests_DDS_Requests_file_structure -->|unnamed| n_05_270_Process_DDS_requests_file
    n_01_522_Get_prepared_data_from_external_system -->|unnamed| Use_case_model_Data_prepared_notification_UC_model
    n_01_522_Get_prepared_data_from_external_system -->|unnamed| n_05_270_Process_DDS_requests_file
    n_05_270_Process_DDS_requests_file -.->|include| n_05_271_Process_DDS_request
    n_05_271_Process_DDS_request -->|unnamed| DDS_Number_of_days_before_the_due_date_determination
    External_system --> n_01_522_Get_prepared_data_from_external_system
    Time --> n_05_270_Process_DDS_requests_file
    CaBus_AM --> n_05_273_Process_DDS_requests_message
    External_system --- n_05_263_Get_DDS_export_status
```
