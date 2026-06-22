# CardInfoWS.FindCard

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardInfoWS/CardInfoWS_v1
- **Diagram ID**: 135377
- **Elements**: 10
- **Connectors**: 8

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
    FindCardResponse ..> CardDetailDto : External Reference
    CardDetailDto ..> CardDeliveryType : unnamed
    CardDetailDto ..> CardBlockDetailDto : unnamed
    CardDetailDto ..> PosDeliveryAddressDto : unnamed
    CardDetailDto ..> CardOperationDto : unnamed
```
