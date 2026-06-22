# Address - ID

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Logical Data Model/ID
- **Diagram ID**: 64267
- **Elements**: 6
- **Connectors**: 9

```mermaid
classDiagram
    class Country["Country"]
    class Address["Address"]
    class ZIP_code_ID["ZIP code - ID"]
    class Town_ID["Town - ID"]
    class Sub_district_ID["Sub-district - ID"]
    class District_ID["District - ID"]
    District_ID o-- Sub_district_ID : unnamed
    Sub_district_ID o-- ZIP_code_ID : unnamed
    Sub_district_ID o-- Town_ID : unnamed
    Town_ID o-- ZIP_code_ID : unnamed
    Address ..> Country : unnamed
    Address ..> Town_ID : unnamed
    Address ..> District_ID : unnamed
    Address ..> Sub_district_ID : unnamed
    Address ..> ZIP_code_ID : unnamed
```
