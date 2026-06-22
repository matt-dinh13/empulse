# cancelContract

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts/v12/cancelContract
- **Diagram ID**: 160417
- **Elements**: 6
- **Connectors**: 4

```mermaid
classDiagram
    class ADD_Contract_cancel_via_API["{ADD}Contract cancel via API"]
    class CancelContractRequestPathParam["CancelContractRequestPathParam"]
    class Contract["Contract"]
    class PropertyErrorApi["PropertyErrorApi"]
    class ErrorRestApi["ErrorRestApi"]
    class ErrorMessageRestApi["ErrorMessageRestApi"]
    ErrorMessageRestApi ..> ErrorRestApi : unnamed
    Contract ..> ADD_Contract_cancel_via_API : unnamed
    Contract ..> ErrorMessageRestApi : Response
    ErrorMessageRestApi ..> PropertyErrorApi : unnamed
```
