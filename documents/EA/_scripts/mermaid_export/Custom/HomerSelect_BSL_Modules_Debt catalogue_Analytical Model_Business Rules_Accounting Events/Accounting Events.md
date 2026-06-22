# Accounting Events

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Accounting Events
- **Diagram ID**: 150475
- **Elements**: 4
- **Connectors**: 4

```mermaid
graph TD
    Online_event["Online event"]
    Accounting_event_job["Accounting event job"]
    Accounting_Even_Type["Accounting Even Type"]
    Accounting_Event["Accounting Event"]
    Online_event -->|unnamed| Accounting_Event
    Accounting_event_job -->|unnamed| Accounting_Event
    Online_event -->|unnamed| Accounting_Even_Type
    Accounting_event_job -->|unnamed| Accounting_Even_Type
```
