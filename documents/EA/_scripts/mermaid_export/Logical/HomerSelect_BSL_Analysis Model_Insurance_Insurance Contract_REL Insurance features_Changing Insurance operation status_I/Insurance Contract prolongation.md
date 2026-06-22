# Insurance Contract prolongation

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/REL Insurance features/Changing Insurance operation status/Interface Provided/Generated Messages/Insurance Contract notifications
- **Diagram ID**: 161988
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class ADD_InsuranceProlongationNotification["{ADD}InsuranceProlongationNotification"]
    class ADD_InsuranceProlongationRenewed["{ADD}InsuranceProlongationRenewed"]
    class ADD_InsuranceProlongationFailed["{ADD}InsuranceProlongationFailed"]
    class ADD_InsuranceContract["{ADD}InsuranceContract"]
    ADD_InsuranceContract <|-- ADD_InsuranceProlongationNotification : unnamed
    ADD_InsuranceProlongationNotification <|-- ADD_InsuranceProlongationRenewed : unnamed
    ADD_InsuranceProlongationNotification <|-- ADD_InsuranceProlongationFailed : unnamed
```
