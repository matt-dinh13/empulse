# Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Disbursement channel change request processing/Access Rights
- **Diagram ID**: 98315
- **Elements**: 10
- **Connectors**: 5

```mermaid
graph TD
    n_01_668_Create_request_for_change_disbursement_channel["01.668 Create request for change disbursement channel"]
    MOD_01_668_Create_request_for_change_disbursement_channel["{MOD}01.668 Create request for change disbursement channel"]
    MOD_01_667_Revoke_disbursement_channel_change_request["{MOD}01.667 Revoke disbursement channel change request"]
    MOD_01_666_Reject_disbursement_channel_change_request["{MOD}01.666 Reject disbursement channel change request"]
    n_01_664_Show_disbursement_channel_change_request["01.664 Show disbursement channel change request"]
    n_01_665_Approve_disbursement_channel_change_request["01.665 Approve disbursement channel change request"]
    n_01_667_Revoke_disbursement_channel_change_request["01.667 Revoke disbursement channel change request"]
    n_01_665_Approve_disbursement_channel_change_request["01.665 Approve disbursement channel change request"]
    n_01_666_Reject_disbursement_channel_change_request["01.666 Reject disbursement channel change request"]
    n_01_664_Show_disbursement_channel_change_request["01.664 Show disbursement channel change request"]
    MOD_01_666_Reject_disbursement_channel_change_request -->|unnamed| n_01_666_Reject_disbursement_channel_change_request
    n_01_665_Approve_disbursement_channel_change_request -->|unnamed| n_01_665_Approve_disbursement_channel_change_request
    MOD_01_667_Revoke_disbursement_channel_change_request -->|unnamed| n_01_667_Revoke_disbursement_channel_change_request
    MOD_01_668_Create_request_for_change_disbursement_channel -->|unnamed| n_01_668_Create_request_for_change_disbursement_channel
    n_01_664_Show_disbursement_channel_change_request -->|unnamed| n_01_664_Show_disbursement_channel_change_request
```
