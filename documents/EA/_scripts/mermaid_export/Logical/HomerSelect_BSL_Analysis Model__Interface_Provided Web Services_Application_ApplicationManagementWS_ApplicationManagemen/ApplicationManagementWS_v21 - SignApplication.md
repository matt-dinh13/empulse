# ApplicationManagementWS_v21 - SignApplication

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21
- **Diagram ID**: 158278
- **Elements**: 8
- **Connectors**: 7

```mermaid
classDiagram
    class MOD_01_099_Sign_contract_externally["{MOD}01.099 Sign contract externally"]
    class MessageAttribute["MessageAttribute"]
    class ValidationError["ValidationError"]
    class SignContractResultCode["SignContractResultCode"]
    class SignApplicationResponse["SignApplicationResponse"]
    class SignApplicationRequest["SignApplicationRequest"]
    class SignApplicationFault["SignApplicationFault"]
    class ApplicationManagementWS_v21["ApplicationManagementWS_v21"]
    ApplicationManagementWS_v21 ..> SignApplicationFault : unnamed
    ApplicationManagementWS_v21 ..> SignApplicationRequest : unnamed
    ApplicationManagementWS_v21 ..> SignApplicationResponse : unnamed
    SignApplicationFault ..> SignContractResultCode : unnamed
    SignApplicationFault ..> ValidationError : unnamed
    ValidationError ..> MessageAttribute : unnamed
    MOD_01_099_Sign_contract_externally <|.. ApplicationManagementWS_v21 : unnamed
```
