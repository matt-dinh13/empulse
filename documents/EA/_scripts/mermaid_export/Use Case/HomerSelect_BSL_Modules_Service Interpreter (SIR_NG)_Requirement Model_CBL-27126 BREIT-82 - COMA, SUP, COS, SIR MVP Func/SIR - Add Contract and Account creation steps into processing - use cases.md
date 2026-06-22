# SIR - Add Contract and Account creation steps into processing - use cases

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Requirement Model/CBL-27126 BREIT-82 - COMA, SUP, COS, SIR MVP Functionalities
- **Diagram ID**: 161633
- **Elements**: 13
- **Connectors**: 14

```mermaid
graph LR
    SIR_Get_Service_definitions_from_PRC_Service_Catalogue["SIR - Get Service definitions from PRC Service Catalogue"]
    SIR_Get_Sales_Quotes_by_codes_from_SQS["SIR - Get Sales Quotes by codes from SQS"]
    AM_Account[/"AM.Account"/]
    MOD_16_040_Process_Account_Event_notifications(("{MOD}16.040 Process Account Event notifications"))
    External_System[/"External System"/]
    MOD_16_010_Request_for_a_loan_service(("{MOD}16.010 Request for a loan service"))
    MOD_SIR_Create_Contract_Service_in_COS["{MOD}SIR - Create Contract Service in COS"]
    ADD_16_022_Process_Sales_Quotes_for_Transaction(("{ADD}16.022 Process Sales Quotes for Transaction"))
    MOD_Determine_the_Loan_Process_type_based_on_the_provided_Sa["{MOD}Determine the Loan Process type based on the provided Sales Quotes"]
    Create_Contract_Supplement_in_SUP["Create Contract Supplement in SUP"]
    Create_Contract_in_COMA["Create Contract in COMA"]
    MOD_16_020_Process_request_for_a_loan(("{MOD}16.020 Process request for a loan"))
    Get_Supplement_definition_by_process_type_from_SUP["Get Supplement definition by process type from SUP"]
    ADD_16_022_Process_Sales_Quotes_for_Transaction -->|unnamed| MOD_Determine_the_Loan_Process_type_based_on_the_provided_Sa
    ADD_16_022_Process_Sales_Quotes_for_Transaction -->|unnamed| Create_Contract_Supplement_in_SUP
    ADD_16_022_Process_Sales_Quotes_for_Transaction -->|unnamed| Get_Supplement_definition_by_process_type_from_SUP
    MOD_16_040_Process_Account_Event_notifications -->|unnamed| SIR_Get_Service_definitions_from_PRC_Service_Catalogue
    MOD_16_040_Process_Account_Event_notifications -->|unnamed| SIR_Get_Sales_Quotes_by_codes_from_SQS
    MOD_16_040_Process_Account_Event_notifications -->|unnamed| MOD_SIR_Create_Contract_Service_in_COS
    MOD_16_010_Request_for_a_loan_service -->|unnamed| MOD_16_020_Process_request_for_a_loan
    MOD_16_020_Process_request_for_a_loan -->|unnamed| Create_Contract_in_COMA
    MOD_16_020_Process_request_for_a_loan -->|unnamed| MOD_SIR_Create_Contract_Service_in_COS
    MOD_16_020_Process_request_for_a_loan -->|unnamed| Get_Supplement_definition_by_process_type_from_SUP
    MOD_16_020_Process_request_for_a_loan -->|unnamed| SIR_Get_Service_definitions_from_PRC_Service_Catalogue
    MOD_16_020_Process_request_for_a_loan -->|unnamed| Create_Contract_Supplement_in_SUP
    External_System --> MOD_16_010_Request_for_a_loan_service
    AM_Account --- MOD_16_040_Process_Account_Event_notifications
```
