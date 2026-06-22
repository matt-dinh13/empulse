# Address - CORE

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Logical Data Model
- **Diagram ID**: 121810
- **Elements**: 19
- **Connectors**: 14

```mermaid
classDiagram
    class MOD_Employment["{MOD}Employment"]
    class KZ_Address_KZ["KZ : Address - KZ"]
    class addressClassification["addressClassification"]
    class Bank_Branch_Address["Bank Branch Address"]
    class VN_Address_VN["VN : Address - VN"]
    class IN_Address_IN["IN : Address - IN"]
    class ID_Address_ID["ID : Address - ID"]
    class Employer["Employer"]
    class KeyOrValue_Type["KeyOrValue Type"]
    class Client_Address_Role["Client Address Role"]
    class Client_Address["Client Address"]
    class Person_Address_Role["Person Address Role"]
    class SN_Address_Role["SN Address Role"]
    class Salesroom_Address["Salesroom Address"]
    class Partner_Address["Partner Address"]
    class Person_Address["Person Address"]
    class Address["Address"]
    class Country["Country"]
    Address ..> Country : unnamed
    Address ..> KeyOrValue_Type : unnamed
    Address o-- addressClassification : unnamed
    Client_Address ..> Client_Address_Role : unnamed
    Partner_Address ..> SN_Address_Role : unnamed
    Partner_Address --> Address : unnamed
    Salesroom_Address ..> SN_Address_Role : unnamed
    Salesroom_Address --> Address : unnamed
    Bank_Branch_Address --> Address : unnamed
    Bank_Branch_Address ..> SN_Address_Role : unnamed
    Person_Address ..> Person_Address_Role : unnamed
    Person_Address o-- Address : unnamed
    Client_Address o-- Address : unnamed
    Employer o-- Address : unnamed
```
