# PCG-5647 BRPH-2755 - Optimizing Subvention Management

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/PH/PCG-5647 BRPH-2755 - Optimizing Subvention Management
- **Diagram ID**: 164209
- **Elements**: 7
- **Connectors**: 4

```mermaid
classDiagram
    class Subvention_Definition["Subvention Definition"]
    class Subvention_Scheme["Subvention Scheme"]
    class Subvention_Package_Criterion_Type["Subvention Package Criterion Type"]
    class Subvention_Package_Criterion["Subvention Package Criterion"]
    class Service_Selection_Criterion["Service Selection Criterion"]
    class Service["Service"]
    class Subvention_Package["Subvention Package"]
    Subvention_Package_Criterion ..> Subvention_Package_Criterion_Type : unnamed
    Service o-- Service_Selection_Criterion : unnamed
    Subvention_Package o-- Subvention_Package_Criterion : unnamed
    Subvention_Package o-- Subvention_Definition : unnamed
```
