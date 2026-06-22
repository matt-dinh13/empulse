# ApplicationPaymentChannelManagementWS_v3 - Change Repayment Channel

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationPaymentChannelManagementWS/ApplicationPaymentChannelManagementWS_v3
- **Diagram ID**: 158228
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class n_01_463_Change_repayment_channel_externally["01.463 Change repayment channel externally"]
    class ChangeRepaymentChannelResultCode["ChangeRepaymentChannelResultCode"]
    class RepaymentChannelType["RepaymentChannelType"]
    class ChangeRepaymentChannelFault["ChangeRepaymentChannelFault"]
    class ChangeRepaymentChannelResponse["ChangeRepaymentChannelResponse"]
    class ChangeRepaymentChannelRequest["ChangeRepaymentChannelRequest"]
    class ApplicationPaymentChannelManagementWS_v3["ApplicationPaymentChannelManagementWS_v3"]
    ApplicationPaymentChannelManagementWS_v3 ..> ChangeRepaymentChannelRequest : unnamed
    ApplicationPaymentChannelManagementWS_v3 ..> ChangeRepaymentChannelResponse : unnamed
    ApplicationPaymentChannelManagementWS_v3 ..> ChangeRepaymentChannelFault : unnamed
    ChangeRepaymentChannelRequest ..> RepaymentChannelType : unnamed
    ChangeRepaymentChannelFault ..> ChangeRepaymentChannelResultCode : unnamed
    n_01_463_Change_repayment_channel_externally <|.. ApplicationPaymentChannelManagementWS_v3 : unnamed
```
