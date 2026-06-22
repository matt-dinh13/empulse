# updateContractExtendedProperty

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts/v12/updateContractExtendedProperty
- **Diagram ID**: 160395
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class ExtendedContractRequestBody["ExtendedContractRequestBody"]
    class ContractRequestPathParam["ContractRequestPathParam"]
    class Contract["Contract"]
    class Update_contract_extended_property["Update contract extended property"]
    Contract ..> Update_contract_extended_property : unnamed
    Contract ..> ExtendedContractRequestBody : Request body
    Contract ..> ContractRequestPathParam : Request path parameter(s)
```
