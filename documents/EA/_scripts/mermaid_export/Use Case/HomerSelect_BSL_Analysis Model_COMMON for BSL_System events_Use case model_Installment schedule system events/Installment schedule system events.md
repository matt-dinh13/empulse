# Installment schedule system events

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Use case model/Installment schedule system events
- **Diagram ID**: 163397
- **Elements**: 5
- **Connectors**: 3

```mermaid
graph LR
    CreateCELREWPeriodSE["CreateCELREWPeriodSE"]
    Process_RegeneratedInstallmentScheduleSE(("Process RegeneratedInstallmentScheduleSE"))
    RegeneratedInstallmentScheduleSE["RegeneratedInstallmentScheduleSE"]
    ADD_Process_GeneratedInstallmentScheduleSE(("{ADD}Process GeneratedInstallmentScheduleSE"))
    GenerateInstallmentSchedule["GenerateInstallmentSchedule"]
    ADD_Process_GeneratedInstallmentScheduleSE -->|unnamed| GenerateInstallmentSchedule
    Process_RegeneratedInstallmentScheduleSE -->|unnamed| RegeneratedInstallmentScheduleSE
    RegeneratedInstallmentScheduleSE -->|unnamed| CreateCELREWPeriodSE
```
