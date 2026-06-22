# Contract

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Contracts/v10.0/Contract
- **Diagram ID**: 159613
- **Elements**: 14
- **Connectors**: 13

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
    FinancialParameter <|-- relFinancialParameter : unnamed
    Contract --> ADD_ExtendedProperty : unnamed
    Contract o-- FinancialParameter : unnamed
    FinancialParameter <|-- celFinancialParameter : unnamed
    FinancialParameter --> ChargedItem : unnamed
    FinancialParameter --> PresentedInterestRate : unnamed
    ContractEvent --> ContractEventAttribute : unnamed
    GetContractsResponse o-- Contract : unnamed
    Contract --> ContractEvent : unnamed
    BSL_OpenAPI ..> MOD_contracts : /contracts
    MOD_contracts ..> contract : /{contractNumber}
    contract ..> GetContractsResponse : unnamed
    contract ..> MOD_01_757_Get_contracts_for_self_care : unnamed
```
