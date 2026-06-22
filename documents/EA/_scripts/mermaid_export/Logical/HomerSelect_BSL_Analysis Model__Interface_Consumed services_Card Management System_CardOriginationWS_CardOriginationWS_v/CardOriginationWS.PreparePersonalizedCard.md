# CardOriginationWS.PreparePersonalizedCard

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v3
- **Diagram ID**: 135420
- **Elements**: 19
- **Connectors**: 18

```mermaid
classDiagram
    class Zip["Zip"]
    class Town["Town"]
    class Subdistrict["Subdistrict"]
    class Street["Street"]
    class Region["Region"]
    class HouseNumber["HouseNumber"]
    class FlatNumber["FlatNumber"]
    class District["District"]
    class BlockNumber["BlockNumber"]
    class PreparePersonalizedCardResultCodeDto["PreparePersonalizedCardResultCodeDto"]
    class PreparePersonalizedCardResponse["PreparePersonalizedCardResponse"]
    class SignatureDeliveryAddressDto["SignatureDeliveryAddressDto"]
    class ContractCode["ContractCode"]
    class CurrencyCodeType["CurrencyCodeType"]
    class ServiceCode["ServiceCode"]
    class AccountTypeDto["AccountTypeDto"]
    class AccountDto["AccountDto"]
    class PreparePersonalizedCardRequest["PreparePersonalizedCardRequest"]
    class CardOriginationWS["CardOriginationWS"]
    PreparePersonalizedCardResponse ..> PreparePersonalizedCardResultCodeDto : unnamed
    SignatureDeliveryAddressDto ..> Town : unnamed
    SignatureDeliveryAddressDto ..> Subdistrict : unnamed
    SignatureDeliveryAddressDto ..> Street : unnamed
    SignatureDeliveryAddressDto ..> Region : unnamed
    SignatureDeliveryAddressDto ..> HouseNumber : unnamed
    SignatureDeliveryAddressDto ..> FlatNumber : unnamed
    SignatureDeliveryAddressDto ..> Zip : unnamed
    SignatureDeliveryAddressDto ..> BlockNumber : unnamed
    CardOriginationWS ..> PreparePersonalizedCardRequest : unnamed
    CardOriginationWS ..> PreparePersonalizedCardResponse : unnamed
    PreparePersonalizedCardRequest ..> SignatureDeliveryAddressDto : unnamed
    AccountDto ..> ContractCode : unnamed
    AccountDto ..> CurrencyCodeType : unnamed
    PreparePersonalizedCardRequest ..> ServiceCode : unnamed
    AccountDto ..> AccountTypeDto : unnamed
    PreparePersonalizedCardRequest ..> AccountDto : unnamed
    SignatureDeliveryAddressDto ..> District : unnamed
```
