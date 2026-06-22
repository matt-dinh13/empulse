# InstallmentScheduleRestAPI v2 - Get Detail

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Installment schedule/InstallmentScheduleRestAPI v2_new
- **Diagram ID**: 164348
- **Elements**: 13
- **Connectors**: 13

```mermaid
classDiagram
    class RefundType["RefundType"]
    class RefundStatusType["RefundStatusType"]
    class RefundSourceSystemType["RefundSourceSystemType"]
    class RefundRecipientType["RefundRecipientType"]
    class PairedPayment["PairedPayment"]
    class InstallmentItem["InstallmentItem"]
    class Installment["Installment"]
    class Payment["Payment"]
    class RefundItem["RefundItem"]
    class InstallmentScheduleDetail["InstallmentScheduleDetail"]
    class GetDetailResponse["GetDetailResponse"]
    class GetDetailRequest["GetDetailRequest"]
    class InstallmentScheduleRestAPI["InstallmentScheduleRestAPI"]
    InstallmentScheduleRestAPI ..> GetDetailRequest : unnamed
    GetDetailResponse o-- RefundItem : unnamed
    GetDetailResponse o-- Installment : unnamed
    InstallmentScheduleRestAPI ..> GetDetailResponse : unnamed
    GetDetailResponse o-- Payment : unnamed
    GetDetailResponse o-- InstallmentScheduleDetail : unnamed
    PairedPayment ..> Payment : unnamed
    Installment ..> InstallmentItem : unnamed
    InstallmentItem ..> PairedPayment : unnamed
    RefundItem ..> RefundRecipientType : unnamed
    RefundItem ..> RefundSourceSystemType : unnamed
    RefundItem ..> RefundStatusType : unnamed
    RefundItem ..> RefundType : unnamed
```
