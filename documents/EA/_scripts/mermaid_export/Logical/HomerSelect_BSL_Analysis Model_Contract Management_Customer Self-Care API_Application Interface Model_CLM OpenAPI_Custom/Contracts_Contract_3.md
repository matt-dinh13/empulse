# Contracts/Contract

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Customers/v10.0/Contracts/Contract
- **Diagram ID**: 159615
- **Elements**: 16
- **Connectors**: 17

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
    Contract o-- FinancialParameter : unnamed
    FinancialParameter --> PresentedInterestRate : unnamed
    GetContractsResponse o-- Contract : unnamed
    FinancialParameter <|-- celFinancialParameter : unnamed
    FinancialParameter <|-- relFinancialParameter : unnamed
    Contract --> ADD_ExtendedProperty : unnamed
    Contract --> ContractEvent : unnamed
    FinancialParameter --> ChargedItem : unnamed
    ContractEvent --> ContractEventAttribute : unnamed
    customer ..> MOD_contracts : /contracts
    MOD_contracts ..> GetContractsResponse : unnamed
    MOD_contracts ..> contract : /{contractNumber}
    MOD_customers ..> customer : /{cuid}
    contract ..> GetContractsResponse : unnamed
    BSL_OpenAPI ..> MOD_customers : /customers
    MOD_contracts ..> MOD_01_757_Get_contracts_for_self_care : unnamed
    contract ..> MOD_01_757_Get_contracts_for_self_care : unnamed
```
