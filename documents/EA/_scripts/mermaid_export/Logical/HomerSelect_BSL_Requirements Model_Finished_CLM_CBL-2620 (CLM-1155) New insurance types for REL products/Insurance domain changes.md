# Insurance domain changes

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-2620 (CLM-1155) New insurance types for REL products
- **Diagram ID**: 105603
- **Elements**: 5
- **Connectors**: 5

```mermaid
classDiagram
    class Insurance_Operation_Status_Type["Insurance Operation Status Type"]
    class Insurance_Operation_Status["Insurance Operation Status"]
    class Insurance_Contract_Status_Transition["Insurance Contract Status Transition"]
    class Insurance_Contract_Status_Reason["Insurance Contract Status Reason"]
    class Insurance_Contract["Insurance Contract"]
    Insurance_Contract_Status_Transition --> Insurance_Contract_Status_Transition : unnamed
    Insurance_Contract_Status_Transition ..> Insurance_Contract_Status_Reason : unnamed
    Insurance_Contract o-- Insurance_Contract_Status_Transition : unnamed
    Insurance_Operation_Status ..> Insurance_Operation_Status_Type : unnamed
    Insurance_Contract o-- Insurance_Operation_Status : unnamed
```
