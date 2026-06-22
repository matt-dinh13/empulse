# PaymentChannelWSV2 - Get Payment Channel By Bank Account

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelWS/PaymentChannelWSV2
- **Diagram ID**: 125774
- **Elements**: 11
- **Connectors**: 10

```mermaid
classDiagram
    class ADD_05_323_Get_payment_channel_by_bank_account_data_on_exter["{ADD}05.323 Get payment channel by bank account data on external request"]
    class ADD_PaymentChannelDto["{ADD}PaymentChannelDto"]
    class GetPaymentChannelByBankAccountDataResultDto["GetPaymentChannelByBankAccountDataResultDto"]
    class GetPaymentChannelByBankAccountDataResponse["GetPaymentChannelByBankAccountDataResponse"]
    class ValidationResultDto["ValidationResultDto"]
    class PaymentChannelFaultResultTypeDto["PaymentChannelFaultResultTypeDto"]
    class PaymentChannelFault["PaymentChannelFault"]
    class PaymnetChannelTypeFilterDto["PaymnetChannelTypeFilterDto"]
    class PaymnetChannelBankAccountDataFilterDto["PaymnetChannelBankAccountDataFilterDto"]
    class GetPaymentChannelByBankAccountDataRequest["GetPaymentChannelByBankAccountDataRequest"]
    class PaymentChannelWSV2["PaymentChannelWSV2"]
    PaymentChannelWSV2 ..> GetPaymentChannelByBankAccountDataRequest : unnamed
    PaymentChannelWSV2 ..> GetPaymentChannelByBankAccountDataResponse : unnamed
    PaymentChannelWSV2 ..> ADD_05_323_Get_payment_channel_by_bank_account_data_on_exter : unnamed
    PaymentChannelWSV2 ..> PaymentChannelFault : unnamed
    GetPaymentChannelByBankAccountDataRequest ..> PaymnetChannelBankAccountDataFilterDto : unnamed
    PaymnetChannelBankAccountDataFilterDto ..> PaymnetChannelTypeFilterDto : unnamed
    PaymentChannelFault ..> PaymentChannelFaultResultTypeDto : unnamed
    PaymentChannelFault ..> ValidationResultDto : unnamed
    GetPaymentChannelByBankAccountDataResponse ..> ADD_PaymentChannelDto : unnamed
    GetPaymentChannelByBankAccountDataResponse ..> GetPaymentChannelByBankAccountDataResultDto : unnamed
```
