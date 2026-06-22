# DDMSystemEvent schema

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Logical data model
- **Diagram ID**: 164621
- **Elements**: 9
- **Connectors**: 8

```mermaid
classDiagram
    class ADD_DDMConfirmationImportedSE["{ADD}DDMConfirmationImportedSE"]
    class ADD_DDMReceivedSE["{ADD}DDMReceivedSE"]
    class ADD_DDMCanceledSE["{ADD}DDMCanceledSE"]
    class ADD_DDMUpdatedSE["{ADD}DDMUpdatedSE"]
    class ADD_DDMCreatedSE["{ADD}DDMCreatedSE"]
    class Logical_Data_Model_Contract_DDM["Logical Data Model : Contract - DDM"]
    class DDM["DDM"]
    class ADD_DDMSystemEvent["{ADD}DDMSystemEvent"]
    class SystemEvent["SystemEvent"]
    SystemEvent <|-- ADD_DDMSystemEvent : unnamed
    ADD_DDMSystemEvent <|-- ADD_DDMReceivedSE : unnamed
    ADD_DDMSystemEvent <|-- ADD_DDMCreatedSE : unnamed
    ADD_DDMSystemEvent <|-- ADD_DDMCanceledSE : unnamed
    ADD_DDMSystemEvent <|-- ADD_DDMConfirmationImportedSE : unnamed
    ADD_DDMSystemEvent <|-- ADD_DDMUpdatedSE : unnamed
    Logical_Data_Model_Contract_DDM --> DDM : unnamed
    ADD_DDMSystemEvent --> DDM : unnamed
```
