# ReplaceService

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Account Pricing
- **Diagram ID**: 127812
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class ADD_ContractReplaceServiceResult["{ADD}ContractReplaceServiceResult"]
    class ADD_ReplaceServiceResponse["{ADD}ReplaceServiceResponse"]
    class ADD_ReplaceServiceRequest["{ADD}ReplaceServiceRequest"]
    class ADD_ContractReplaceService["{ADD}ContractReplaceService"]
    class ADD_Replace_Service["{ADD}Replace Service"]
    class Account_Pricing["Account Pricing"]
    ADD_ReplaceServiceResponse --> ADD_ContractReplaceServiceResult : unnamed
    ADD_Replace_Service --> ADD_ReplaceServiceResponse : unnamed
    ADD_Replace_Service --> ADD_ReplaceServiceRequest : unnamed
    ADD_ReplaceServiceRequest --> ADD_ContractReplaceService : unnamed
    Account_Pricing --> ADD_Replace_Service : /ap/service/flip
```
