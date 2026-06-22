# CardInfoWS - types

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardInfoWS/CardInfoWS_v1/Types
- **Diagram ID**: 135683
- **Elements**: 32
- **Connectors**: 33

```mermaid
classDiagram
    class Subdistrict["Subdistrict"]
    class EcommerceStatusDto["EcommerceStatusDto"]
    class TruncatedPan["TruncatedPan"]
    class CardStatusDto["CardStatusDto"]
    class CardTypeDto["CardTypeDto"]
    class ContractCode["ContractCode"]
    class AccountTypeDto["AccountTypeDto"]
    class AccountDto["AccountDto"]
    class CardDto["CardDto"]
    class PossitiveAmount["PossitiveAmount"]
    class CurrentValueChoice["CurrentValueChoice"]
    class CurrencyCodeType["CurrencyCodeType"]
    class PeriodDto["PeriodDto"]
    class AbstractLimitDto["AbstractLimitDto"]
    class PermanentLimitDto["PermanentLimitDto"]
    class TemporaryLimitDto["TemporaryLimitDto"]
    class PlasticDto["PlasticDto"]
    class PlasticStatusDto["PlasticStatusDto"]
    class CardBlockDetailDto["CardBlockDetailDto"]
    class CardOperationDto["CardOperationDto"]
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
    class CardDeliveryType["CardDeliveryType"]
    class CardDetailDto["CardDetailDto"]
    CardDto ..> CardTypeDto : unnamed
    PlasticDto ..> PlasticStatusDto : unnamed
    AbstractLimitDto <|-- TemporaryLimitDto : unnamed
    AbstractLimitDto <|-- PermanentLimitDto : unnamed
    AbstractLimitDto ..> CurrencyCodeType : unnamed
    AbstractLimitDto --> CurrentValueChoice : unnamed
    AccountDto ..> AccountTypeDto : unnamed
    CurrentValueChoice ..> PossitiveAmount : unnamed
    PosDeliveryAddressDto ..> SellerPlaceCode : unnamed
    CardDto ..> AccountDto : unnamed
    CardDto ..> CardStatusDto : unnamed
    CardDto ..> TruncatedPan : unnamed
    CardDto ..> EcommerceStatusDto : unnamed
    AccountDto ..> CurrencyCodeType : unnamed
    AccountDto ..> ContractCode : unnamed
    AbstractLimitDto ..> PeriodDto : unnamed
    PosDeliveryAddressDto ..> FlatNumber : unnamed
    CardDetailDto ..> TemporaryLimitDto : unnamed
    CardDetailDto ..> PlasticDto : unnamed
    CardDetailDto ..> PermanentLimitDto : unnamed
    CardDetailDto ..> CardDeliveryType : unnamed
    CardDetailDto ..> CardBlockDetailDto : unnamed
    CardDetailDto ..> PosDeliveryAddressDto : unnamed
    PosDeliveryAddressDto ..> Region : unnamed
    PosDeliveryAddressDto ..> Street : unnamed
    PosDeliveryAddressDto ..> Subdistrict : unnamed
    PosDeliveryAddressDto ..> District : unnamed
    PosDeliveryAddressDto ..> Town : unnamed
    PosDeliveryAddressDto ..> BlockNumber : unnamed
    PosDeliveryAddressDto ..> Zip : unnamed
    PosDeliveryAddressDto ..> HouseNumber : unnamed
    CardDto <|-- CardDetailDto : unnamed
    CardDetailDto ..> CardOperationDto : unnamed
```
