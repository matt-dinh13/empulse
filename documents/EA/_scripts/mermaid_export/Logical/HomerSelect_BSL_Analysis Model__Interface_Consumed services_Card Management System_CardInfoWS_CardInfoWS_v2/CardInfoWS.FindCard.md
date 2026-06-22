# CardInfoWS.FindCard

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardInfoWS/CardInfoWS_v2
- **Diagram ID**: 135382
- **Elements**: 10
- **Connectors**: 7

```mermaid
classDiagram
    class GetPlasticsOfCardResultCodeDto["GetPlasticsOfCardResultCodeDto"]
    class CardBlockDetailDto["CardBlockDetailDto"]
    class CardOperationDto["CardOperationDto"]
    class PosDeliveryAddressDto["PosDeliveryAddressDto"]
    class CardDeliveryType["CardDeliveryType"]
    class CardDetailDto["CardDetailDto"]
    class FindCardResultCodeDto["FindCardResultCodeDto"]
    class FindCardResponse["FindCardResponse"]
    class FindCardRequest["FindCardRequest"]
    class CardInfoWS["CardInfoWS"]
    CardInfoWS ..> FindCardRequest : unnamed
    CardInfoWS ..> FindCardResponse : unnamed
    FindCardResponse ..> FindCardResultCodeDto : unnamed
    CardDetailDto ..> CardDeliveryType : unnamed
    CardDetailDto ..> PosDeliveryAddressDto : unnamed
    CardDetailDto ..> CardOperationDto : unnamed
    CardDetailDto ..> CardBlockDetailDto : unnamed
```
