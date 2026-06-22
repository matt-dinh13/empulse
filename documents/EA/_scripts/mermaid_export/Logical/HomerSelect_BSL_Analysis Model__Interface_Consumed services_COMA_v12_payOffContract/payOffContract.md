# payOffContract

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/COMA/v12/payOffContract
- **Diagram ID**: 149039
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class PropertyErrorApi["PropertyErrorApi"]
    class ErrorMessageRestApi["ErrorMessageRestApi"]
    class requestBody["requestBody"]
    class ADD_payOffContract["{ADD}payOffContract"]
    ADD_payOffContract ..> requestBody : unnamed
    ADD_payOffContract ..> ErrorMessageRestApi : unnamed
    ErrorMessageRestApi ..> PropertyErrorApi : unnamed
```
