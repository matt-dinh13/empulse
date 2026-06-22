# Structures

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account UI/Account UI - Structures
- **Diagram ID**: 107524
- **Elements**: 20
- **Connectors**: 14

```mermaid
classDiagram
    class order["order"]
    class sort["sort"]
    class AccountUISearchResponseBaseDto["AccountUISearchResponseBaseDto"]
    class AccountUIResponseBaseDto["AccountUIResponseBaseDto"]
    class AccountItemSortProperty["AccountItemSortProperty"]
    class PageDto["PageDto"]
    class Direction["Direction"]
    class BillingPeriodBalanceSortProperty["BillingPeriodBalanceSortProperty"]
    class order["order"]
    class sort["sort"]
    class BillingPeriodBalancePageDto["BillingPeriodBalancePageDto"]
    class AccountItemPageDto["AccountItemPageDto"]
    class AccountItemAmountDirectionDto["AccountItemAmountDirectionDto"]
    class InterestDetailDto["InterestDetailDto"]
    class BasicAccountItemDto["BasicAccountItemDto"]
    class AccountUISearchBaseDto["AccountUISearchBaseDto"]
    class PairedInstalmentDto["PairedInstalmentDto"]
    class InstalmentHeadDto["InstalmentHeadDto"]
    class InstalmentDto["InstalmentDto"]
    class BillingPeriodBalanceUISearchDto["BillingPeriodBalanceUISearchDto"]
    InstalmentHeadDto ..> InstalmentDto : unnamed
    AccountUISearchBaseDto <|-- AccountItemPageDto : unnamed
    AccountUISearchBaseDto <|-- BillingPeriodBalancePageDto : unnamed
    BasicAccountItemDto ..> AccountItemAmountDirectionDto : unnamed
    BillingPeriodBalancePageDto ..> sort : unnamed
    sort ..> order : unnamed
    order ..> BillingPeriodBalanceSortProperty : unnamed
    order ..> Direction : unnamed
    order ..> Direction : unnamed
    AccountUISearchResponseBaseDto ..> PageDto : unnamed
    order ..> AccountItemSortProperty : unnamed
    AccountUIResponseBaseDto <|-- AccountUISearchResponseBaseDto : unnamed
    AccountItemPageDto ..> sort : unnamed
    sort ..> order : unnamed
```
