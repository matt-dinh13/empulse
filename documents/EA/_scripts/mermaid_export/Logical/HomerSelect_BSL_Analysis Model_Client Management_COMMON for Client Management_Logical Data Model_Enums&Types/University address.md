# University address

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Client Management/COMMON for Client Management/Logical Data Model/Enums&Types
- **Diagram ID**: 152283
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class IN_Address_IN["IN : Address - IN"]
    class Address["Address"]
    class University_Course["University Course"]
    class University["University"]
    University_Course --> University : unnamed
    University --> Address : unnamed
    Address --> IN_Address_IN : unnamed
```
