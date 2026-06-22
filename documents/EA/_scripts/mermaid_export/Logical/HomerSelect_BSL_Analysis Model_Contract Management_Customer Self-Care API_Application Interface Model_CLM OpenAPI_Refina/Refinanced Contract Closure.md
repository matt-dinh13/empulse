# Refinanced Contract Closure

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Refinanced Contract/v1.0/Refinanced Contract Closure
- **Diagram ID**: 159600
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class refinancedcontractclosure["refinancedcontractclosure"]
    class consolidationcontracts["consolidationcontracts"]
    class BSL_OpenAPI["BSL OpenAPI"]
    class n_08_392_Set_Refinanced_Contract_Closure_service["08.392 Set Refinanced Contract Closure service"]
    class ADD_SetRefinancedContractClosureRequest["{ADD}SetRefinancedContractClosureRequest"]
    consolidationcontracts ..> refinancedcontractclosure : /setRefinancedContractClosure
    BSL_OpenAPI ..> consolidationcontracts : /refinancedcontract
    refinancedcontractclosure ..> ADD_SetRefinancedContractClosureRequest : unnamed
    refinancedcontractclosure ..> n_08_392_Set_Refinanced_Contract_Closure_service : unnamed
```
