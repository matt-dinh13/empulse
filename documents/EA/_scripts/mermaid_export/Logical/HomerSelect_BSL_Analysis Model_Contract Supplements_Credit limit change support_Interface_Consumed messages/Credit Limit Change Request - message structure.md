# Credit Limit Change Request - message structure

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Interface/Consumed messages
- **Diagram ID**: 131018
- **Elements**: 4
- **Connectors**: 2

```mermaid
classDiagram
    class RequestSourceId["RequestSourceId"]
    class ADD_CreditLimitChangeData["{ADD}CreditLimitChangeData"]
    class CreditLimitChangeType["CreditLimitChangeType"]
    class ADD_CreditLimitChangeRequest["{ADD}CreditLimitChangeRequest"]
    ADD_CreditLimitChangeRequest --> CreditLimitChangeType : unnamed
    ADD_CreditLimitChangeRequest --> ADD_CreditLimitChangeData : unnamed
```
