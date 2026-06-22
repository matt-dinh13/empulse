# Agreement

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/Application Rest/Agreement
- **Diagram ID**: 164346
- **Elements**: 13
- **Connectors**: 12

```mermaid
classDiagram
    class MOD_SignAgreement["{MOD}SignAgreement"]
    class MOD_Applications["{MOD}Applications"]
    class n_01_335_Get_agreement_documentation_externally["01.335 Get agreement documentation externally"]
    class Agreement["Agreement"]
    class PrintoutDataSource["PrintoutDataSource"]
    class PreparedDocument["PreparedDocument"]
    class GetAgreement["GetAgreement"]
    class MOD_01_099_Sign_contract_externally["{MOD}01.099 Sign contract externally"]
    class n_01_096_Prepare_documentation_externally["01.096 Prepare documentation externally"]
    class Sign["Sign"]
    class PrepareAgreement["PrepareAgreement"]
    class Application["Application"]
    class BSL["BSL"]
    BSL o-- MOD_Applications : /v1/applications
    Application o-- Sign : /sign
    Application o-- PrepareAgreement : /prepareAgreement
    Application o-- GetAgreement : /agreement
    PrepareAgreement ..> n_01_096_Prepare_documentation_externally : unnamed
    Sign ..> MOD_01_099_Sign_contract_externally : unnamed
    Agreement ..> PreparedDocument : unnamed
    Agreement ..> PrintoutDataSource : unnamed
    GetAgreement ..> Agreement : unnamed
    GetAgreement ..> n_01_335_Get_agreement_documentation_externally : unnamed
    MOD_Applications o-- Application : /{code}
    Sign ..> MOD_SignAgreement : unnamed
```
