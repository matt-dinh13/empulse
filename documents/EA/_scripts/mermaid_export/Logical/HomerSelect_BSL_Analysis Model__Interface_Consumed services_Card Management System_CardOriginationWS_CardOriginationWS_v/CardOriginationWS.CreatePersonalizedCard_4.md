# CardOriginationWS.CreatePersonalizedCard

```mermaid
classDiagram
    class TruncatedPan["TruncatedPan"]
    class Subdistrict["Subdistrict"]
    class AccountTypeDto["AccountTypeDto"]
    class CreatePersonalizedCardResultCodeDto["CreatePersonalizedCardResultCodeDto"]
    class CreatePersonalizedCardResponse["CreatePersonalizedCardResponse"]
    class Zip["Zip"]
    class Town["Town"]
    class Street["Street"]
    class SellerPlaceCode["SellerPlaceCode"]
    class Region["Region"]
    class HouseNumber["HouseNumber"]
    class FlatNumber["FlatNumber"]
    class District["District"]
    class CurrencyCodeType["CurrencyCodeType"]
    class ContractCode["ContractCode"]
    class BlockNumber["BlockNumber"]
    class AccountDto["AccountDto"]
    class CardDeliveryType["CardDeliveryType"]
    class ServiceCode["ServiceCode"]
    class PosDeliveryAddressDto["PosDeliveryAddressDto"]
    class CreatePersonalizedCardRequest["CreatePersonalizedCardRequest"]
    class CardOriginationWS["CardOriginationWS"]
    PosDeliveryAddressDto --> FlatNumber : unnamed
    PosDeliveryAddressDto --> Subdistrict : unnamed
    AccountDto --> AccountTypeDto : unnamed
    CreatePersonalizedCardResponse --> CreatePersonalizedCardResultCodeDto : unnamed
    CardOriginationWS --> CreatePersonalizedCardResponse : unnamed
    PosDeliveryAddressDto --> Zip : unnamed
    PosDeliveryAddressDto --> Town : unnamed
    PosDeliveryAddressDto --> Street : unnamed
    PosDeliveryAddressDto --> SellerPlaceCode : unnamed
    CreatePersonalizedCardResponse --> TruncatedPan : unnamed
    PosDeliveryAddressDto --> HouseNumber : unnamed
    CardOriginationWS --> CreatePersonalizedCardRequest : unnamed
    PosDeliveryAddressDto --> District : unnamed
    AccountDto --> CurrencyCodeType : unnamed
    AccountDto --> ContractCode : unnamed
    PosDeliveryAddressDto --> BlockNumber : unnamed
    CreatePersonalizedCardRequest --> AccountDto : unnamed
    CreatePersonalizedCardRequest --> CardDeliveryType : unnamed
    CreatePersonalizedCardRequest --> ServiceCode : unnamed
    CreatePersonalizedCardRequest --> PosDeliveryAddressDto : unnamed
    PosDeliveryAddressDto --> Region : unnamed
```
