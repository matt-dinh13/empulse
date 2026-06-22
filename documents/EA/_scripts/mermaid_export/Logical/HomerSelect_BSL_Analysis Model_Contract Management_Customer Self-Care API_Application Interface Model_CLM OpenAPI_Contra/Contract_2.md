# Contract

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
    class BSL_OpenAPI["BSL OpenAPI"]
    class contract["contract"]
    class MOD_contracts["(MOD)contracts"]
    class MOD_01_757_Get_contracts_for_self_care["{MOD}01.757 Get contracts for self-care"]
    relFinancialParameter --> FinancialParameter : unnamed
    Contract --> ADD_ExtendedProperty : unnamed
    FinancialParameter --> Contract : unnamed
    celFinancialParameter --> FinancialParameter : unnamed
    FinancialParameter --> ChargedItem : unnamed
    FinancialParameter --> PresentedInterestRate : unnamed
    ContractEvent --> ContractEventAttribute : unnamed
    Contract --> GetContractsResponse : unnamed
    Contract --> ContractEvent : unnamed
    BSL_OpenAPI --> MOD_contracts : /contracts
    MOD_contracts --> contract : /{contractNumber}
    contract --> GetContractsResponse : unnamed
    contract --> MOD_01_757_Get_contracts_for_self_care : unnamed
```
