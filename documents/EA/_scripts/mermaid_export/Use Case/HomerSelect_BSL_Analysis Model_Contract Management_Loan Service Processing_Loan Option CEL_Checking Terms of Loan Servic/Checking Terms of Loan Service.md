# Checking Terms of Loan Service

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Checking Terms of Loan Service/Use Case Model
- **Diagram ID**: 164340
- **Elements**: 17
- **Connectors**: 18

```mermaid
graph LR
    MOD_03_080_Add_installment(("{MOD}03.080 Add installment"))
    MOD_Algorithm_Calculate_tariff_item_amount["{MOD}Algorithm: Calculate tariff item amount"]
    n_08_407_Evaluate_CheckTL_fulfillment_common(("08.407 Evaluate CheckTL fulfillment common"))
    Check_charged_penalty_is_not_paid["Check charged penalty is not paid"]
    Check_if_Installment_Schedule_is_Closed["Check if Installment Schedule is Closed"]
    Pause_bonus_service_evaluation["Pause bonus service evaluation"]
    Logical_Data_Model_Checking_Terms_of_Loan_Service_Request["Logical Data Model : Checking Terms of Loan Service Request"]
    Determine_penalty_due_date_for_CHECKTL_service["Determine penalty due date for CHECKTL service"]
    Create_CHECKTL_service_request["Create CHECKTL service request"]
    Get_document_to_be_checked_by_CHECKTL_service["Get document to be checked by CHECKTL service"]
    Check_if_penalty_is_charged_to_CHECKTL_service_request["Check if penalty is charged to CHECKTL service request"]
    Time[/"Time"/]
    Evaluate_Checking_Terms_of_Loan_service_job["Evaluate Checking Terms of Loan service job"]
    n_08_409_Evaluate_Checking_Terms_of_Loan_Service(("08.409 Evaluate Checking Terms of Loan Service"))
    User_Interface_Model_Set_terms_of_loan_fulfillment["User Interface Model : Set terms of loan fulfillment"]
    User[/"User"/]
    n_08_408_Set_terms_of_loan_fulfillment(("08.408 Set terms of loan fulfillment"))
    n_08_409_Evaluate_Checking_Terms_of_Loan_Service -->|unnamed| Create_CHECKTL_service_request
    n_08_409_Evaluate_Checking_Terms_of_Loan_Service -->|unnamed| MOD_Algorithm_Calculate_tariff_item_amount
    n_08_409_Evaluate_Checking_Terms_of_Loan_Service -.->|include| n_08_407_Evaluate_CheckTL_fulfillment_common
    n_08_408_Set_terms_of_loan_fulfillment -.->|include| n_08_407_Evaluate_CheckTL_fulfillment_common
    n_08_407_Evaluate_CheckTL_fulfillment_common -->|unnamed| Check_charged_penalty_is_not_paid
    n_08_409_Evaluate_Checking_Terms_of_Loan_Service -->|unnamed| Check_if_Installment_Schedule_is_Closed
    n_08_407_Evaluate_CheckTL_fulfillment_common -->|unnamed| Pause_bonus_service_evaluation
    n_08_409_Evaluate_Checking_Terms_of_Loan_Service -->|unnamed| Pause_bonus_service_evaluation
    n_08_409_Evaluate_Checking_Terms_of_Loan_Service -->|unnamed| MOD_03_080_Add_installment
    n_08_408_Set_terms_of_loan_fulfillment -->|unnamed| Create_CHECKTL_service_request
    User_Interface_Model_Set_terms_of_loan_fulfillment -->|unnamed| n_08_408_Set_terms_of_loan_fulfillment
    n_08_408_Set_terms_of_loan_fulfillment -->|unnamed| Get_document_to_be_checked_by_CHECKTL_service
    n_08_407_Evaluate_CheckTL_fulfillment_common -->|unnamed| Check_if_penalty_is_charged_to_CHECKTL_service_request
    n_08_408_Set_terms_of_loan_fulfillment -->|unnamed| Check_if_penalty_is_charged_to_CHECKTL_service_request
    n_08_409_Evaluate_Checking_Terms_of_Loan_Service -->|unnamed| Evaluate_Checking_Terms_of_Loan_service_job
    n_08_409_Evaluate_Checking_Terms_of_Loan_Service -->|unnamed| Determine_penalty_due_date_for_CHECKTL_service
    User --> n_08_408_Set_terms_of_loan_fulfillment
    Time --> n_08_409_Evaluate_Checking_Terms_of_Loan_Service
```
