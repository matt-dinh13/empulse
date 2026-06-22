# Contract notifications - Communication model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Contract/Communication model
- **Diagram ID**: 60127
- **Elements**: 4
- **Connectors**: 2

```mermaid
classDiagram
    class MOD_Processing_ContractFullInfoRequest_message["{MOD}Processing ContractFullInfoRequest message"]
    class Legend["Legend"]
    class DEL_ContractFullInfoRequest["{DEL]ContractFullInfoRequest"]
    class CREDIT110["CREDIT110"]
    DEL_ContractFullInfoRequest ..> MOD_Processing_ContractFullInfoRequest_message : unnamed
    DEL_ContractFullInfoRequest ..> CREDIT110 : unnamed
```
