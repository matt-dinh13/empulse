# ProcessAccountClosureResult

```mermaid
classDiagram
    class n_01_740_Process_notification_about_credit_account_closure["01.740 Process notification about credit account closure "]
    class AccountClosureResultTypeDto["AccountClosureResultTypeDto"]
    class AccountClosureResultDto["AccountClosureResultDto"]
    class ADD_AccountNotificationService["{ADD}AccountNotificationService"]
    class ProcessAccountClosureResultRequest["ProcessAccountClosureResultRequest"]
    ADD_AccountNotificationService --> n_01_740_Process_notification_about_credit_account_closure : unnamed
    AccountClosureResultDto --> AccountClosureResultTypeDto : unnamed
    ProcessAccountClosureResultRequest --> AccountClosureResultDto : unnamed
    ADD_AccountNotificationService --> ProcessAccountClosureResultRequest : unnamed
```
