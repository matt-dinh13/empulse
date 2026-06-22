# ApplicationManagementWS_v23 - SignAgreement

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23
- **Diagram ID**: 153279
- **Elements**: 4
- **Connectors**: 2

```mermaid
classDiagram
    class MessageAttribute["MessageAttribute"]
    class MOD_01_099_Sign_contract_externally["{MOD}01.099 Sign contract externally"]
    class SignAgreementRequest["SignAgreementRequest"]
    class ApplicationManagementWS_v23["ApplicationManagementWS_v23"]
    ApplicationManagementWS_v23 ..> SignAgreementRequest : unnamed
    MOD_01_099_Sign_contract_externally <|.. ApplicationManagementWS_v23 : unnamed
```
