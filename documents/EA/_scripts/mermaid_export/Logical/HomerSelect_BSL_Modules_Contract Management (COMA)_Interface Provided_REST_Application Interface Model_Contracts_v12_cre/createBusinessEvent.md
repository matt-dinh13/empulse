# createBusinessEvent

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts/v12/createBusinessEvent
- **Diagram ID**: 160403
- **Elements**: 8
- **Connectors**: 8

```mermaid
classDiagram
    class ContractRequestPathParam["ContractRequestPathParam"]
    class BusinessEventRequestBody["BusinessEventRequestBody"]
    class Contract["Contract"]
    class Create_contract_business_event["Create contract business event"]
    class CreateContractBusinessEventAttribute["CreateContractBusinessEventAttribute"]
    class ContractBusinessEventAttribute["ContractBusinessEventAttribute"]
    class ContractBusinessEventUser["ContractBusinessEventUser"]
    class ContractBusinessEvent["ContractBusinessEvent"]
    BusinessEventRequestBody ..> CreateContractBusinessEventAttribute : unnamed
    ContractBusinessEvent --> ContractBusinessEventUser : unnamed
    ContractBusinessEvent --> ContractBusinessEventUser : unnamed
    ContractBusinessEvent --> ContractBusinessEventAttribute : unnamed
    Contract ..> BusinessEventRequestBody : Request Body
    Contract ..> ContractBusinessEvent : Response
    Contract ..> Create_contract_business_event : unnamed
    Contract ..> ContractRequestPathParam : Request path parameter(s)
```
