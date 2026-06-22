# Address - KZ

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Logical Data Model/KZ
- **Diagram ID**: 111694
- **Elements**: 9
- **Connectors**: 12

```mermaid
classDiagram
    class ZIP_Code_KZ["ZIP Code - KZ"]
    class Street_KZ["Street - KZ"]
    class Region_KZ["Region - KZ"]
    class Town_KZ["Town - KZ"]
    class Locality_KZ["Locality -KZ"]
    class District_KZ["District - KZ"]
    class Region["Region"]
    class Country["Country"]
    class Address["Address"]
    Region <|-- Region_KZ : unnamed
    District_KZ o-- Town_KZ : unnamed
    Town_KZ o-- Street_KZ : unnamed
    Town_KZ o-- ZIP_Code_KZ : unnamed
    Region_KZ o-- District_KZ : unnamed
    Address ..> Country : unnamed
    Address --> Town_KZ : unnamed
    Address --> ZIP_Code_KZ : unnamed
    Address --> Street_KZ : unnamed
    Address --> Region_KZ : unnamed
    Address --> Locality_KZ : unnamed
    Address ..> District_KZ : unnamed
```
