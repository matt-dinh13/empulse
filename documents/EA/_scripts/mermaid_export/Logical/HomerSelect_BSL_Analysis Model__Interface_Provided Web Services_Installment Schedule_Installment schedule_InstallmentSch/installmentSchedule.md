# installmentSchedule

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Installment schedule/InstallmentScheduleRestAPIv1_new
- **Diagram ID**: 154920
- **Elements**: 26
- **Connectors**: 32

```mermaid
classDiagram
    class ItemToPay["ItemToPay"]
    class Amount["Amount"]
    class PayableItem["PayableItem"]
    class Payment["Payment"]
    class SimulateFERServiceResponse["SimulateFERServiceResponse"]
    class SimulateFERService["SimulateFERService"]
    class InstallmentScheduleDetail["InstallmentScheduleDetail"]
    class GetDetailResponse["GetDetailResponse"]
    class Collection_system["Collection system"]
    class RefundType["RefundType"]
    class RefundStatusType["RefundStatusType"]
    class RefundSourceSystemType["RefundSourceSystemType"]
    class RefundRecipientType["RefundRecipientType"]
    class RefundItem["RefundItem"]
    class Payment["Payment"]
    class PairedPayment["PairedPayment"]
    class InstallmentItem["InstallmentItem"]
    class GetNextInstallmentResponse["GetNextInstallmentResponse"]
    class GetInstallmentsResponse["GetInstallmentsResponse"]
    class Installment["Installment"]
    class n_03_170_Get_Next_Regular_Installment["03.170 Get Next Regular Installment"]
    class n_03_160_Get_Installment_Schedule["03.160 Get Installment Schedule"]
    class GetNextInstallment["GetNextInstallment"]
    class GetInstallments["GetInstallments"]
    class GetDetail["GetDetail"]
    class GetInstallmentSchedule["GetInstallmentSchedule"]
    ItemToPay ..> PayableItem : unnamed
    RefundItem ..> RefundRecipientType : unnamed
    RefundItem ..> RefundSourceSystemType : unnamed
    RefundItem ..> RefundStatusType : unnamed
    GetInstallmentsResponse o-- RefundItem : unnamed
    GetDetailResponse o-- Payment : unnamed
    RefundItem ..> RefundType : unnamed
    PairedPayment ..> Payment : unnamed
    GetDetailResponse o-- InstallmentScheduleDetail : unnamed
    SimulateFERServiceResponse o-- Payment : unnamed
    Payment ..> ItemToPay : unnamed
    PayableItem ..> Amount : unnamed
    ItemToPay ..> Amount : unnamed
    GetDetailResponse o-- RefundItem : unnamed
    GetInstallmentSchedule ..> GetDetailResponse : unnamed
    GetInstallmentSchedule ..> GetInstallmentsResponse : unnamed
    GetInstallmentSchedule ..> GetNextInstallment : unnamed
    GetInstallmentSchedule ..> GetDetail : unnamed
    GetInstallmentSchedule ..> n_03_170_Get_Next_Regular_Installment : unnamed
    GetInstallmentSchedule ..> GetNextInstallmentResponse : unnamed
    GetInstallmentsResponse o-- Payment : unnamed
    GetInstallmentSchedule ..> n_03_160_Get_Installment_Schedule : unnamed
    GetInstallmentSchedule ..> SimulateFERServiceResponse : unnamed
    GetInstallmentSchedule ..> GetInstallments : unnamed
    GetNextInstallmentResponse o-- Installment : unnamed
    GetInstallmentsResponse o-- Installment : unnamed
    GetDetailResponse o-- Installment : unnamed
    Installment ..> InstallmentItem : unnamed
    InstallmentItem ..> PairedPayment : unnamed
    GetInstallmentSchedule ..> SimulateFERService : unnamed
    Collection_system --> n_03_170_Get_Next_Regular_Installment : unnamed
    Collection_system --> n_03_160_Get_Installment_Schedule : unnamed
```
