# ApplicationPaymentChannelManagementWS_v3 - Create DDM

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationPaymentChannelManagementWS/ApplicationPaymentChannelManagementWS_v3
- **Diagram ID**: 158225
- **Elements**: 8
- **Connectors**: 7

```mermaid
classDiagram
    class BankAccount["BankAccount"]
    class DirectDebitMandate["DirectDebitMandate"]
    class MOD_01_460_Create_DDM_externally["{MOD}01.460 Create DDM externally"]
    class CreateDDMResultCode["CreateDDMResultCode"]
    class CreateDDMFault["CreateDDMFault"]
    class CreateDDMResponse["CreateDDMResponse"]
    class CreateDDMRequest["CreateDDMRequest"]
    class ApplicationPaymentChannelManagementWS_v3["ApplicationPaymentChannelManagementWS_v3"]
    ApplicationPaymentChannelManagementWS_v3 ..> CreateDDMRequest : unnamed
    ApplicationPaymentChannelManagementWS_v3 ..> CreateDDMResponse : unnamed
    ApplicationPaymentChannelManagementWS_v3 ..> CreateDDMFault : unnamed
    CreateDDMFault ..> CreateDDMResultCode : unnamed
    MOD_01_460_Create_DDM_externally <|.. ApplicationPaymentChannelManagementWS_v3 : unnamed
    CreateDDMRequest ..> DirectDebitMandate : unnamed
    DirectDebitMandate ..> BankAccount : unnamed
```
