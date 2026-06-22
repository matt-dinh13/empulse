# Insurance Program versions

```mermaid
classDiagram
    class Insurance_Program_Version_Status["Insurance Program Version Status"]
    class Insurance_Program_Versioned_entity["Insurance Program Versioned entity"]
    class Insurance_Program["Insurance Program"]
    Insurance_Program_Versioned_entity --> Insurance_Program_Version_Status : unnamed
    Insurance_Program --> Insurance_Program_Versioned_entity : unnamed
```
