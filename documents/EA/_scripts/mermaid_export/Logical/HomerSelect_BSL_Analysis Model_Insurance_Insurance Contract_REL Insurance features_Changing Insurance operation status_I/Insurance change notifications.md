# Insurance change notifications

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/REL Insurance features/Changing Insurance operation status/Interface Provided/Generated Messages/Insurance change notifications
- **Diagram ID**: 161987
- **Elements**: 10
- **Connectors**: 9

```mermaid
classDiagram
    class ServiceOperationParameter["ServiceOperationParameter"]
    class switchServiceOperationStatusParametersDto["switchServiceOperationStatusParametersDto"]
    class RequestParametersChoice["RequestParametersChoice"]
    class ServiceOperationStatusTypeDto["ServiceOperationStatusTypeDto"]
    class ContractSystemEventType["ContractSystemEventType"]
    class LoanServiceRequestStatusDto["LoanServiceRequestStatusDto"]
    class LoanServiceRequestStatusTypeDto["LoanServiceRequestStatusTypeDto"]
    class LoanServiceRequestTypeDto["LoanServiceRequestTypeDto"]
    class LoanServiceRequestRequest["LoanServiceRequestRequest"]
    LoanServiceRequestRequest ..> LoanServiceRequestTypeDto : unnamed
    LoanServiceRequestStatusDto ..> LoanServiceRequestStatusTypeDto : unnamed
    LoanServiceRequestRequest ..> LoanServiceRequestStatusDto : unnamed
    LoanServiceRequestRequest ..> ContractSystemEventType : unnamed
    LoanServiceRequestRequest ..> ServiceOperationStatusTypeDto : unnamed
    LoanServiceRequestRequest --> RequestParametersChoice : unnamed
    RequestParametersChoice ..> switchServiceOperationStatusParametersDto : unnamed
    unnamed --> ServiceOperationParameter : unnamed
    switchServiceOperationStatusParametersDto ..> ServiceOperationParameter : unnamed
```
