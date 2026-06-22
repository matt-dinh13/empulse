# Asynchronous Message

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided notification messages/Asynchronous Message
- **Diagram ID**: 130266
- **Elements**: 4
- **Connectors**: 1

```mermaid
classDiagram
    class ApplicationEventNotification_v1["ApplicationEventNotification_v1"]
    class LoanApplicationData_v2["LoanApplicationData_v2"]
    class AsynchronousMessage["AsynchronousMessage"]
    class LoanApplicationData_v1["LoanApplicationData_v1"]
    AsynchronousMessage <|-- ApplicationEventNotification_v1 : unnamed
```
