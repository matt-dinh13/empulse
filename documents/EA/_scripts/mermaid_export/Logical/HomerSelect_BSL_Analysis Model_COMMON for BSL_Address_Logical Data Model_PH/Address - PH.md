# Address - PH

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Logical Data Model/PH
- **Diagram ID**: 88977
- **Elements**: 6
- **Connectors**: 8

```mermaid
classDiagram
    class Zip_Code_PH["Zip Code - PH"]
    class Sub_district_PH["Sub-district - PH"]
    class Town_PH["Town - PH"]
    class District_PH["District - PH"]
    class Country["Country"]
    class Address["Address"]
    District_PH o-- Sub_district_PH : unnamed
    District_PH o-- Zip_Code_PH : unnamed
    Sub_district_PH o-- Town_PH : unnamed
    Address ..> Country : unnamed
    Address ..> Sub_district_PH : unnamed
    Address ..> Zip_Code_PH : unnamed
    Address ..> Town_PH : unnamed
    Address ..> District_PH : unnamed
```
