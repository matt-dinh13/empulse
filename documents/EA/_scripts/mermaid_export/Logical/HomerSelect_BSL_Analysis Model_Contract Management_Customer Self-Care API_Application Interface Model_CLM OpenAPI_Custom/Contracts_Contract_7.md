# Contracts/Contract

```mermaid
classDiagram
    class ADD_ExtendedProperty["{ADD}ExtendedProperty"]
    class relFinancialParameter["relFinancialParameter"]
    class celFinancialParameter["celFinancialParameter"]
    class PresentedInterestRate["PresentedInterestRate"]
    class GetContractsResponse["GetContractsResponse"]
    class FinancialParameter["FinancialParameter"]
    class ContractEventAttribute["ContractEventAttribute"]
    class ContractEvent["ContractEvent"]
    class Contract["Contract"]
    class ChargedItem["ChargedItem"]
    class customer["customer"]
    class MOD_customers["(MOD)customers"]
    class BSL_OpenAPI["BSL OpenAPI"]
    class contract["contract"]
    class MOD_contracts["(MOD)contracts"]
    class MOD_01_757_Get_contracts_for_self_care["{MOD}01.757 Get contracts for self-care"]
    FinancialParameter --> Contract : unnamed
    FinancialParameter --> PresentedInterestRate : unnamed
    Contract --> GetContractsResponse : unnamed
    celFinancialParameter --> FinancialParameter : unnamed
    relFinancialParameter --> FinancialParameter : unnamed
    Contract --> ADD_ExtendedProperty : unnamed
    Contract --> ContractEvent : unnamed
    FinancialParameter --> ChargedItem : unnamed
    ContractEvent --> ContractEventAttribute : unnamed
    customer --> MOD_contracts : /contracts
    MOD_contracts --> GetContractsResponse : unnamed
    MOD_contracts --> contract : /{contractNumber}
    MOD_customers --> customer : /{cuid}
    contract --> GetContractsResponse : unnamed
    BSL_OpenAPI --> MOD_customers : /customers
    MOD_contracts --> MOD_01_757_Get_contracts_for_self_care : unnamed
    contract --> MOD_01_757_Get_contracts_for_self_care : unnamed
```
