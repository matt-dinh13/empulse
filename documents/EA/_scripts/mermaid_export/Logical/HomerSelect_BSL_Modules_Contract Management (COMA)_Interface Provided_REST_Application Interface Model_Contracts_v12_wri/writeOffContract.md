# writeOffContract

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts/v12/writeOffContract
- **Diagram ID**: 160396
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class ContractRequestPathParam["ContractRequestPathParam"]
    class Contract["Contract"]
    class ErrorRestApi["ErrorRestApi"]
    class ADD_Contract_write_off_via_API["{ADD}Contract write-off via API"]
    class PropertyErrorApi["PropertyErrorApi"]
    class ErrorMessageRestApi["ErrorMessageRestApi"]
    class WriteOffContractRequestBody["WriteOffContractRequestBody"]
    ErrorMessageRestApi ..> PropertyErrorApi : unnamed
    ErrorMessageRestApi ..> ErrorRestApi : unnamed
    Contract ..> WriteOffContractRequestBody : Request body
    Contract ..> ErrorMessageRestApi : Error response
    Contract ..> ContractRequestPathParam : Request parameter(s)
    Contract ..> ADD_Contract_write_off_via_API : unnamed
```
