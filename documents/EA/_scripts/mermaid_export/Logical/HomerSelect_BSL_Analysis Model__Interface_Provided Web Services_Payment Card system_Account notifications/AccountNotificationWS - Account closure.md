# AccountNotificationWS - Account closure

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payment Card system/Account notifications
- **Diagram ID**: 107062
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class AccountClosureResultTypeDto["AccountClosureResultTypeDto"]
    class AccountClosureResultDto["AccountClosureResultDto"]
    class ProcessAccountClosureResultResponse["ProcessAccountClosureResultResponse"]
    class ProcessAccountClosureResultRequest["ProcessAccountClosureResultRequest"]
    class AccountNotificationWS["AccountNotificationWS"]
    unnamed --> AccountNotificationWS : unnamed
    AccountNotificationWS ..> ProcessAccountClosureResultRequest : unnamed
    AccountNotificationWS ..> ProcessAccountClosureResultResponse : unnamed
    ProcessAccountClosureResultRequest ..> AccountClosureResultDto : unnamed
    AccountClosureResultDto ..> AccountClosureResultTypeDto : unnamed
```
