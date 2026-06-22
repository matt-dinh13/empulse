# CardOriginationWS.ConfirmPersonalizedCard

```mermaid
classDiagram
    class ConfirmPersonalizedCardRequest["ConfirmPersonalizedCardRequest"]
    class ConfirmPersonalizedCardResultCodeDto["ConfirmPersonalizedCardResultCodeDto"]
    class ConfirmPersonalizedCardResponse["ConfirmPersonalizedCardResponse"]
    class CardOriginationWS["CardOriginationWS"]
    CardOriginationWS --> ConfirmPersonalizedCardResponse : External Reference
    CardOriginationWS --> ConfirmPersonalizedCardRequest : External Reference
    ConfirmPersonalizedCardResponse --> ConfirmPersonalizedCardResultCodeDto : unnamed
```
