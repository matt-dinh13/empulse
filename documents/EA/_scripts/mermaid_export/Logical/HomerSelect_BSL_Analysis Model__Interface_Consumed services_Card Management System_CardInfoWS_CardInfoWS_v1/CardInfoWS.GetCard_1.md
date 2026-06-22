# CardInfoWS.GetCard

```mermaid
classDiagram
    class Subdistrict["Subdistrict"]
    class CardDeliveryType["CardDeliveryType"]
    class PlasticStatusDto["PlasticStatusDto"]
    class PeriodDto["PeriodDto"]
    class EcommerceStatusDto["EcommerceStatusDto"]
    class CardStatusDto["CardStatusDto"]
    class CardOperationDto["CardOperationDto"]
    class AccountTypeDto["AccountTypeDto"]
    class PlasticDto["PlasticDto"]
    class Zip["Zip"]
    class TruncatedPan["TruncatedPan"]
    class Town["Town"]
    class Street["Street"]
    class SellerPlaceCode["SellerPlaceCode"]
    class Region["Region"]
    class PosDeliveryAddressDto["PosDeliveryAddressDto"]
    class PermanentLimitDto["PermanentLimitDto"]
    class HouseNumber["HouseNumber"]
    class FlatNumber["FlatNumber"]
    class District["District"]
    class CurrentValueChoice["CurrentValueChoice"]
    class CardTypeDto["CardTypeDto"]
    class CardDto["CardDto"]
    class CardDetailDto["CardDetailDto"]
    class CardBlockDetailDto["CardBlockDetailDto"]
    class BlockNumber["BlockNumber"]
    class AccountDto["AccountDto"]
    class AbstractLimitDto["AbstractLimitDto"]
    class TemporaryLimitDto["TemporaryLimitDto"]
    class GetCardResponse["GetCardResponse"]
    class GetCardRequest["GetCardRequest"]
    class CardInfoWS["CardInfoWS"]
    CardInfoWS --> GetCardResponse : unnamed
    CardInfoWS --> GetCardRequest : External Reference
    GetCardResponse --> CardDetailDto : unnamed
    CardDetailDto --> CardDto : unnamed
    CardDto --> CardTypeDto : unnamed
    CardDto --> AccountDto : unnamed
    CardDto --> CardStatusDto : unnamed
    CardDto --> TruncatedPan : unnamed
    CardDto --> EcommerceStatusDto : unnamed
    PosDeliveryAddressDto --> Street : unnamed
    PosDeliveryAddressDto --> FlatNumber : unnamed
    TemporaryLimitDto --> AbstractLimitDto : unnamed
    CardDetailDto --> TemporaryLimitDto : unnamed
    CardDetailDto --> PlasticDto : unnamed
    PlasticDto --> PlasticStatusDto : unnamed
    CardDetailDto --> PermanentLimitDto : unnamed
    CardDetailDto --> CardDeliveryType : unnamed
    CardDetailDto --> CardBlockDetailDto : unnamed
    CardDetailDto --> PosDeliveryAddressDto : unnamed
    CardDetailDto --> CardOperationDto : unnamed
    PosDeliveryAddressDto --> District : unnamed
    AbstractLimitDto --> CurrentValueChoice : unnamed
    PermanentLimitDto --> AbstractLimitDto : unnamed
    AbstractLimitDto --> PeriodDto : unnamed
    PosDeliveryAddressDto --> Town : unnamed
    PosDeliveryAddressDto --> BlockNumber : unnamed
    AccountDto --> AccountTypeDto : unnamed
    PosDeliveryAddressDto --> Zip : unnamed
    PosDeliveryAddressDto --> HouseNumber : unnamed
    PosDeliveryAddressDto --> SellerPlaceCode : unnamed
    PosDeliveryAddressDto --> Subdistrict : unnamed
    PosDeliveryAddressDto --> Region : unnamed
```
