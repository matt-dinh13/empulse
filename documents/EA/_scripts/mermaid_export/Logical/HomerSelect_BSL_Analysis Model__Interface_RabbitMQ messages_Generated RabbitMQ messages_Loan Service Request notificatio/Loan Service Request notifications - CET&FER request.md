# Loan Service Request notifications - CET&FER request

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Loan Service Request notifications
- **Diagram ID**: 162001
- **Elements**: 9
- **Connectors**: 9

```mermaid
classDiagram
    class ContractSystemEventType["ContractSystemEventType"]
    class EarlyRepaymentData["EarlyRepaymentData"]
    class FullEarlyRepaymentRequestParameters["FullEarlyRepaymentRequestParameters"]
    class ContractEarlyTerminationRequestParameters["ContractEarlyTerminationRequestParameters"]
    class RequestParametersChoice["RequestParametersChoice"]
    class LoanServiceRequestStatusDto["LoanServiceRequestStatusDto"]
    class LoanServiceRequestStatusTypeDto["LoanServiceRequestStatusTypeDto"]
    class LoanServiceRequestTypeDto["LoanServiceRequestTypeDto"]
    class LoanServiceRequestRequest["LoanServiceRequestRequest"]
    LoanServiceRequestRequest ..> LoanServiceRequestTypeDto : unnamed
    LoanServiceRequestStatusDto ..> LoanServiceRequestStatusTypeDto : unnamed
    LoanServiceRequestRequest ..> LoanServiceRequestStatusDto : unnamed
    LoanServiceRequestRequest --> RequestParametersChoice : unnamed
    RequestParametersChoice --> ContractEarlyTerminationRequestParameters : unnamed
    RequestParametersChoice --> FullEarlyRepaymentRequestParameters : unnamed
    EarlyRepaymentData <|-- ContractEarlyTerminationRequestParameters : unnamed
    EarlyRepaymentData <|-- FullEarlyRepaymentRequestParameters : unnamed
    LoanServiceRequestRequest ..> ContractSystemEventType : unnamed
```
