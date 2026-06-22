# CardOriginationWS.ConfirmInstantCard

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v3
- **Diagram ID**: 135416
- **Elements**: 21
- **Connectors**: 20

```mermaid
classDiagram
    class Subdistrict["Subdistrict"]
    class ConfirmInstantCardResultCodeDto["ConfirmInstantCardResultCodeDto"]
    class ConfirmInstantCardResponse["ConfirmInstantCardResponse"]
    class AccountTypeDto["AccountTypeDto"]
    class CurrencyCodeType["CurrencyCodeType"]
    class ContractCode["ContractCode"]
    class AccountDto["AccountDto"]
    class CardDeliveryType["CardDeliveryType"]
    class Zip["Zip"]
    class Town["Town"]
    class Street["Street"]
    class SellerPlaceCode["SellerPlaceCode"]
    class Region["Region"]
    class PosDeliveryAddressDto["PosDeliveryAddressDto"]
    class HouseNumber["HouseNumber"]
    class FlatNumber["FlatNumber"]
    class District["District"]
    class BlockNumber["BlockNumber"]
    class ServiceCode["ServiceCode"]
    class ConfirmInstantCardRequest["ConfirmInstantCardRequest"]
    class CardOriginationWS["CardOriginationWS"]
    PosDeliveryAddressDto ..> Street : unnamed
    ConfirmInstantCardResponse ..> ConfirmInstantCardResultCodeDto : unnamed
    CardOriginationWS ..> ConfirmInstantCardResponse : unnamed
    AccountDto ..> AccountTypeDto : unnamed
    AccountDto ..> CurrencyCodeType : unnamed
    AccountDto ..> ContractCode : unnamed
    ConfirmInstantCardRequest ..> AccountDto : unnamed
    ConfirmInstantCardRequest ..> CardDeliveryType : unnamed
    PosDeliveryAddressDto ..> Subdistrict : unnamed
    PosDeliveryAddressDto ..> Town : unnamed
    CardOriginationWS ..> ConfirmInstantCardRequest : unnamed
    PosDeliveryAddressDto ..> SellerPlaceCode : unnamed
    PosDeliveryAddressDto ..> Region : unnamed
    ConfirmInstantCardRequest ..> PosDeliveryAddressDto : unnamed
    PosDeliveryAddressDto ..> HouseNumber : unnamed
    PosDeliveryAddressDto ..> FlatNumber : unnamed
    PosDeliveryAddressDto ..> District : unnamed
    PosDeliveryAddressDto ..> BlockNumber : unnamed
    ConfirmInstantCardRequest ..> ServiceCode : unnamed
    PosDeliveryAddressDto ..> Zip : unnamed
```
