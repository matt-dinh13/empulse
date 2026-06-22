# CBL-8448 (CSI-29) Automated CLIP process for VN country

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-8448 (CSI-29) Automated CLIP process for VN country
- **Diagram ID**: 131016
- **Elements**: 8
- **Connectors**: 6

```mermaid
graph TD
    UseCase_Model_Cancel_contract_supplement_manually["UseCase Model : Cancel contract supplement manually"]
    UseCase_Model_Cancel_contract_supplement_automatically["UseCase Model : Cancel contract supplement automatically"]
    Generated_messages_Credit_Limit_Change_Request_processing_re["Generated messages : Credit Limit Change Request - processing response message"]
    Consumed_messages_Credit_Limit_Change_Request_message_struct["Consumed messages : Credit Limit Change Request - message structure"]
    REQ_2_Update_of_the_cancellation_functions_for_Credit_limit_["REQ #2 - Update of the cancellation functions for Credit limit change"]
    UseCase_model_Credit_Limit_Change_via_messaging_Use_Case_mod["UseCase model : Credit Limit Change via messaging - Use Case model"]
    REQ_1_Redesign_of_Change_credit_limit_request_input["REQ #1 - Redesign of Change credit limit request input"]
    REQ_description["REQ description"]
    REQ_1_Redesign_of_Change_credit_limit_request_input -->|unnamed| REQ_description
    Generated_messages_Credit_Limit_Change_Request_processing_re -->|unnamed| REQ_1_Redesign_of_Change_credit_limit_request_input
    Consumed_messages_Credit_Limit_Change_Request_message_struct -->|unnamed| REQ_1_Redesign_of_Change_credit_limit_request_input
    UseCase_model_Credit_Limit_Change_via_messaging_Use_Case_mod -->|unnamed| REQ_1_Redesign_of_Change_credit_limit_request_input
    UseCase_Model_Cancel_contract_supplement_automatically -->|unnamed| REQ_2_Update_of_the_cancellation_functions_for_Credit_limit_
    UseCase_Model_Cancel_contract_supplement_manually -->|unnamed| REQ_2_Update_of_the_cancellation_functions_for_Credit_limit_
```
