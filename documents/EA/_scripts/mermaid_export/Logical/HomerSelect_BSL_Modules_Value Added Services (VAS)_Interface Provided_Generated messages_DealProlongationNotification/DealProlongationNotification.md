# DealProlongationNotification

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Generated messages/DealProlongationNotification
- **Diagram ID**: 156547
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class ADD_InsuranceProlongationNotification["{ADD}InsuranceProlongationNotification"]
    class ADD_InsuranceProlongationRenewed["{ADD}InsuranceProlongationRenewed"]
    class ADD_InsuranceProlongationFailed["{ADD}InsuranceProlongationFailed"]
    class ADD_InsuranceContract["{ADD}InsuranceContract"]
    ADD_InsuranceProlongationNotification <|-- ADD_InsuranceProlongationFailed : unnamed
    ADD_InsuranceProlongationNotification <|-- ADD_InsuranceProlongationRenewed : unnamed
    ADD_InsuranceContract <|-- ADD_InsuranceProlongationNotification : unnamed
```
