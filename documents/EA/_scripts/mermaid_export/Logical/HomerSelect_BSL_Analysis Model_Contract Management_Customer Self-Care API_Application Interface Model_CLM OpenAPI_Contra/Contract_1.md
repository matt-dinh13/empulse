# Contract

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Contracts/v9.0/Contract
- **Diagram ID**: 160888
- **Elements**: 13
- **Connectors**: 12

```mermaid
classDiagram
    class MOD_contracts["(MOD)contracts"]
    class contract["contract"]
    class BSL_OpenAPI["BSL OpenAPI"]
    class ChargedItem["ChargedItem"]
    class FinancialParameter["FinancialParameter"]
    class relFinancialParameter["relFinancialParameter"]
    class GetContractsResponse["GetContractsResponse"]
    class PresentedInterestRate["PresentedInterestRate"]
    class ContractEventAttribute["ContractEventAttribute"]
    class celFinancialParameter["celFinancialParameter"]
    class Contract["Contract"]
    class ContractEvent["ContractEvent"]
    class MOD_01_757_Get_contracts_for_self_care["{MOD}01.757 Get contracts for self-care"]
    Contract --> ContractEvent : unnamed
    Contract o-- FinancialParameter : unnamed
    ContractEvent --> ContractEventAttribute : unnamed
    FinancialParameter --> PresentedInterestRate : unnamed
    GetContractsResponse o-- Contract : unnamed
    FinancialParameter <|-- celFinancialParameter : unnamed
    FinancialParameter <|-- relFinancialParameter : unnamed
    FinancialParameter --> ChargedItem : unnamed
    BSL_OpenAPI ..> MOD_contracts : /contracts
    MOD_contracts ..> contract : /{contractNumber}
    contract ..> MOD_01_757_Get_contracts_for_self_care : unnamed
    contract --> GetContractsResponse : unnamed
```
