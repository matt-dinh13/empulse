# PaymentChannelWSV2 - Change Repayment Channel

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelWS/PaymentChannelWSV2
- **Diagram ID**: 125772
- **Elements**: 10
- **Connectors**: 10

```mermaid
classDiagram
    class n_14_661_Change_repayment_channel_via_WS["14.661 Change repayment channel via WS"]
    class ValidationResultDto["ValidationResultDto"]
    class DDMResultTypeDto["DDMResultTypeDto"]
    class ChangeRepaymentChannelFault["ChangeRepaymentChannelFault"]
    class ChangeRepaymentChannelResponse["ChangeRepaymentChannelResponse"]
    class ContractDDMBaseDto["ContractDDMBaseDto"]
    class RepaymentChannelTypeDto["RepaymentChannelTypeDto"]
    class ContractStatusType["ContractStatusType"]
    class ChangeRepaymentChannelRequest["ChangeRepaymentChannelRequest"]
    class PaymentChannelWSV2["PaymentChannelWSV2"]
    PaymentChannelWSV2 ..> ChangeRepaymentChannelResponse : unnamed
    PaymentChannelWSV2 ..> ChangeRepaymentChannelFault : unnamed
    PaymentChannelWSV2 ..> n_14_661_Change_repayment_channel_via_WS : unnamed
    PaymentChannelWSV2 ..> ChangeRepaymentChannelRequest : unnamed
    ChangeRepaymentChannelRequest ..> ContractDDMBaseDto : unnamed
    ChangeRepaymentChannelRequest ..> ContractStatusType : unnamed
    ChangeRepaymentChannelRequest ..> RepaymentChannelTypeDto : unnamed
    ChangeRepaymentChannelFault ..> DDMResultTypeDto : unnamed
    ChangeRepaymentChannelFault ..> ValidationResultDto : unnamed
    ContractDDMBaseDto ..> ContractStatusType : unnamed
```
