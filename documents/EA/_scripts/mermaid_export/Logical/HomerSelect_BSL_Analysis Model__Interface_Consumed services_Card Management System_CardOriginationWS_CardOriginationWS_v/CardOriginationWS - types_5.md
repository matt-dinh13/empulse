# CardOriginationWS - types

```mermaid
classDiagram
    class Subdistrict["Subdistrict"]
    class TruncatedPan["TruncatedPan"]
    class CardHolderName["CardHolderName"]
    class Zip["Zip"]
    class Town["Town"]
    class Street["Street"]
    class SellerPlaceCode["SellerPlaceCode"]
    class Region["Region"]
    class HouseNumber["HouseNumber"]
    class FlatNumber["FlatNumber"]
    class District["District"]
    class BlockNumber["BlockNumber"]
    class PosDeliveryAddressDto["PosDeliveryAddressDto"]
    class AccountTypeDto["AccountTypeDto"]
    class ServiceCode["ServiceCode"]
    class CurrencyCodeType["CurrencyCodeType"]
    class ContractCode["ContractCode"]
    class AccountDto["AccountDto"]
    PosDeliveryAddressDto --> Subdistrict : unnamed
    PosDeliveryAddressDto --> Street : unnamed
    PosDeliveryAddressDto --> Region : unnamed
    PosDeliveryAddressDto --> HouseNumber : unnamed
    PosDeliveryAddressDto --> FlatNumber : unnamed
    PosDeliveryAddressDto --> BlockNumber : unnamed
    PosDeliveryAddressDto --> SellerPlaceCode : unnamed
    PosDeliveryAddressDto --> District : unnamed
    PosDeliveryAddressDto --> Zip : unnamed
    PosDeliveryAddressDto --> Town : unnamed
    AccountDto --> ContractCode : unnamed
    AccountDto --> CurrencyCodeType : unnamed
    AccountDto --> AccountTypeDto : unnamed
```
