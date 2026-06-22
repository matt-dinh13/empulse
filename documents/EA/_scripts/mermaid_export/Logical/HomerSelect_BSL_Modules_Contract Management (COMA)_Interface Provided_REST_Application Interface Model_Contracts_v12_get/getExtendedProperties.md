# getExtendedProperties

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts/v12/getExtendedProperties
- **Diagram ID**: 160412
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class ContractRequestPathParam["ContractRequestPathParam"]
    class Get_contract_extended_properties["Get contract extended properties"]
    class Contract["Contract"]
    class ContractExtendedProperty["ContractExtendedProperty"]
    Contract ..> ContractRequestPathParam : Request path param(s)
    Contract ..> Get_contract_extended_properties : unnamed
    Contract ..> ContractExtendedProperty : Response
```
