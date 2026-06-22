# CardInfoWS.GetPlasticsOfCard

```mermaid
classDiagram
    class GetPlasticsOfCardResultCodeDto["GetPlasticsOfCardResultCodeDto"]
    class PlasticDto["PlasticDto"]
    class PlasticStatusDto["PlasticStatusDto"]
    class PlasticStatusDto["PlasticStatusDto"]
    class PlasticDto["PlasticDto"]
    class GetPlasticsOfCardResponse["GetPlasticsOfCardResponse"]
    class GetPlasticsOfCardRequest["GetPlasticsOfCardRequest"]
    class CardInfoWS["CardInfoWS"]
    CardInfoWS --> GetPlasticsOfCardRequest : unnamed
    CardInfoWS --> GetPlasticsOfCardResponse : unnamed
    GetPlasticsOfCardResponse --> PlasticDto : unnamed
    PlasticDto --> PlasticStatusDto : unnamed
    PlasticDto --> PlasticStatusDto : unnamed
    GetPlasticsOfCardResponse --> PlasticDto : unnamed
    GetPlasticsOfCardResponse --> GetPlasticsOfCardResultCodeDto : unnamed
```
