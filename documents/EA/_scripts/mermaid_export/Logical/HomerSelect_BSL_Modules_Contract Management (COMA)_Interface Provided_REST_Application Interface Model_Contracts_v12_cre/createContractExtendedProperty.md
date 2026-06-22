# createContractExtendedProperty

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts/v12/createContractExtendedProperty
- **Diagram ID**: 160404
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class ExtendedContractRequestBody["ExtendedContractRequestBody"]
    class ContractRequestPathParam["ContractRequestPathParam"]
    class Contract["Contract"]
    class Create_contract_extended_property["Create contract extended property"]
    Contract ..> ExtendedContractRequestBody : Request body
    Contract ..> ContractRequestPathParam : Request path parameter(s)
    Contract ..> Create_contract_extended_property : unnamed
```
