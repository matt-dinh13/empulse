# LCS interface - WriteOffStatusService

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Collections system interfaces
- **Diagram ID**: 97676
- **Elements**: 6
- **Connectors**: 4

```mermaid
classDiagram
    class ADD_01_565_Write_off_contracts_from_external_system["{ADD}01.565 Write-off contracts from external system"]
    class MOD_WriteOffStatus["{MOD}WriteOffStatus"]
    class ADD_WriteOffStatusRS["{ADD}WriteOffStatusRS"]
    class ADD_WriteOffItem["{ADD}WriteOffItem"]
    class ADD_WriteOffStatusRQ["{ADD}WriteOffStatusRQ"]
    class ADD_WriteOffStatusService["{ADD}WriteOffStatusService"]
    ADD_WriteOffStatusService ..> ADD_WriteOffStatusRQ : unnamed
    ADD_WriteOffStatusRQ ..> ADD_WriteOffItem : unnamed
    ADD_WriteOffStatusService ..> ADD_WriteOffStatusRS : unnamed
    ADD_WriteOffItem ..> MOD_WriteOffStatus : unnamed
```
