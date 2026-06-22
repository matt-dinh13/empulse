# CardInfoWS.GetCards

```mermaid
classDiagram
    class GetCardsResponseResultCodeDto["GetCardsResponseResultCodeDto"]
    class TruncatedPan["TruncatedPan"]
    class CardStatusDto["CardStatusDto"]
    class CardTypeDto["CardTypeDto"]
    class AccountDto["AccountDto"]
    class EcommerceStatusDto["EcommerceStatusDto"]
    class CardDto["CardDto"]
    class PageDto["PageDto"]
    class GetCardsResponse["GetCardsResponse"]
    class GetCardsRequest["GetCardsRequest"]
    class CardInfoWS["CardInfoWS"]
    CardInfoWS --> GetCardsRequest : unnamed
    CardInfoWS --> GetCardsResponse : unnamed
    GetCardsResponse --> PageDto : unnamed
    GetCardsResponse --> CardDto : unnamed
    CardDto --> EcommerceStatusDto : unnamed
    CardDto --> AccountDto : unnamed
    CardDto --> CardTypeDto : unnamed
    CardDto --> CardStatusDto : unnamed
    CardDto --> TruncatedPan : unnamed
    GetCardsResponse --> GetCardsResponseResultCodeDto : unnamed
```
