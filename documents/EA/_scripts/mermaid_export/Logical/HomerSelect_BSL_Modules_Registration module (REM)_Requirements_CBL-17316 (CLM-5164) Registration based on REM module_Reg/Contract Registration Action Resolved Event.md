# Contract Registration Action Resolved Event

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Requirements/CBL-17316 (CLM-5164) Registration based on REM module/Registration tickets orchestration analyses/Interface provided
- **Diagram ID**: 156813
- **Elements**: 7
- **Connectors**: 7

```mermaid
classDiagram
    class Contract["Contract"]
    class Action["Action"]
    class ExtendedProperty["ExtendedProperty"]
    class ContractEventAttribute["ContractEventAttribute"]
    class User["User"]
    class ContractEvent["ContractEvent"]
    class Contract_Registration_Action_Resolved_Event["Contract Registration Action Resolved Event"]
    Contract_Registration_Action_Resolved_Event ..> Action : unnamed
    Contract_Registration_Action_Resolved_Event ..> Contract : unnamed
    Contract ..> ContractEvent : unnamed
    ContractEvent ..> User : unnamed
    ContractEvent ..> User : unnamed
    ContractEvent ..> ContractEventAttribute : unnamed
    Contract ..> ExtendedProperty : unnamed
```
