# signContract

```mermaid
classDiagram
    class Contracts["Contracts"]
    class ErrorRestApi["ErrorRestApi"]
    class ErrorMessageRestApi["ErrorMessageRestApi"]
    class ContractStatusResp["ContractStatusResp"]
    class ContractRequestPathParam["ContractRequestPathParam"]
    class ADD_Sign_Contract_via_API["{ADD} Sign Contract via API"]
    ErrorMessageRestApi --> ErrorRestApi : unnamed
    Contracts --> ADD_Sign_Contract_via_API : unnamed
    Contracts --> ContractStatusResp : 200 Response
    Contracts --> ContractRequestPathParam : Request path param(s)
```
