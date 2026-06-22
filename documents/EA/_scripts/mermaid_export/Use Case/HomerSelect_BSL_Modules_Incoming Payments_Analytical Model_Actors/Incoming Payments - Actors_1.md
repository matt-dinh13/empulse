# Incoming Payments - Actors

```mermaid
graph TD
    BSL["BSL"]
    Cabus_AM["Cabus AM"]
    Installment_schedule["Installment schedule"]
    Print_Server["Print Server"]
    CIF["CIF"]
    User["User"]
    System["System"]
    External_System["External System"]
    CIF -->|unnamed| System
    Print_Server -->|unnamed| System
    Installment_schedule -->|unnamed| System
    Cabus_AM -->|unnamed| System
```
