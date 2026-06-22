# Account UI - Interface diagram - Transactions

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account UI
- **Diagram ID**: 67279
- **Elements**: 18
- **Connectors**: 18

```mermaid
classDiagram
    class Types_Types["Types : Types"]
    class AccountItemDto["AccountItemDto"]
    class CancellationReasonDto["CancellationReasonDto"]
    class BasicAccountItemDto["BasicAccountItemDto"]
    class AttributesDto["AttributesDto"]
    class TransactionSourceIdDto["TransactionSourceIdDto"]
    class TransactionSubTypeDto["TransactionSubTypeDto"]
    class AccountItemAmountDirectionDto["AccountItemAmountDirectionDto"]
    class InterestDetailDto["InterestDetailDto"]
    class GetInterestAccountItemDetailResponse["GetInterestAccountItemDetailResponse"]
    class GetInterestAccountItemDetailRequest["GetInterestAccountItemDetailRequest"]
    class AccountUISearchBaseDto["AccountUISearchBaseDto"]
    class AccountItemSearchDto["AccountItemSearchDto"]
    class TariffItemCategoryDto["TariffItemCategoryDto"]
    class AccountItemEventTypeClassificationDto["AccountItemEventTypeClassificationDto"]
    class GetAccountItemsResponse["GetAccountItemsResponse"]
    class GetAccountItemsRequest["GetAccountItemsRequest"]
    class AccountUIWS["AccountUIWS"]
    AccountUIWS ..> GetInterestAccountItemDetailResponse : unnamed
    GetInterestAccountItemDetailResponse ..> InterestDetailDto : unnamed
    AccountUIWS ..> GetAccountItemsRequest : unnamed
    AccountUIWS ..> GetInterestAccountItemDetailRequest : unnamed
    GetAccountItemsRequest ..> AccountItemSearchDto : unnamed
    AccountUIWS ..> GetAccountItemsResponse : unnamed
    AccountItemSearchDto ..> TariffItemCategoryDto : unnamed
    AccountItemSearchDto ..> CancellationReasonDto : unnamed
    BasicAccountItemDto ..> TransactionSourceIdDto : unnamed
    BasicAccountItemDto ..> AccountItemAmountDirectionDto : unnamed
    InterestDetailDto ..> TransactionSourceIdDto : unnamed
    InterestDetailDto ..> AttributesDto : unnamed
    AccountItemSearchDto <|-- AccountUISearchBaseDto : unnamed
    AccountItemDto ..> TransactionSubTypeDto : unnamed
    AccountItemDto ..> AccountItemEventTypeClassificationDto : unnamed
    AccountItemDto ..> TariffItemCategoryDto : unnamed
    BasicAccountItemDto <|-- AccountItemDto : unnamed
    AttributesDto --> Types_Types : unnamed
```
