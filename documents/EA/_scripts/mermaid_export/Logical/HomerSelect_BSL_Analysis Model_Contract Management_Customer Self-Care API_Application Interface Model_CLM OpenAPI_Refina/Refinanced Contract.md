# Refinanced Contract

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Refinanced Contract/v1.0/Refinanced Contracts
- **Diagram ID**: 159601
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class refinancedcontracts["refinancedcontracts"]
    class consolidationcontract["consolidationcontract"]
    class consolidationcontracts["consolidationcontracts"]
    class BSL_OpenAPI["BSL OpenAPI"]
    class n_08_390_Get_Refinanced_Contracts_service["08.390 Get Refinanced Contracts service"]
    class ADD_Refinanced_Contract["{ADD}Refinanced Contract"]
    class ADD_GetRefinancedContractsResponse["{ADD}GetRefinancedContractsResponse"]
    ADD_GetRefinancedContractsResponse o-- ADD_Refinanced_Contract : unnamed
    consolidationcontracts ..> consolidationcontract : /{contractNumber}
    BSL_OpenAPI ..> consolidationcontracts : /refinancedcontract
    refinancedcontracts ..> ADD_GetRefinancedContractsResponse : unnamed
    consolidationcontract ..> refinancedcontracts : /refinancedcontracts
    refinancedcontracts ..> n_08_390_Get_Refinanced_Contracts_service : unnamed
```
