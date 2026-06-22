# LoanAgreementNotification

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Generated JMS messages/Loan Agreement/Loan Agreement Notification
- **Diagram ID**: 139143
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class Loan_Agreement_Notification_LoanAgreementFailureNotification["Loan Agreement Notification : LoanAgreementFailureNotification - Common"]
    class LoanAgreementFailureNotification["LoanAgreementFailureNotification"]
    class SignAgreementDocumentationFailedNotification["SignAgreementDocumentationFailedNotification"]
    class PrepareAgreementDocumentationFailedNotification["PrepareAgreementDocumentationFailedNotification"]
    class PrepareAgreementDocumentationSuccessfulNotification["PrepareAgreementDocumentationSuccessfulNotification"]
    class SignAgreementDocumentationSuccessfulNotification["SignAgreementDocumentationSuccessfulNotification"]
    class LoanAgreementNotification["LoanAgreementNotification"]
    LoanAgreementNotification <|-- LoanAgreementFailureNotification : unnamed
    LoanAgreementNotification <|-- PrepareAgreementDocumentationSuccessfulNotification : unnamed
    LoanAgreementNotification <|-- SignAgreementDocumentationSuccessfulNotification : unnamed
    Loan_Agreement_Notification_LoanAgreementFailureNotification --> LoanAgreementFailureNotification : unnamed
    LoanAgreementFailureNotification <|-- SignAgreementDocumentationFailedNotification : unnamed
    LoanAgreementFailureNotification <|-- PrepareAgreementDocumentationFailedNotification : unnamed
```
