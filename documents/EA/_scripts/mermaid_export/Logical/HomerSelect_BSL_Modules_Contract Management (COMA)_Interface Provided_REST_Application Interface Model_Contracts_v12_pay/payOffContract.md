# payOffContract

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts/v12/payOffContract
- **Diagram ID**: 161897
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class ADD_payOffContract["{ADD}payOffContract"]
    class PropertyErrorApi["PropertyErrorApi"]
    class ErrorRestApi["ErrorRestApi"]
    class ErrorMessageRestApi["ErrorMessageRestApi"]
    class PayOffContractRequestBody["PayOffContractRequestBody"]
    class ADD_Contract_pay_off_via_API["{ADD}Contract pay-off via API"]
    ErrorMessageRestApi ..> ErrorRestApi : unnamed
    ADD_payOffContract ..> ErrorMessageRestApi : unnamed
    ADD_payOffContract ..> PayOffContractRequestBody : unnamed
    ADD_Contract_pay_off_via_API ..> ADD_payOffContract : unnamed
    ErrorMessageRestApi ..> PropertyErrorApi : unnamed
```
