# ContractPaymentChannelManagementWS - ChangeContractRepaymentChannel

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/Contract Payment Channel Management
- **Diagram ID**: 107844
- **Elements**: 8
- **Connectors**: 7

```mermaid
classDiagram
    class ContractDDMResultCode["ContractDDMResultCode"]
    class ValidationResultDto["ValidationResultDto"]
    class RepaymentChannelTypeDto["RepaymentChannelTypeDto"]
    class n_01_780_Change_contract_repayment_channel_service["01.780 Change contract repayment channel service"]
    class ChangeRepaymentChannelFault["ChangeRepaymentChannelFault"]
    class ChangeRepaymentChannelResponse["ChangeRepaymentChannelResponse"]
    class ChangeRepaymentChannelRequest["ChangeRepaymentChannelRequest"]
    class ContractPaymentChannelManagementWS["ContractPaymentChannelManagementWS"]
    ContractPaymentChannelManagementWS --> ChangeRepaymentChannelResponse : unnamed
    ContractPaymentChannelManagementWS ..> n_01_780_Change_contract_repayment_channel_service : unnamed
    ContractPaymentChannelManagementWS --> ChangeRepaymentChannelFault : unnamed
    ContractPaymentChannelManagementWS --> ChangeRepaymentChannelRequest : unnamed
    ChangeRepaymentChannelRequest ..> RepaymentChannelTypeDto : unnamed
    ChangeRepaymentChannelFault ..> ValidationResultDto : unnamed
    ChangeRepaymentChannelFault ..> ContractDDMResultCode : unnamed
```
