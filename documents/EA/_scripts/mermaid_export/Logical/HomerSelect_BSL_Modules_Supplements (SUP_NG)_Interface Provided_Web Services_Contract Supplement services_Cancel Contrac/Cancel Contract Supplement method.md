# Cancel Contract Supplement method

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Interface Provided/Web Services/Contract Supplement services/Cancel Contract Supplement
- **Diagram ID**: 158779
- **Elements**: 4
- **Connectors**: 5

```mermaid
classDiagram
    class ContractSupplement["ContractSupplement"]
    class ADD_CancelContractSupplementRequest["{ADD}CancelContractSupplementRequest"]
    class n_13_050_Cancel_Contract_Supplement["13.050 Cancel Contract Supplement"]
    class ContractSupplements["ContractSupplements"]
    ContractSupplements --> ContractSupplement : unnamed
    ContractSupplements ..> n_13_050_Cancel_Contract_Supplement : unnamed
    ContractSupplements --> ContractSupplement : unnamed
    ContractSupplements --> ADD_CancelContractSupplementRequest : unnamed
    ContractSupplements --> ContractSupplement : unnamed
```
