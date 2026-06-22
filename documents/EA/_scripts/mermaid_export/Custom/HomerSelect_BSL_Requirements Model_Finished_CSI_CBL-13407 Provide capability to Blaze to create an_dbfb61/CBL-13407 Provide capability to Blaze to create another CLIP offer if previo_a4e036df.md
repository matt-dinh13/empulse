# CBL-13407 Provide capability to Blaze to create another CLIP offer if previous one was cancelled by Blaze

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-13407 Provide capability to Blaze to create another CLIP offer if previous one was cancelled by Blaze
- **Diagram ID**: 137545
- **Elements**: 5
- **Connectors**: 4

```mermaid
graph TD
    Generated_messages_Credit_Limit_Change_Request_processing_re["Generated messages : Credit Limit Change Request - processing response message"]
    Use_Case_Model_Contract_supplement_approval["Use Case Model : Contract supplement approval"]
    REQ_1_Returning_LAP_approval_result_into_CLIP_CLDP_notificat["REQ #1 - Returning LAP approval result into CLIP/CLDP notification"]
    CBL_13828_Adding_a_MMIL_into_Credit_Limit_Change_notificatio["CBL-13828 Adding a MMIL into Credit Limit Change notification"]
    CBL_13407_Adding_a_recalculation_flag_into_Credit_Limit_Chan["CBL-13407 Adding a recalculation flag into Credit Limit Change notification"]
    REQ_1_Returning_LAP_approval_result_into_CLIP_CLDP_notificat -->|unnamed| CBL_13407_Adding_a_recalculation_flag_into_Credit_Limit_Chan
    REQ_1_Returning_LAP_approval_result_into_CLIP_CLDP_notificat -->|unnamed| CBL_13828_Adding_a_MMIL_into_Credit_Limit_Change_notificatio
    Generated_messages_Credit_Limit_Change_Request_processing_re -->|unnamed| REQ_1_Returning_LAP_approval_result_into_CLIP_CLDP_notificat
    Use_Case_Model_Contract_supplement_approval -->|unnamed| REQ_1_Returning_LAP_approval_result_into_CLIP_CLDP_notificat
```
