# Insurance Prolongation notification

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-22680 Service Management Modules for REL (KZ)/CSI-3088 VAS - Deal (Insurance) Prolongation notification
- **Diagram ID**: 155808
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
