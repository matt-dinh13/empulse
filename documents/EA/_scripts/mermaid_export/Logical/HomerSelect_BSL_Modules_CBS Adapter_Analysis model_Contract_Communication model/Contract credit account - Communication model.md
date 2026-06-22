# Contract credit account - Communication model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Contract/Communication model
- **Diagram ID**: 60128
- **Elements**: 8
- **Connectors**: 7

```mermaid
classDiagram
    class CommResult["CommResult"]
    class Generating_ContractCreditAccountRequest_message["Generating ContractCreditAccountRequest message"]
    class Processing_ContractCreditAccountResponse_message["Processing ContractCreditAccountResponse message"]
    class RESULT290["RESULT290"]
    class ContractNotificationResultType["ContractNotificationResultType"]
    class DEL_ContractCreditAccountResponse["{DEL}ContractCreditAccountResponse"]
    class DEL_ContractCreditAccountRequest["{DEL}ContractCreditAccountRequest"]
    class CREDITACCOUNT210["CREDITACCOUNT210"]
    DEL_ContractCreditAccountResponse ..> RESULT290 : unnamed
    DEL_ContractCreditAccountResponse ..> Processing_ContractCreditAccountResponse_message : unnamed
    DEL_ContractCreditAccountResponse ..> CREDITACCOUNT210 : unnamed
    DEL_ContractCreditAccountResponse ..> ContractNotificationResultType : unnamed
    DEL_ContractCreditAccountRequest ..> Generating_ContractCreditAccountRequest_message : unnamed
    RESULT290 ..> CommResult : unnamed
    CREDITACCOUNT210 ..> DEL_ContractCreditAccountRequest : unnamed
```
