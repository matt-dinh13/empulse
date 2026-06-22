# ContractPaymentChannelManagementWS - CancelContractDDM

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/Contract Payment Channel Management
- **Diagram ID**: 107843
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class ValidationResultDto["ValidationResultDto"]
    class n_01_778_Cancel_contract_DDM_service["01.778 Cancel contract DDM service"]
    class ContractDDMResultCode["ContractDDMResultCode"]
    class CancelContractDDMFault["CancelContractDDMFault"]
    class CancelContractDDMResponse["CancelContractDDMResponse"]
    class CancelContractDDMRequest["CancelContractDDMRequest"]
    class ContractPaymentChannelManagementWS["ContractPaymentChannelManagementWS"]
    ContractPaymentChannelManagementWS --> CancelContractDDMResponse : unnamed
    ContractPaymentChannelManagementWS ..> n_01_778_Cancel_contract_DDM_service : unnamed
    ContractPaymentChannelManagementWS --> CancelContractDDMFault : unnamed
    ContractPaymentChannelManagementWS --> CancelContractDDMRequest : unnamed
    CancelContractDDMFault ..> ValidationResultDto : unnamed
    CancelContractDDMFault ..> ContractDDMResultCode : unnamed
```
