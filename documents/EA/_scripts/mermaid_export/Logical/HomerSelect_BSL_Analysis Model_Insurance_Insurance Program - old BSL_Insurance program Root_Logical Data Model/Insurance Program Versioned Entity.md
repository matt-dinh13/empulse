# Insurance Program Versioned Entity

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Program - old BSL/Insurance program Root/Logical Data Model
- **Diagram ID**: 125712
- **Elements**: 3
- **Connectors**: 2

```mermaid
classDiagram
    class Insurance_Program["Insurance Program"]
    class Insurance_Program_Version_Status["Insurance Program Version Status"]
    class Insurance_Program_Versioned_entity["Insurance Program Versioned entity"]
    Insurance_Program_Versioned_entity <|-- Insurance_Program : unnamed
    Insurance_Program_Versioned_entity ..> Insurance_Program_Version_Status : unnamed
```
