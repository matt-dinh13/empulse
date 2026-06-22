# Contracts/Contract

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Customers/v7.0/Contracts/Contract
- **Diagram ID**: 159609
- **Elements**: 12
- **Connectors**: 13

```mermaid
classDiagram
    class customer["customer"]
    class MOD_customers["(MOD)customers"]
    class BSL_OpenAPI["BSL OpenAPI"]
    class ContractEventAttribute["ContractEventAttribute"]
    class ContractEvent["ContractEvent"]
    class ChargedItem["ChargedItem"]
    class MOD_01_757_Get_contracts_for_self_care["{MOD}01.757 Get contracts for self-care"]
    class celFinancialParameter["celFinancialParameter"]
    class relFinancialParameter["relFinancialParameter"]
    class FinancialParameter["FinancialParameter"]
    class GetContractsResponse["GetContractsResponse"]
    class Contract["Contract"]
    Contract o-- FinancialParameter : unnamed
    GetContractsResponse o-- Contract : unnamed
    FinancialParameter <|-- relFinancialParameter : unnamed
    FinancialParameter <|-- celFinancialParameter : unnamed
    FinancialParameter --> ChargedItem : unnamed
    Contract --> ContractEvent : unnamed
    ContractEvent --> ContractEventAttribute : unnamed
    MOD_customers ..> customer : /{cuid}
    BSL_OpenAPI ..> MOD_customers : /customers
```
