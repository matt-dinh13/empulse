# InstallmentScheduleRestAPI v2 - Get Installments

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Installment schedule/InstallmentScheduleRestAPI v2_new
- **Diagram ID**: 164349
- **Elements**: 13
- **Connectors**: 13

```mermaid
classDiagram
    class PairedPayment["PairedPayment"]
    class InstallmentItem["InstallmentItem"]
    class RefundType["RefundType"]
    class RefundStatusType["RefundStatusType"]
    class RefundSourceSystemType["RefundSourceSystemType"]
    class RefundRecipientType["RefundRecipientType"]
    class RefundItem["RefundItem"]
    class Payment["Payment"]
    class Installment["Installment"]
    class GetInstallmentsResponse["GetInstallmentsResponse"]
    class GetInstallmentsRequest["GetInstallmentsRequest"]
    class n_03_160_Get_Installment_Schedule["03.160 Get Installment Schedule"]
    class InstallmentScheduleRestAPI["InstallmentScheduleRestAPI"]
    InstallmentScheduleRestAPI ..> n_03_160_Get_Installment_Schedule : unnamed
    InstallmentScheduleRestAPI ..> GetInstallmentsRequest : unnamed
    InstallmentScheduleRestAPI ..> GetInstallmentsResponse : unnamed
    GetInstallmentsResponse o-- Installment : unnamed
    GetInstallmentsResponse o-- Payment : unnamed
    GetInstallmentsResponse o-- RefundItem : unnamed
    PairedPayment ..> Payment : unnamed
    RefundItem ..> RefundRecipientType : unnamed
    RefundItem ..> RefundSourceSystemType : unnamed
    RefundItem ..> RefundStatusType : unnamed
    RefundItem ..> RefundType : unnamed
    Installment ..> InstallmentItem : unnamed
    InstallmentItem ..> PairedPayment : unnamed
```
