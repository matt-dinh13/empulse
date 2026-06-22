# CardOriginationWS.CreatePersonalizedCard

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v1
- **Diagram ID**: 135398
- **Elements**: 21
- **Connectors**: 20

```mermaid
classDiagram
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
    CardOriginationWS ..> CreatePersonalizedCardResponse : External Reference
    CardOriginationWS ..> CreatePersonalizedCardRequest : External Reference
    CreatePersonalizedCardRequest ..> PosDeliveryAddressDto : unnamed
    CreatePersonalizedCardRequest ..> AccountDto : unnamed
    CreatePersonalizedCardRequest ..> ServiceCode : unnamed
    CreatePersonalizedCardRequest ..> CardDeliveryType : unnamed
    CreatePersonalizedCardResponse ..> CreatePersonalizedCardResultCodeDto : unnamed
    AccountDto ..> ContractCode : unnamed
    AccountDto ..> CurrencyCodeType : unnamed
    AccountDto ..> AccountTypeDto : unnamed
    PosDeliveryAddressDto ..> Region : unnamed
    PosDeliveryAddressDto ..> HouseNumber : unnamed
    PosDeliveryAddressDto ..> FlatNumber : unnamed
    PosDeliveryAddressDto ..> BlockNumber : unnamed
    PosDeliveryAddressDto ..> Subdistrict : unnamed
    PosDeliveryAddressDto ..> Street : unnamed
    PosDeliveryAddressDto ..> SellerPlaceCode : unnamed
    PosDeliveryAddressDto ..> District : unnamed
    PosDeliveryAddressDto ..> Zip : unnamed
    PosDeliveryAddressDto ..> Town : unnamed
```
