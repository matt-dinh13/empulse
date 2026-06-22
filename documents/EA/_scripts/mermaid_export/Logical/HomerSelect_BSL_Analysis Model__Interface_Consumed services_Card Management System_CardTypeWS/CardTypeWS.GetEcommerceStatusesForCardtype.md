# CardTypeWS.GetEcommerceStatusesForCardtype

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardTypeWS
- **Diagram ID**: 95750
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class EcommerceStatusDto["EcommerceStatusDto"]
    class AvailableEcommerceStatusDto["AvailableEcommerceStatusDto"]
    class EcommerceStatusesForCardTypeResponseResultCodeDto["EcommerceStatusesForCardTypeResponseResultCodeDto"]
    class GetEcommerceStatusesForCardtypeRequest["GetEcommerceStatusesForCardtypeRequest"]
    class GetEcommerceStatusesForCardtypeResponse["GetEcommerceStatusesForCardtypeResponse"]
    class CardTypeWS["CardTypeWS"]
    CardTypeWS ..> GetEcommerceStatusesForCardtypeResponse : External Reference
    CardTypeWS ..> GetEcommerceStatusesForCardtypeRequest : External Reference
    GetEcommerceStatusesForCardtypeResponse ..> AvailableEcommerceStatusDto : unnamed
    GetEcommerceStatusesForCardtypeResponse ..> EcommerceStatusesForCardTypeResponseResultCodeDto : unnamed
    AvailableEcommerceStatusDto ..> EcommerceStatusDto : unnamed
```
