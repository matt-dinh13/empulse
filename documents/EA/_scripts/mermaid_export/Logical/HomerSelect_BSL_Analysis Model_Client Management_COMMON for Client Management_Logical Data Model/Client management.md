# Client management

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Client Management/COMMON for Client Management/Logical Data Model
- **Diagram ID**: 151429
- **Elements**: 23
- **Connectors**: 27

```mermaid
classDiagram
    class Client_Scoring_Segment["Client Scoring Segment"]
    class Person_Custom_Attribute_Type["Person Custom Attribute Type"]
    class Person_Custom_Attribute["Person Custom Attribute"]
    class Financial_Data_Remittance["Financial Data Remittance"]
    class MOD_Client_Snapshot["{MOD}Client Snapshot"]
    class Language["Language"]
    class Client_Snapshot_Contact["Client Snapshot Contact"]
    class Client_Preferred_language["Client Preferred language"]
    class Client_Address["Client Address"]
    class Client["Client"]
    class Client_Document["Client Document"]
    class Deal["Deal"]
    class Person["Person"]
    class Document["Document"]
    class Employer["Employer"]
    class MOD_Contract["{MOD}Contract"]
    class Undesirability["Undesirability"]
    class Consent["Consent"]
    class Financial_Data["Financial Data"]
    class MOD_Employment["{MOD}Employment"]
    class Additional_Person["Additional Person"]
    class Contact["Contact"]
    class Address["Address"]
    Client_Address o-- Address : unnamed
    Person_Custom_Attribute ..> Person_Custom_Attribute_Type : unnamed
    MOD_Client_Snapshot o-- Client_Document : unnamed
    MOD_Client_Snapshot o-- Client_Address : has
    MOD_Client_Snapshot o-- Client_Snapshot_Contact : unnamed
    MOD_Client_Snapshot o-- Undesirability : unnamed
    MOD_Client_Snapshot o-- Client_Preferred_language : unnamed
    MOD_Client_Snapshot o-- MOD_Employment : unnamed
    MOD_Client_Snapshot o-- Person_Custom_Attribute : unnamed
    MOD_Client_Snapshot o-- Financial_Data : unnamed
    MOD_Client_Snapshot o-- Consent : unnamed
    MOD_Client_Snapshot ..> Client_Scoring_Segment : unnamed
    Client_Preferred_language --> Language : unnamed
    MOD_Client_Snapshot --> Client : unnamed
    Client_Document --> Document : unnamed
    Employer o-- Address : unnamed
    Employer o-- Contact : unnamed
    MOD_Employment --> Employer : unnamed
    Additional_Person o-- MOD_Employment : {DEL LOR-6643/}
    Additional_Person o-- Person : unnamed
    Additional_Person o-- Financial_Data_Remittance : unnamed
    MOD_Client_Snapshot o-- Additional_Person : unnamed
    Deal o-- MOD_Contract : unnamed
    Deal --> Client : unnamed
    Client_Snapshot_Contact --> Contact : unnamed
    MOD_Contract --> MOD_Client_Snapshot : unnamed
    Deal o-- MOD_Client_Snapshot : unnamed
```
