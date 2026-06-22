# SIR - Process Sales Quotes for Transaction

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Requirement Model/CBL-28824 DOBA-76 Contract management - SIR, SUP, COMA, COS
- **Diagram ID**: 163690
- **Elements**: 14
- **Connectors**: 17

```mermaid
graph LR
    MOD_SIR_Get_Contract_Supplements_by_Contract_from_SUP["{MOD}SIR - Get Contract Supplements by Contract from SUP"]
    MOD_Get_Contract_Service_by_Contract_code_from_COS["{MOD}Get Contract Service by Contract code from COS"]
    SIR_Get_Service_definitions_from_PRC_Service_Catalogue["SIR - Get Service definitions from PRC Service Catalogue"]
    Create_Contract_Supplement_document_in_SUP["Create Contract Supplement document in SUP"]
    External_System[/"External System"/]
    MOD_16_010_Request_for_a_loan_service(("{MOD}16.010 Request for a loan service"))
    Get_Supplement_definition_by_process_type_from_SUP["Get Supplement definition by process type from SUP"]
    Create_Contract_Supplement_in_SUP["Create Contract Supplement in SUP"]
    MOD_Determine_the_Loan_Process_type_based_on_the_provided_Sa["{MOD}Determine the Loan Process type based on the provided Sales Quotes"]
    MOD_SIR_Adding_Sales_Quote_to_Contract_Supplement_in_SUP["{MOD}SIR - Adding Sales Quote to Contract Supplement in SUP"]
    AM_Account[/"AM.Account"/]
    MOD_16_040_Process_Account_Event_notifications(("{MOD}16.040 Process Account Event notifications"))
    ADD_16_022_Process_Sales_Quotes_for_Transaction(("{ADD}16.022 Process Sales Quotes for Transaction"))
    MOD_16_020_Process_request_for_a_loan(("{MOD}16.020 Process request for a loan"))
    External_System --> MOD_16_010_Request_for_a_loan_service
    AM_Account --- MOD_16_040_Process_Account_Event_notifications
    MOD_16_040_Process_Account_Event_notifications -->|unnamed| MOD_SIR_Adding_Sales_Quote_to_Contract_Supplement_in_SUP
    MOD_16_040_Process_Account_Event_notifications -->|unnamed| SIR_Get_Service_definitions_from_PRC_Service_Catalogue
    MOD_16_040_Process_Account_Event_notifications -->|unnamed| Create_Contract_Supplement_document_in_SUP
    MOD_16_040_Process_Account_Event_notifications -->|unnamed| MOD_SIR_Get_Contract_Supplements_by_Contract_from_SUP
    MOD_16_040_Process_Account_Event_notifications -->|unnamed| MOD_Get_Contract_Service_by_Contract_code_from_COS
    MOD_16_010_Request_for_a_loan_service -->|unnamed| MOD_16_020_Process_request_for_a_loan
    MOD_16_010_Request_for_a_loan_service --> ADD_16_022_Process_Sales_Quotes_for_Transaction
    ADD_16_022_Process_Sales_Quotes_for_Transaction -->|unnamed| MOD_Determine_the_Loan_Process_type_based_on_the_provided_Sa
    ADD_16_022_Process_Sales_Quotes_for_Transaction -->|unnamed| Create_Contract_Supplement_in_SUP
    ADD_16_022_Process_Sales_Quotes_for_Transaction -->|unnamed| Get_Supplement_definition_by_process_type_from_SUP
    ADD_16_022_Process_Sales_Quotes_for_Transaction -->|unnamed| MOD_SIR_Adding_Sales_Quote_to_Contract_Supplement_in_SUP
    ADD_16_022_Process_Sales_Quotes_for_Transaction -->|unnamed| SIR_Get_Service_definitions_from_PRC_Service_Catalogue
    MOD_16_020_Process_request_for_a_loan -->|unnamed| Get_Supplement_definition_by_process_type_from_SUP
    MOD_16_020_Process_request_for_a_loan -->|unnamed| SIR_Get_Service_definitions_from_PRC_Service_Catalogue
    MOD_16_020_Process_request_for_a_loan -->|unnamed| Create_Contract_Supplement_in_SUP
```
