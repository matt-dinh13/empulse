# Subvention Scheme

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Logical Data Model
- **Diagram ID**: 163000
- **Elements**: 5
- **Connectors**: 3

```mermaid
classDiagram
    class Rounding_Scale_Type["Rounding Scale Type"]
    class Rounding["Rounding"]
    class Subvention_Participant["Subvention Participant"]
    class Logical_Data_Model_Financing_Package["Logical Data Model : Financing Package"]
    class Subvention_Scheme["Subvention Scheme"]
    Subvention_Scheme ..> Subvention_Participant : unnamed
    Subvention_Scheme ..> Rounding : unnamed
    Subvention_Scheme ..> Rounding_Scale_Type : unnamed
```
