# installmentScheduleRestAPI v2

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Installment schedule/InstallmentScheduleRestAPI v2_new
- **Diagram ID**: 164347
- **Elements**: 4
- **Connectors**: 4

```mermaid
classDiagram
    class Collection_system["Collection system"]
    class n_03_170_Get_Next_Regular_Installment["03.170 Get Next Regular Installment"]
    class n_03_160_Get_Installment_Schedule["03.160 Get Installment Schedule"]
    class InstallmentScheduleRestAPI["InstallmentScheduleRestAPI"]
    InstallmentScheduleRestAPI ..> n_03_160_Get_Installment_Schedule : unnamed
    InstallmentScheduleRestAPI ..> n_03_170_Get_Next_Regular_Installment : unnamed
    Collection_system --> n_03_170_Get_Next_Regular_Installment : unnamed
    Collection_system --> n_03_160_Get_Installment_Schedule : unnamed
```
