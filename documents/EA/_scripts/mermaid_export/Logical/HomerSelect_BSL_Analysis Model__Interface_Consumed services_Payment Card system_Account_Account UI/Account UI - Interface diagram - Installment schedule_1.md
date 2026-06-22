# Account UI - Interface diagram - Installment schedule

```mermaid
classDiagram
    class n_03_021_Show_REL_installment_schedule["03.021 Show REL installment schedule"]
    class TransactionSourceIdDto["TransactionSourceIdDto"]
    class AccountUIWS["AccountUIWS"]
    class TransactionSourceCodeType["TransactionSourceCodeType"]
    class AccountItemAmountDirectionDto["AccountItemAmountDirectionDto"]
    class InstalmentTypeDto["InstalmentTypeDto"]
    class TransactionTypeDto["TransactionTypeDto"]
    class MoneyDto["MoneyDto"]
    class BasicAccountItemDto["BasicAccountItemDto"]
    class PairedInstalmentDto["PairedInstalmentDto"]
    class InstalmentDto["InstalmentDto"]
    class InstalmentHeadDto["InstalmentHeadDto"]
    class InstalmentPaymentMatchRequest["InstalmentPaymentMatchRequest"]
    class InstalmentPaymentMatchResponse["InstalmentPaymentMatchResponse"]
    class DateRangeDto["DateRangeDto"]
    AccountUIWS --> n_03_021_Show_REL_installment_schedule : unnamed
    AccountUIWS --> InstalmentPaymentMatchResponse : unnamed
    InstalmentPaymentMatchResponse --> BasicAccountItemDto : unnamed
    InstalmentPaymentMatchResponse --> PairedInstalmentDto : unnamed
    InstalmentPaymentMatchResponse --> InstalmentHeadDto : unnamed
    AccountUIWS --> InstalmentPaymentMatchRequest : unnamed
    TransactionSourceIdDto --> TransactionSourceCodeType : unnamed
    BasicAccountItemDto --> MoneyDto : unnamed
    BasicAccountItemDto --> TransactionSourceIdDto : unnamed
    BasicAccountItemDto --> AccountItemAmountDirectionDto : unnamed
    BasicAccountItemDto --> TransactionTypeDto : unnamed
    PairedInstalmentDto --> MoneyDto : unnamed
    InstalmentHeadDto --> InstalmentTypeDto : unnamed
    InstalmentHeadDto --> InstalmentDto : unnamed
    InstalmentDto --> MoneyDto : unnamed
    InstalmentDto --> MoneyDto : unnamed
```
