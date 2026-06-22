# Insurance Program versions

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program management/Logical Data Model
- **Diagram ID**: 164329
- **Elements**: 3
- **Connectors**: 2

```mermaid
classDiagram
    class Insurance_Program_Version_Status["Insurance Program Version Status"]
    class Insurance_Program_Versioned_entity["Insurance Program Versioned entity"]
    class Insurance_Program["Insurance Program"]
    Insurance_Program_Versioned_entity ..> Insurance_Program_Version_Status : unnamed
    Insurance_Program_Versioned_entity <|-- Insurance_Program : unnamed
```
