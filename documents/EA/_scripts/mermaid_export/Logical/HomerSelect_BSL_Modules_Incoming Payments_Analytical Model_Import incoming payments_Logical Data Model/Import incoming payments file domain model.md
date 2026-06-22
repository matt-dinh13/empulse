# Import incoming payments file domain model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Import incoming payments/Logical Data Model
- **Diagram ID**: 143100
- **Elements**: 3
- **Connectors**: 2

```mermaid
classDiagram
    class Incoming_Payment_File_Status["Incoming Payment File Status"]
    class Incoming_Payments_File_Type["Incoming Payments File Type"]
    class Incoming_Payment_File["Incoming Payment File"]
    Incoming_Payment_File ..> Incoming_Payment_File_Status : unnamed
    Incoming_Payment_File ..> Incoming_Payments_File_Type : unnamed
```
