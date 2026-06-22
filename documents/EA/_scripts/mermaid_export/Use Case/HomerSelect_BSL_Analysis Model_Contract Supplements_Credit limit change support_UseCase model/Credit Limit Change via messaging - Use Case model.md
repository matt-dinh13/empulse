# Credit Limit Change via messaging - Use Case model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/UseCase model
- **Diagram ID**: 164253
- **Elements**: 23
- **Connectors**: 24

```mermaid
graph LR
    ADD_13_076_Accept_credit_limit_change_documents(("{ADD}13.076 Accept credit limit change documents"))
    Get_supplement_documents_required_for_Contract_Supplement["Get supplement documents required for Contract Supplement"]
    MOD_13_205_Create_contract_supplement_documents_v2(("{MOD}13.205 Create contract supplement documents v2"))
    ADD_13_074_Prepare_credit_limit_change_documents(("{ADD}13.074 Prepare credit limit change documents"))
    System_event[/"System event"/]
    Set_Credit_Limit_Change_Contract_Supplement_values_rule["Set Credit Limit Change Contract Supplement values rule"]
    Setting_CreditLimitChangeRequestDto_for_messaging_request["Setting CreditLimitChangeRequestDto for messaging request"]
    Recalculate_EIR_for_credit_limit_change_rule["Recalculate EIR for credit limit change rule"]
    n_13_052_Process_account_notification_for_credit_limit_chang(("13.052 Process account notification for credit limit change"))
    CaBus_AM[/"CaBus-AM"/]
    MOD_Validate_Credit_limit_change_request_from_messaging["{MOD}Validate Credit limit change request from messaging"]
    Allowed_contract_statuses_for_CLIP_CLDP["Allowed contract statuses for CLIP/CLDP"]
    Change_status_of_Contract_Supplement["Change status of Contract Supplement"]
    Create_contract_supplement_rule["Create contract supplement rule"]
    Consumed_messages_Credit_Limit_Change_Request_message_struct["Consumed messages : Credit Limit Change Request - message structure"]
    Logical_data_model_Credit_limit_change_offer["Logical data model : Credit limit change offer"]
    Generated_messages_Credit_Limit_Change_Request_processing_re["Generated messages : Credit Limit Change Request - processing response message"]
    MOD_13_072_Create_Credit_limit_change_request_for_REL_accoun(("{MOD}13.072 Create Credit limit change request for REL account"))
    LAP[/"LAP"/]
    External_system[/"External system"/]
    n_13_450_Process_supplement_approval_result(("13.450 Process supplement approval result"))
    n_13_150_Send_supplement_to_approval(("13.150 Send supplement to approval"))
    n_13_070_Process_Credit_limit_change_request_via_messaging(("13.070 Process Credit limit change request via messaging"))
    ADD_13_074_Prepare_credit_limit_change_documents -->|unnamed| Change_status_of_Contract_Supplement
    ADD_13_074_Prepare_credit_limit_change_documents -->|unnamed| MOD_13_205_Create_contract_supplement_documents_v2
    ADD_13_076_Accept_credit_limit_change_documents -->|unnamed| MOD_13_205_Create_contract_supplement_documents_v2
    ADD_13_074_Prepare_credit_limit_change_documents --- System_event
    MOD_13_072_Create_Credit_limit_change_request_for_REL_accoun -->|unnamed| Setting_CreditLimitChangeRequestDto_for_messaging_request
    n_13_450_Process_supplement_approval_result -->|unnamed| Recalculate_EIR_for_credit_limit_change_rule
    n_13_052_Process_account_notification_for_credit_limit_chang -->|unnamed| Recalculate_EIR_for_credit_limit_change_rule
    n_13_070_Process_Credit_limit_change_request_via_messaging -->|unnamed| MOD_Validate_Credit_limit_change_request_from_messaging
    MOD_Validate_Credit_limit_change_request_from_messaging -->|unnamed| Allowed_contract_statuses_for_CLIP_CLDP
    n_13_450_Process_supplement_approval_result -->|unnamed| Change_status_of_Contract_Supplement
    n_13_052_Process_account_notification_for_credit_limit_chang -->|unnamed| Change_status_of_Contract_Supplement
    Consumed_messages_Credit_Limit_Change_Request_message_struct -->|unnamed| n_13_070_Process_Credit_limit_change_request_via_messaging
    n_13_070_Process_Credit_limit_change_request_via_messaging -->|unnamed| Create_contract_supplement_rule
    Generated_messages_Credit_Limit_Change_Request_processing_re -->|unnamed| MOD_13_072_Create_Credit_limit_change_request_for_REL_accoun
    ADD_13_076_Accept_credit_limit_change_documents --- External_system
    n_13_070_Process_Credit_limit_change_request_via_messaging -.->|include| n_13_150_Send_supplement_to_approval
    ADD_13_076_Accept_credit_limit_change_documents -->|unnamed| Change_status_of_Contract_Supplement
    LAP --> n_13_450_Process_supplement_approval_result
    LAP --> n_13_150_Send_supplement_to_approval
    External_system --> n_13_070_Process_Credit_limit_change_request_via_messaging
    System_event --> MOD_13_072_Create_Credit_limit_change_request_for_REL_accoun
    CaBus_AM --> n_13_052_Process_account_notification_for_credit_limit_chang
    CaBus_AM --> MOD_13_072_Create_Credit_limit_change_request_for_REL_accoun
    MOD_13_205_Create_contract_supplement_documents_v2 -->|unnamed| Get_supplement_documents_required_for_Contract_Supplement
```
