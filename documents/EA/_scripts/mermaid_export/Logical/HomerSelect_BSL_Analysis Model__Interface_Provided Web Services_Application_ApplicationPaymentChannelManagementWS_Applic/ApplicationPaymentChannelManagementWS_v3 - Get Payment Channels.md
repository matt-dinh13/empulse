# ApplicationPaymentChannelManagementWS_v3 - Get Payment Channels

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationPaymentChannelManagementWS/ApplicationPaymentChannelManagementWS_v3
- **Diagram ID**: 158230
- **Elements**: 8
- **Connectors**: 7

```mermaid
classDiagram
    class Purposes["Purposes"]
    class PaymentChannelDto["PaymentChannelDto"]
    class GetPaymentChannelsResponse["GetPaymentChannelsResponse"]
    class GetPaymentChannelsResultCode["GetPaymentChannelsResultCode"]
    class GetPaymentChannelsFault["GetPaymentChannelsFault"]
    class n_01_464_Get_payment_channels["01.464 Get payment channels"]
    class GetPaymentChannelsRequest["GetPaymentChannelsRequest"]
    class ApplicationPaymentChannelManagementWS_v3["ApplicationPaymentChannelManagementWS_v3"]
    ApplicationPaymentChannelManagementWS_v3 ..> GetPaymentChannelsRequest : unnamed
    n_01_464_Get_payment_channels <|.. ApplicationPaymentChannelManagementWS_v3 : unnamed
    ApplicationPaymentChannelManagementWS_v3 ..> GetPaymentChannelsFault : unnamed
    GetPaymentChannelsFault ..> GetPaymentChannelsResultCode : unnamed
    ApplicationPaymentChannelManagementWS_v3 ..> GetPaymentChannelsResponse : unnamed
    GetPaymentChannelsResponse ..> PaymentChannelDto : unnamed
    GetPaymentChannelsRequest ..> Purposes : unnamed
```
