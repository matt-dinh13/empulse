# InstallmentScheduleSystemEvent schema

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Logical data model
- **Diagram ID**: 164613
- **Elements**: 6
- **Connectors**: 6

```mermaid
classDiagram
    class GenerateInstallmentSchedule["GenerateInstallmentSchedule"]
    class CreateCELREWPeriodSE["CreateCELREWPeriodSE"]
    class Installment["Installment"]
    class RegeneratedInstallmentScheduleSE["RegeneratedInstallmentScheduleSE"]
    class SystemEvent["SystemEvent"]
    class InstallmentScheduleSystemEvent["InstallmentScheduleSystemEvent"]
    InstallmentScheduleSystemEvent <|-- GenerateInstallmentSchedule : unnamed
    InstallmentScheduleSystemEvent <|-- RegeneratedInstallmentScheduleSE : unnamed
    SystemEvent <|-- InstallmentScheduleSystemEvent : unnamed
    GenerateInstallmentSchedule --> Installment : unnamed
    RegeneratedInstallmentScheduleSE --> Installment : unnamed
    CreateCELREWPeriodSE <|-- RegeneratedInstallmentScheduleSE : unnamed
```
