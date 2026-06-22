# LCS interface - Contract Property Service

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Collections system interfaces
- **Diagram ID**: 97675
- **Elements**: 8
- **Connectors**: 6

```mermaid
classDiagram
    class setContractPropertyResponse["setContractPropertyResponse"]
    class setContractProperty["setContractProperty"]
    class ContractStatus["ContractStatus"]
    class ContractPropertyRS["ContractPropertyRS"]
    class ContractPropertyRQ["ContractPropertyRQ"]
    class ContractPropertyItem["ContractPropertyItem"]
    class ContractPropertyServiceService["ContractPropertyServiceService"]
    ContractPropertyRQ ..> ContractPropertyItem : unnamed
    setContractProperty ..> ContractPropertyRQ : unnamed
    setContractPropertyResponse ..> ContractPropertyRS : unnamed
    ContractPropertyItem ..> ContractStatus : unnamed
    ContractPropertyServiceService ..> setContractProperty : unnamed
    ContractPropertyServiceService ..> setContractPropertyResponse : unnamed
```
