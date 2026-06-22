# ApplicationManagementWS_v22 - SignAgreement

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22
- **Diagram ID**: 158236
- **Elements**: 3
- **Connectors**: 2

```mermaid
classDiagram
    class MOD_01_099_Sign_contract_externally["{MOD}01.099 Sign contract externally"]
    class SignAgreementRequest["SignAgreementRequest"]
    class ApplicationManagementWS_v22["ApplicationManagementWS_v22"]
    ApplicationManagementWS_v22 ..> SignAgreementRequest : unnamed
    MOD_01_099_Sign_contract_externally <|.. ApplicationManagementWS_v22 : unnamed
```
