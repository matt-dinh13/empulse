# DDSSystemEvent schema

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Logical data model
- **Diagram ID**: 164615
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class ADD_DDSPostedSE["{ADD}DDSPostedSE"]
    class Direct_Debit_Statement["Direct Debit Statement"]
    class DDSSystemEvent["DDSSystemEvent"]
    class DDSConfirmationSE["DDSConfirmationSE"]
    class SystemEvent["SystemEvent"]
    SystemEvent <|-- DDSSystemEvent : unnamed
    DDSSystemEvent <|-- ADD_DDSPostedSE : unnamed
    DDSSystemEvent <|-- DDSConfirmationSE : unnamed
    DDSSystemEvent --> Direct_Debit_Statement : unnamed
```
