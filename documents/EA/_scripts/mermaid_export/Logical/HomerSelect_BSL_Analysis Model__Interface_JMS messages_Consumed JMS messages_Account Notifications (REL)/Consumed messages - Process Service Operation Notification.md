# Consumed messages - Process Service Operation Notification

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Consumed JMS messages/Account Notifications (REL)
- **Diagram ID**: 161747
- **Elements**: 6
- **Connectors**: 4

```mermaid
classDiagram
    class n_08_294_Process_Account_response_on_Contract_Service_notifi["08.294 Process Account response on Contract Service notifications"]
    class ServiceOperationTypeDto["ServiceOperationTypeDto"]
    class ServiceResultTypeDto["ServiceResultTypeDto"]
    class ServiceOperationResultDto["ServiceOperationResultDto"]
    class AccountNotificationService["AccountNotificationService"]
    class ProcessServiceOperationNotificationRequest["ProcessServiceOperationNotificationRequest"]
    AccountNotificationService --> ProcessServiceOperationNotificationRequest : unnamed
    ProcessServiceOperationNotificationRequest ..> ServiceOperationResultDto : unnamed
    ServiceOperationResultDto ..> ServiceResultTypeDto : unnamed
    ServiceOperationResultDto ..> ServiceOperationTypeDto : unnamed
```
