# Common - Person

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Person/Logical Data Model
- **Diagram ID**: 144549
- **Elements**: 14
- **Connectors**: 17

```mermaid
classDiagram
    class Employer["Employer"]
    class MOD_Employment["{MOD}Employment"]
    class MOD_Client_Snapshot["{MOD}Client Snapshot"]
    class Salesroom["Salesroom"]
    class Document["Document"]
    class PersonContact["PersonContact"]
    class Person_Document["Person Document"]
    class Person_Address["Person Address"]
    class Salesroom_Person["Salesroom Person"]
    class Additional_Person["Additional Person"]
    class Contact["Contact"]
    class Person["Person"]
    class Address["Address"]
    class Gender["Gender"]
    Person_Address o-- Address : unnamed
    Salesroom o-- Salesroom_Person : unnamed
    Person_Document --> Document : unnamed
    Person --> Person_Document : unnamed
    Salesroom_Person o-- Person : unnamed
    Person o-- PersonContact : unnamed
    Person o-- Person_Address : has
    Person ..> Gender : unnamed
    Contact --> PersonContact : unnamed
    MOD_Employment --> Employer : unnamed
    Additional_Person o-- MOD_Employment : {DEL LOR-6643/}
    MOD_Client_Snapshot o-- MOD_Employment : unnamed
    MOD_Client_Snapshot o-- Additional_Person : unnamed
    MOD_Client_Snapshot ..> Gender : unnamed
    Additional_Person o-- Person : unnamed
    Employer o-- Contact : unnamed
    Employer o-- Address : unnamed
```
