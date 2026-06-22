# Payment Channels via WS

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Payment Channels via WS/Use Case Model
- **Diagram ID**: 148774
- **Elements**: 11
- **Connectors**: 16

```mermaid
graph LR
    PaymentChannelWSV3_PaymentChannelWSV3_Validate_Payment_Chann["PaymentChannelWSV3 : PaymentChannelWSV3 - Validate Payment Channel"]
    ADD_05_324_Validate_Payment_Channel(("{ADD}05.324 Validate Payment Channel "))
    PaymentChannelWS_PaymentChannelWS["PaymentChannelWS : PaymentChannelWS"]
    PaymentChannelWS_PaymentChannelWS_get_payment_channels_by_ba["PaymentChannelWS :PaymentChannelWS - get payment channels by bank account data"]
    ADD_05_323_Get_payment_channel_by_bank_account_data_on_exter(("{ADD}05.323 Get payment channel by bank account data on external request"))
    Contract_Management[/"Contract Management"/]
    Loan_Origination[/"Loan Origination"/]
    MOD_Saving_of_Payment_Channels["{MOD}Saving of Payment Channels"]
    n_05_322_Get_payment_channel_on_external_request(("05.322 Get payment channel on external request"))
    MOD_05_321_Update_payment_channel_on_external_request(("{MOD}05.321 Update payment channel on external request"))
    MOD_05_320_Create_payment_channel_on_external_request(("{MOD}05.320 Create payment channel on external request"))
    MOD_05_320_Create_payment_channel_on_external_request -->|unnamed| MOD_Saving_of_Payment_Channels
    MOD_05_321_Update_payment_channel_on_external_request -->|unnamed| PaymentChannelWS_PaymentChannelWS
    MOD_05_320_Create_payment_channel_on_external_request -->|unnamed| PaymentChannelWS_PaymentChannelWS
    n_05_322_Get_payment_channel_on_external_request -->|unnamed| PaymentChannelWS_PaymentChannelWS
    ADD_05_323_Get_payment_channel_by_bank_account_data_on_exter -->|unnamed| PaymentChannelWS_PaymentChannelWS_get_payment_channels_by_ba
    ADD_05_324_Validate_Payment_Channel -->|unnamed| PaymentChannelWSV3_PaymentChannelWSV3_Validate_Payment_Chann
    MOD_05_321_Update_payment_channel_on_external_request -->|unnamed| MOD_Saving_of_Payment_Channels
    Loan_Origination --> MOD_05_320_Create_payment_channel_on_external_request
    Loan_Origination --> ADD_05_324_Validate_Payment_Channel
    Loan_Origination --> MOD_05_321_Update_payment_channel_on_external_request
    Loan_Origination --> n_05_322_Get_payment_channel_on_external_request
    Loan_Origination --> ADD_05_323_Get_payment_channel_by_bank_account_data_on_exter
    Contract_Management --> MOD_05_320_Create_payment_channel_on_external_request
    Contract_Management --> MOD_05_321_Update_payment_channel_on_external_request
    Contract_Management --> n_05_322_Get_payment_channel_on_external_request
    Contract_Management --- ADD_05_323_Get_payment_channel_by_bank_account_data_on_exter
```
