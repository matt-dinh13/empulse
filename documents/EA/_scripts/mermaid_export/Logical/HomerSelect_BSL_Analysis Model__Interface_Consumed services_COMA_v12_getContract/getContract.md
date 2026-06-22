# getContract

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/COMA/v12/getContract 
- **Diagram ID**: 146726
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class ContractDocument["ContractDocument"]
    class ContractService["ContractService"]
    class ContractProduct["ContractProduct"]
    class ContractCustomer["ContractCustomer"]
    class ContractCommodity["ContractCommodity"]
    class Contract["Contract"]
    class ADD_getContract["{ADD}getContract"]
    ADD_getContract ..> Contract : unnamed
    Contract --> ContractCustomer : unnamed
    Contract --> ContractService : unnamed
    Contract --> ContractCommodity : unnamed
    Contract --> ContractDocument : unnamed
    Contract --> ContractProduct : unnamed
```
