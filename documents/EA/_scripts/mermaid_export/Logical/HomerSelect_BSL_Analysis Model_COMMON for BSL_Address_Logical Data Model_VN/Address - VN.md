# Address - VN

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Logical Data Model/VN
- **Diagram ID**: 53322
- **Elements**: 5
- **Connectors**: 6

```mermaid
classDiagram
    class Region["Region"]
    class Town_VN["Town - VN"]
    class District_VN["District - VN"]
    class Region_VN["Region - VN"]
    class Address["Address"]
    Region <|-- Region_VN : unnamed
    Region_VN o-- District_VN : unnamed
    District_VN o-- Town_VN : unnamed
    Address ..> Town_VN : unnamed
    Address ..> Region_VN : unnamed
    Address ..> District_VN : unnamed
```
