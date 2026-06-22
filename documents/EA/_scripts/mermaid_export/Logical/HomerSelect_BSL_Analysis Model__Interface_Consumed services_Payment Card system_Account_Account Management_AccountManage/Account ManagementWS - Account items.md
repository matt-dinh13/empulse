# Account ManagementWS - Account items

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)
- **Diagram ID**: 136838
- **Elements**: 12
- **Connectors**: 12

```mermaid
classDiagram
    class CancellationReasonDto["CancellationReasonDto"]
    class GetAccountItemsResponse["GetAccountItemsResponse"]
    class AccountItemDto["AccountItemDto"]
    class BasicAccountItemDto["BasicAccountItemDto"]
    class TransactionSubTypeDto["TransactionSubTypeDto"]
    class AccountItemAmountDirectionDto["AccountItemAmountDirectionDto"]
    class TariffItemCategoryDto["TariffItemCategoryDto"]
    class AccountItemEventTypeClassificationDto["AccountItemEventTypeClassificationDto"]
    class AccountItemSearchDto["AccountItemSearchDto"]
    class AccountManagementSearchBaseDto["AccountManagementSearchBaseDto"]
    class GetAccountItemsRequest["GetAccountItemsRequest"]
    class AccountManagementWS["AccountManagementWS"]
    AccountManagementWS ..> GetAccountItemsRequest : unnamed
    AccountManagementSearchBaseDto <|-- GetAccountItemsRequest : unnamed
    GetAccountItemsRequest ..> AccountItemSearchDto : unnamed
    AccountItemSearchDto ..> TariffItemCategoryDto : unnamed
    BasicAccountItemDto ..> AccountItemAmountDirectionDto : unnamed
    GetAccountItemsResponse ..> AccountItemDto : unnamed
    AccountManagementWS ..> GetAccountItemsResponse : unnamed
    AccountItemSearchDto ..> CancellationReasonDto : unnamed
    AccountItemDto ..> TariffItemCategoryDto : unnamed
    BasicAccountItemDto <|-- AccountItemDto : unnamed
    AccountItemDto ..> TransactionSubTypeDto : unnamed
    AccountItemDto ..> AccountItemEventTypeClassificationDto : unnamed
```
