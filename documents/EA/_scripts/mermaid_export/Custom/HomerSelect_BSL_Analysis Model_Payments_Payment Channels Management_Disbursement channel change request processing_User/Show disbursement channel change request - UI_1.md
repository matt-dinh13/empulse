# Show disbursement channel change request - UI

```mermaid
graph TD
    Tab_Payment_channels["Tab-Payment channels"]
    Tab_Payment_channels["Tab - Payment channels"]
    Show_current_Bank_Account["Show current Bank Account"]
    Partner_bank_branch["Partner bank branch"]
    Partner["Partner "]
    Payment_provider_details["Payment provider details"]
    Current_disbursement_channel_data["Current disbursement channel data"]
    Current_disbursement_channel_data["Current disbursement channel data"]
    Demanded_disbursement_channel_data["Demanded disbursement channel data"]
    Show_demanded_Bank_Account["Show demanded Bank Account"]
    Partner_bank_branch["Partner bank branch"]
    Partner["Partner "]
    Payment_provider_details["Payment provider details"]
    Demanded_disbursement_channel_data["Demanded disbursement channel data"]
    MOD_01_666_Reject_disbursement_channel_change_request["{MOD}01.666 Reject disbursement channel change request"]
    MOD_01_667_Revoke_disbursement_channel_change_request["{MOD}01.667 Revoke disbursement channel change request"]
    Use_Case_Model_Disbursement_channel_change_request_processin["Use Case Model : Disbursement channel change request processing"]
    n_01_665_Approve_disbursement_channel_change_request["01.665 Approve disbursement channel change request"]
    n_01_664_Show_disbursement_channel_change_request["01.664 Show disbursement channel change request"]
    Reject["Reject"]
    Revoke["Revoke"]
    Approve["Approve"]
    Close["Close"]
    Created_When["Created When"]
    Created_by["Created by"]
    Disbursement_channel["Disbursement channel"]
    Show_disbursement_channel_change_request["Show disbursement channel change request"]
    Tab_Payment_channels -->|unnamed| Show_disbursement_channel_change_request
    Tab_Payment_channels -->|unnamed| Show_disbursement_channel_change_request
    Show_disbursement_channel_change_request -->|unnamed| n_01_664_Show_disbursement_channel_change_request
    Use_Case_Model_Disbursement_channel_change_request_processin -->|unnamed| n_01_664_Show_disbursement_channel_change_request
    Approve -->|unnamed| n_01_665_Approve_disbursement_channel_change_request
    Revoke -->|unnamed| MOD_01_667_Revoke_disbursement_channel_change_request
    Reject -->|unnamed| MOD_01_666_Reject_disbursement_channel_change_request
```
