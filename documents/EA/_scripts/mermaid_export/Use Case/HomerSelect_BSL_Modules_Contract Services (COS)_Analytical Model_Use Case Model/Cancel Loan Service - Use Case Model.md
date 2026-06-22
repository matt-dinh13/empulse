# Cancel Loan Service - Use Case Model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Contract Services (COS)/Analytical Model/Use Case Model
- **Diagram ID**: 163698
- **Elements**: 12
- **Connectors**: 9

```mermaid
graph LR
    Process_Contract_Service_operation_response_Use_Case_Model["Process Contract Service operation response - Use Case Model"]
    AM[/"AM"/]
    n_08_216_Process_Cancel_Transaction_response_COS(("08.216 Process Cancel Transaction response (COS)"))
    ADD_Cancel_authorized_transactions_in_AM_via_COS["{ADD}Cancel authorized transactions in AM via COS"]
    ADD_Add_Event_into_Contract_Business_Events_BSL["{ADD}Add Event into Contract Business Events (BSL)"]
    ADD_Check_Contract_status_for_Contract_Service_cancellation_["{ADD}Check Contract status for Contract Service cancellation and termination (COS)"]
    Get_Service_definition_from_Services_COS["Get Service definition from Services (COS)"]
    Get_Service_definition_from_New_Service_Catalogue_COS["Get Service definition from New Service Catalogue (COS)"]
    Contract_Services_Cancel_Contract_Services_method_COS["Contract Services : Cancel Contract Services method (COS)"]
    VAS_Deal[/"VAS Deal"/]
    External_System[/"External System"/]
    n_08_050_Cancel_Loan_Service_method_COS(("08.050 Cancel Loan Service method (COS)"))
    Contract_Services_Cancel_Contract_Services_method_COS -->|unnamed| n_08_050_Cancel_Loan_Service_method_COS
    VAS_Deal --- n_08_050_Cancel_Loan_Service_method_COS
    External_System --- n_08_050_Cancel_Loan_Service_method_COS
    n_08_050_Cancel_Loan_Service_method_COS -->|unnamed| Get_Service_definition_from_New_Service_Catalogue_COS
    n_08_050_Cancel_Loan_Service_method_COS -->|unnamed| Get_Service_definition_from_Services_COS
    n_08_050_Cancel_Loan_Service_method_COS -->|unnamed| ADD_Check_Contract_status_for_Contract_Service_cancellation_
    n_08_050_Cancel_Loan_Service_method_COS -->|unnamed| ADD_Add_Event_into_Contract_Business_Events_BSL
    n_08_050_Cancel_Loan_Service_method_COS -->|unnamed| ADD_Cancel_authorized_transactions_in_AM_via_COS
    AM --- n_08_216_Process_Cancel_Transaction_response_COS
```
