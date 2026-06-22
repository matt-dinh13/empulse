# Automatic Outgoing Payment Orders Setting

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/COMMON for Outgoing Payments/Logical Data Model
- **Diagram ID**: 151002
- **Elements**: 3
- **Connectors**: 2

```mermaid
classDiagram
    class Transaction_Subtype["Transaction Subtype"]
    class ADD_Automatic_Payment_Orders_Setting["{ADD}Automatic Payment Orders Setting"]
    class Outgoing_Payment_Type["Outgoing Payment Type"]
    ADD_Automatic_Payment_Orders_Setting ..> Outgoing_Payment_Type : unnamed
    ADD_Automatic_Payment_Orders_Setting ..> Transaction_Subtype : unnamed
```
