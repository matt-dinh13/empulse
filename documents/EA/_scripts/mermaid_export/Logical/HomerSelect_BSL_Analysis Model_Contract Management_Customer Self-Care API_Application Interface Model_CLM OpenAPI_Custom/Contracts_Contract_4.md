# Contracts/Contract

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
    FinancialParameter --> Contract : unnamed
    Contract --> GetContractsResponse : unnamed
    relFinancialParameter --> FinancialParameter : unnamed
    celFinancialParameter --> FinancialParameter : unnamed
    FinancialParameter --> ChargedItem : unnamed
    Contract --> ContractEvent : unnamed
    ContractEvent --> ContractEventAttribute : unnamed
    MOD_customers --> customer : /{cuid}
    BSL_OpenAPI --> MOD_customers : /customers
```
