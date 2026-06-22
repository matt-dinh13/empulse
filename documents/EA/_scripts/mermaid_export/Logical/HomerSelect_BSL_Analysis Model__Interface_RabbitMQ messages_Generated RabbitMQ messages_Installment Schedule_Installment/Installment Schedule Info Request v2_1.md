# Installment Schedule Info Request v2

```mermaid
classDiagram
    class Paire_Installment_Part["Paire Installment Part"]
    class Installment_Part["Installment Part"]
    class Installment_Part_Type["Installment Part Type"]
    class Recalculation_Reason_Type["Recalculation Reason Type"]
    class Installment_Type["Installment Type"]
    class Installment_Operation_Type["Installment Operation Type"]
    class Payment_Pairing_Info["Payment Pairing Info"]
    class Installment["Installment"]
    class Installment_Schedule_Info_Request["Installment Schedule Info Request "]
    unnamed --> Installment_Schedule_Info_Request : unnamed
    Installment_Schedule_Info_Request --> Installment : unnamed
    Installment_Schedule_Info_Request --> Payment_Pairing_Info : unnamed
    Installment --> Installment_Operation_Type : unnamed
    Installment --> Installment_Type : unnamed
    Installment --> Recalculation_Reason_Type : unnamed
    Paire_Installment_Part --> Installment_Part_Type : unnamed
    Installment_Part --> Installment_Part_Type : unnamed
    Installment --> Installment_Part : unnamed
    Payment_Pairing_Info --> Paire_Installment_Part : unnamed
```
