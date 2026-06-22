# PaymentChannelWS - get payment channels by bank account data

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelWS
- **Diagram ID**: 125777
- **Elements**: 12
- **Connectors**: 11

```mermaid
classDiagram
    class ValidationResultDto["ValidationResultDto"]
    class PaymentChannelFaultResultTypeDto["PaymentChannelFaultResultTypeDto"]
    class PaymentChannelFault["PaymentChannelFault"]
    class GetPaymentChannelByBankAccountDataResultDto["GetPaymentChannelByBankAccountDataResultDto"]
    class ADD_05_323_Get_payment_channel_by_bank_account_data_on_exter["{ADD}05.323 Get payment channel by bank account data on external request"]
    class PaymnetChannelTypeFilterDto["PaymnetChannelTypeFilterDto"]
    class ADD_PaymentChannelDto["{ADD}PaymentChannelDto"]
    class PaymnetChannelBankAccountDataFilterDto["PaymnetChannelBankAccountDataFilterDto"]
    class Use_Case_Model_Payment_Channels_via_WS["Use Case Model : Payment Channels via WS"]
    class GetPaymentChannelByBankAccountDataResponse["GetPaymentChannelByBankAccountDataResponse"]
    class GetPaymentChannelByBankAccountDataRequest["GetPaymentChannelByBankAccountDataRequest"]
    class PaymentChannelWS["PaymentChannelWS"]
    PaymentChannelWS ..> GetPaymentChannelByBankAccountDataRequest : unnamed
    PaymentChannelWS ..> GetPaymentChannelByBankAccountDataResponse : unnamed
    PaymentChannelWS ..> ADD_05_323_Get_payment_channel_by_bank_account_data_on_exter : unnamed
    PaymentChannelWS ..> PaymentChannelFault : unnamed
    GetPaymentChannelByBankAccountDataRequest ..> PaymnetChannelBankAccountDataFilterDto : unnamed
    GetPaymentChannelByBankAccountDataResponse ..> ADD_PaymentChannelDto : unnamed
    GetPaymentChannelByBankAccountDataResponse ..> GetPaymentChannelByBankAccountDataResultDto : unnamed
    Use_Case_Model_Payment_Channels_via_WS --> ADD_05_323_Get_payment_channel_by_bank_account_data_on_exter : unnamed
    PaymnetChannelBankAccountDataFilterDto ..> PaymnetChannelTypeFilterDto : unnamed
    PaymentChannelFault ..> PaymentChannelFaultResultTypeDto : unnamed
    PaymentChannelFault ..> ValidationResultDto : unnamed
```
