# CardModificationWS.ChangeEcommerceStatus

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardModificationWS/CardModificationWS_v2
- **Diagram ID**: 135392
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class ChangeEcommerceStatusResponseResultCodeDto["ChangeEcommerceStatusResponseResultCodeDto"]
    class EcommerceStatusDto["EcommerceStatusDto"]
    class ADD_ChangeEcommerceStatusResponseResultCodeDto["{ADD}ChangeEcommerceStatusResponseResultCodeDto"]
    class ChangeEcommerceStatusResponse["ChangeEcommerceStatusResponse"]
    class ChangeEcommerceStatusRequest["ChangeEcommerceStatusRequest"]
    class CardModificationWS["CardModificationWS"]
    CardModificationWS ..> ChangeEcommerceStatusRequest : unnamed
    CardModificationWS ..> ChangeEcommerceStatusResponse : unnamed
    ChangeEcommerceStatusResponse ..> ADD_ChangeEcommerceStatusResponseResultCodeDto : unnamed
    ChangeEcommerceStatusRequest ..> EcommerceStatusDto : unnamed
    ChangeEcommerceStatusResponse ..> ChangeEcommerceStatusResponseResultCodeDto : unnamed
```
