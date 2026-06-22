# InstallmentScheduleRestAPI v2 - Get Next Installment

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Installment schedule/InstallmentScheduleRestAPI v2_new
- **Diagram ID**: 164350
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class PairedPayment["PairedPayment"]
    class n_03_170_Get_Next_Regular_Installment["03.170 Get Next Regular Installment"]
    class InstallmentItem["InstallmentItem"]
    class Installment["Installment"]
    class GetNextInstallmentResponse["GetNextInstallmentResponse"]
    class GetNextInstallmentRequest["GetNextInstallmentRequest"]
    class InstallmentScheduleRestAPI["InstallmentScheduleRestAPI"]
    InstallmentScheduleRestAPI ..> GetNextInstallmentRequest : unnamed
    GetNextInstallmentResponse o-- Installment : unnamed
    InstallmentScheduleRestAPI ..> GetNextInstallmentResponse : unnamed
    Installment ..> InstallmentItem : unnamed
    InstallmentScheduleRestAPI ..> n_03_170_Get_Next_Regular_Installment : unnamed
    InstallmentItem ..> PairedPayment : unnamed
```
