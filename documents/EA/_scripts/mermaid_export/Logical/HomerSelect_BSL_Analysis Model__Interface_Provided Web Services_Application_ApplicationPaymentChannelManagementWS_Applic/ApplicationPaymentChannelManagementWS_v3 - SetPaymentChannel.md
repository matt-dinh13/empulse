# ApplicationPaymentChannelManagementWS_v3 - SetPaymentChannel

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationPaymentChannelManagementWS/ApplicationPaymentChannelManagementWS_v3
- **Diagram ID**: 158231
- **Elements**: 10
- **Connectors**: 9

```mermaid
classDiagram
    class SetPaymentChannelResultCode["SetPaymentChannelResultCode"]
    class BankAccount["BankAccount"]
    class DDMType["DDMType"]
    class CardDataType["CardDataType"]
    class PaymentChannelDto["PaymentChannelDto"]
    class MOD_01_465_Set_payment_channel["{MOD}01.465 Set payment channel"]
    class SetPaymentChannelFault["SetPaymentChannelFault"]
    class SetPaymentChannelResponse["SetPaymentChannelResponse"]
    class SetPaymentChannelRequest["SetPaymentChannelRequest"]
    class ApplicationPaymentChannelManagementWS_v3["ApplicationPaymentChannelManagementWS_v3"]
    ApplicationPaymentChannelManagementWS_v3 ..> SetPaymentChannelRequest : unnamed
    ApplicationPaymentChannelManagementWS_v3 ..> SetPaymentChannelResponse : unnamed
    ApplicationPaymentChannelManagementWS_v3 ..> SetPaymentChannelFault : unnamed
    MOD_01_465_Set_payment_channel <|.. ApplicationPaymentChannelManagementWS_v3 : unnamed
    SetPaymentChannelRequest ..> PaymentChannelDto : unnamed
    PaymentChannelDto ..> CardDataType : unnamed
    PaymentChannelDto ..> DDMType : unnamed
    PaymentChannelDto ..> BankAccount : unnamed
    SetPaymentChannelFault ..> SetPaymentChannelResultCode : unnamed
```
