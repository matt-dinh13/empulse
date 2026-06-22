# CardModificationWS.ChangeEcommerceStatus

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardModificationWS/CardModificationWS_v1
- **Diagram ID**: 135374
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class ChangeEcommerceStatusResponseResultCodeDto["ChangeEcommerceStatusResponseResultCodeDto"]
    class EcommerceStatusDto["EcommerceStatusDto"]
    class ChangeEcommerceStatusResponse["ChangeEcommerceStatusResponse"]
    class ChangeEcommerceStatusRequest["ChangeEcommerceStatusRequest"]
    class CardModificationWS["CardModificationWS"]
    CardModificationWS ..> ChangeEcommerceStatusRequest : External Reference
    CardModificationWS ..> ChangeEcommerceStatusResponse : External Reference
    ChangeEcommerceStatusRequest ..> EcommerceStatusDto : unnamed
    ChangeEcommerceStatusResponse ..> ChangeEcommerceStatusResponseResultCodeDto : unnamed
```
