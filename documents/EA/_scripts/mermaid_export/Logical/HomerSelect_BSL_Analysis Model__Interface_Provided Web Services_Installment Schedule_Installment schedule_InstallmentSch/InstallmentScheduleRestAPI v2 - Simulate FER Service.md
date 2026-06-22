# InstallmentScheduleRestAPI v2 - Simulate FER Service

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Installment schedule/InstallmentScheduleRestAPI v2_new
- **Diagram ID**: 164351
- **Elements**: 7
- **Connectors**: 7

```mermaid
classDiagram
    class Amount["Amount"]
    class PayableItem["PayableItem"]
    class ItemToPay["ItemToPay"]
    class Payment["Payment"]
    class SimulateFERServiceResponse["SimulateFERServiceResponse"]
    class SimulateFERServiceRequest["SimulateFERServiceRequest"]
    class InstallmentScheduleRestAPI["InstallmentScheduleRestAPI"]
    InstallmentScheduleRestAPI ..> SimulateFERServiceRequest : unnamed
    SimulateFERServiceResponse o-- Payment : unnamed
    InstallmentScheduleRestAPI ..> SimulateFERServiceResponse : unnamed
    Payment ..> ItemToPay : unnamed
    ItemToPay ..> PayableItem : unnamed
    PayableItem ..> Amount : unnamed
    ItemToPay ..> Amount : unnamed
```
