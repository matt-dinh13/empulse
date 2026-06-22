# Contract package system event schema

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Logical data model
- **Diagram ID**: 164620
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class Contract_Package["Contract Package"]
    class ADD_ContractPackageReceivedSE["{ADD}ContractPackageReceivedSE"]
    class ADD_ContractPackageSystemEvent["{ADD}ContractPackageSystemEvent"]
    class SystemEvent["SystemEvent"]
    SystemEvent <|-- ADD_ContractPackageSystemEvent : unnamed
    ADD_ContractPackageSystemEvent <|-- ADD_ContractPackageReceivedSE : unnamed
    ADD_ContractPackageSystemEvent --> Contract_Package : unnamed
```
