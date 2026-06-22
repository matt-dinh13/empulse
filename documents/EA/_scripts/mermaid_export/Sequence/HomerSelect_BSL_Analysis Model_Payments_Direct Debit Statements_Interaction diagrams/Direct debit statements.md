# Direct debit statements

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Interaction diagrams
- **Diagram ID**: 155684
- **Elements**: 6
- **Connectors**: 15

```mermaid
sequenceDiagram
    participant Time as Time
    participant BSL as BSL
    participant External_system as External system
    participant Local_application as Local application
    participant Bank as Bank
    Time->>+BSL: Sequence
    BSL->>+External_system: Export triggered
    External_system->>+BSL: DDS file export via GUI / API (triggerDDSFileExport)
    BSL->>+Local_application: Response OK
    Local_application->>+BSL: DDS confirmation import via GUI / Rabbit MQ (ddsConfirmation)
    Local_application->>+Bank: DDS file
    Local_application->>+BSL: DDS confirmation import via GUI / Rabbit MQ (ddsConfirmation)
    Bank->>+Local_application: DDS undebited
    BSL->>+Local_application: DDS file export
    BSL->>+External_system: Response OK
    BSL->>+Local_application: Response OK
    Bank->>+Local_application: DDS debited
    BSL->>+BSL: Due installment is NOT paid
    BSL->>+BSL: Due installment is paid
    External_system->>+BSL: DDS file import via GUI / Rabbit MQ (ddsImport)
```
