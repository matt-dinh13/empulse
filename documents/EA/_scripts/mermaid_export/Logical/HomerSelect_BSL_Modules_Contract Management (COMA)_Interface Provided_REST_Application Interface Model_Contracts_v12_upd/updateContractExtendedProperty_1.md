# updateContractExtendedProperty

```mermaid
classDiagram
    class ExtendedContractRequestBody["ExtendedContractRequestBody"]
    class ContractRequestPathParam["ContractRequestPathParam"]
    class Contract["Contract"]
    class Update_contract_extended_property["Update contract extended property"]
    Contract --> Update_contract_extended_property : unnamed
    Contract --> ExtendedContractRequestBody : Request body
    Contract --> ContractRequestPathParam : Request path parameter(s)
```
