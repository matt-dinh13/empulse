# cancelContract

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/REST/Application Interface Model/Contracts Operations/{MOD}v1/cancelContract
- **Diagram ID**: 160481
- **Elements**: 6
- **Connectors**: 7

```mermaid
classDiagram
    class ADD_Contract_cancel_via_API["{ADD}Contract cancel via API"]
    class CancelContractRequestPathParam["CancelContractRequestPathParam"]
    class Contracts["Contracts"]
    class PropertyErrorApi["PropertyErrorApi"]
    class ErrorRestApi["ErrorRestApi"]
    class ErrorMessageRestApi["ErrorMessageRestApi"]
    Contracts ..> ErrorMessageRestApi : Response
    Contracts ..> ErrorMessageRestApi : Error response
    Contracts ..> ErrorMessageRestApi : Error response
    ErrorMessageRestApi ..> ErrorRestApi : unnamed
    ErrorMessageRestApi ..> PropertyErrorApi : unnamed
    Contracts ..> ADD_Contract_cancel_via_API : unnamed
    Contracts ..> CancelContractRequestPathParam : Request path parameter(s)
```
