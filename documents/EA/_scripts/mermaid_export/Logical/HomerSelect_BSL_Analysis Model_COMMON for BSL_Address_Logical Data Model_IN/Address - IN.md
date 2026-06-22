# Address - IN

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Logical Data Model/IN
- **Diagram ID**: 53326
- **Elements**: 6
- **Connectors**: 8

```mermaid
classDiagram
    class Region["Region"]
    class ZIP_code_IN["ZIP code - IN"]
    class District_IN["District - IN"]
    class Address["Address"]
    class Region_IN["Region - IN"]
    class Country["Country"]
    Region <|-- Region_IN : unnamed
    Region_IN o-- District_IN : unnamed
    District_IN o-- ZIP_code_IN : unnamed
    Address ..> Country : unnamed
    Address ..> ZIP_code_IN : unnamed
    Address ..> Region_IN : unnamed
    Address ..> District_IN : unnamed
    Country o-- Region_IN : unnamed
```
