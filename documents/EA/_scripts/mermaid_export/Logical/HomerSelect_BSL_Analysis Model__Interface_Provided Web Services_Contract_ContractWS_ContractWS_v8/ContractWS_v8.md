# ContractWS_v8

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS/ContractWS_v8
- **Diagram ID**: 159596
- **Elements**: 17
- **Connectors**: 16

```mermaid
classDiagram
    class DisbursementStatusType["DisbursementStatusType"]
    class IdentificationDocument["IdentificationDocument"]
    class CustomerData["CustomerData"]
    class RecipientBankBranch["RecipientBankBranch"]
    class RecipientBank["RecipientBank"]
    class DisbursementChannelType["DisbursementChannelType"]
    class GetContractForDisbursementResultCode["GetContractForDisbursementResultCode"]
    class PaymentToDisburse["PaymentToDisburse"]
    class ContractDetail["ContractDetail"]
    class GroupChoice["GroupChoice"]
    class RevolvingParameter["RevolvingParameter"]
    class ClosedEndParameter["ClosedEndParameter"]
    class ContractForDisbursement["ContractForDisbursement"]
    class GetContractForDisbursementFault["GetContractForDisbursementFault"]
    class GetContractForDisbursementResponse["GetContractForDisbursementResponse"]
    class MOD_ContractWS_v8["(MOD)ContractWS_v8
"]
    class GetContractForDisbursementRequest["GetContractForDisbursementRequest"]
    MOD_ContractWS_v8 ..> GetContractForDisbursementRequest : unnamed
    MOD_ContractWS_v8 ..> GetContractForDisbursementFault : unnamed
    MOD_ContractWS_v8 ..> GetContractForDisbursementResponse : unnamed
    GetContractForDisbursementResponse ..> ContractForDisbursement : unnamed
    GetContractForDisbursementFault ..> GetContractForDisbursementResultCode : unnamed
    PaymentToDisburse ..> DisbursementChannelType : unnamed
    GroupChoice ..> ClosedEndParameter : unnamed
    PaymentToDisburse ..> RecipientBankBranch : unnamed
    ContractForDisbursement ..> PaymentToDisburse : unnamed
    ContractForDisbursement ..> CustomerData : unnamed
    ContractForDisbursement ..> ContractDetail : unnamed
    ContractDetail --> GroupChoice : unnamed
    GroupChoice ..> RevolvingParameter : unnamed
    CustomerData ..> IdentificationDocument : unnamed
    PaymentToDisburse ..> DisbursementStatusType : unnamed
    PaymentToDisburse ..> RecipientBank : unnamed
```
