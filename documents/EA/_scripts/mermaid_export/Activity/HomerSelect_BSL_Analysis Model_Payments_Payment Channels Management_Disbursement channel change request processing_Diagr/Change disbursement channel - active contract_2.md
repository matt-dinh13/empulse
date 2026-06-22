# Change disbursement channel - active contract

```mermaid
graph TD
    Ticket_is_created_and_assigned_to_BO_team["Ticket is created and assigned to BO team"]
    Request_is_rejected_payment_channel_data_are_NOT_changed["Request is rejected, payment channel data are NOT changed"]
    ActivityFinal["ActivityFinal"]
    Request_is_approved_payment_channels_data_are_changed["Request is approved, payment channels data are changed"]
    Payment_channel_is_valid["Payment channel is valid"]
    Request_is_revoked_payment_channel_data_are_not_saved["Request is revoked, payment channel data are not saved"]
    Request_is_validated_by_OP_team["Request is validated by OP team"]
    Payment_channel_is_OK["Payment channel is OK"]
    Request_payment_channel_checked_by_BO_agent["Request payment channel checked by BO agent"]
    Request_for_DCH_change_created_by_BO_in_BSL["Request for DCH change created by BO in BSL"]
    Change_disbursement_channel_initiated_by_customer["Change disbursement channel initiated by customer"]
    Request_is_rejected_payment_channel_data_are_NOT_changed -->|unnamed| Ticket_is_created_and_assigned_to_BO_team
    Payment_channel_is_valid -->|No| Request_is_rejected_payment_channel_data_are_NOT_changed
    Change_disbursement_channel_initiated_by_customer -->|unnamed| Request_for_DCH_change_created_by_BO_in_BSL
    Ticket_is_created_and_assigned_to_BO_team -->|unnamed| Request_for_DCH_change_created_by_BO_in_BSL
    Request_for_DCH_change_created_by_BO_in_BSL -->|unnamed| Request_payment_channel_checked_by_BO_agent
    Request_payment_channel_checked_by_BO_agent -->|unnamed| Payment_channel_is_OK
    Payment_channel_is_OK -->|Yes| Request_is_validated_by_OP_team
    Payment_channel_is_OK -->|No| Request_is_revoked_payment_channel_data_are_not_saved
    Request_is_validated_by_OP_team -->|unnamed| Payment_channel_is_valid
    Payment_channel_is_valid -->|Yes| Request_is_approved_payment_channels_data_are_changed
    Request_is_approved_payment_channels_data_are_changed -->|unnamed| ActivityFinal
```
