# Temporary Application - overview

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Logical Data Model
- **Diagram ID**: 153599
- **Elements**: 25
- **Connectors**: 36

```mermaid
classDiagram
    class Blood_Type["Blood Type"]
    class External_Identification_Attribute_Type["External Identification Attribute Type"]
    class External_Identifier["External Identifier"]
    class Person_Custom_Attribute_Type["Person Custom Attribute Type"]
    class Person_Custom_Attribute["Person Custom Attribute"]
    class Temporary_Application_Temporary_Application_Payment_Informat["Temporary Application :Temporary Application - Payment Information"]
    class Temporary_Application_Temporary_Application_detail["Temporary Application : Temporary Application - detail"]
    class Temporary_Application_Temporary_Application_Person_and_Emplo["Temporary Application :Temporary Application - Person and Employment"]
    class Logical_Data_Model_Contract_Management["Logical Data Model : Contract Management"]
    class Logical_Data_Model_Offer_Financial_Parameters["Logical Data Model : Offer Financial Parameters"]
    class Offer_Financial_Parameter["Offer Financial Parameter"]
    class TempAppl_Refinanced_Contract["TempAppl Refinanced Contract "]
    class TempAppl_Card["TempAppl Card"]
    class TempAppl_Contract_Bank_Account["TempAppl Contract Bank Account"]
    class TempAppl_Person_Address["TempAppl Person Address"]
    class TempAppl_Person["TempAppl Person"]
    class TempAppl_Payment_Channel["TempAppl Payment Channel"]
    class Salesroom["Salesroom"]
    class MOD_TempAppl_Employment["{MOD}TempAppl Employment"]
    class TempAppl_Document["TempAppl Document"]
    class TempAppl_Contact["TempAppl Contact"]
    class TempAppl_Client_Address["TempAppl Client Address"]
    class TempAppl_Address["TempAppl Address"]
    class MOD_Temporary_Application["{MOD}Temporary Application"]
    class MOD_Contract["{MOD}Contract"]
    Temporary_Application_Temporary_Application_Person_and_Emplo --> TempAppl_Person : unnamed
    External_Identifier ..> External_Identification_Attribute_Type : unnamed
    Temporary_Application_Temporary_Application_Person_and_Emplo --> MOD_TempAppl_Employment : unnamed
    MOD_TempAppl_Employment o-- TempAppl_Address : unnamed
    MOD_TempAppl_Employment o-- TempAppl_Contact : unnamed
    TempAppl_Person o-- TempAppl_Document : unnamed
    TempAppl_Person o-- TempAppl_Person_Address : unnamed
    Temporary_Application_Temporary_Application_Person_and_Emplo --> TempAppl_Client_Address : unnamed
    TempAppl_Person o-- MOD_TempAppl_Employment : {DEL LOR-6643/}
    TempAppl_Client_Address o-- TempAppl_Address : unnamed
    TempAppl_Person_Address o-- TempAppl_Address : unnamed
    Temporary_Application_Temporary_Application_Person_and_Emplo --> TempAppl_Person_Address : unnamed
    Temporary_Application_Temporary_Application_detail --> TempAppl_Refinanced_Contract : unnamed
    TempAppl_Payment_Channel --> Temporary_Application_Temporary_Application_Payment_Informat : unnamed
    TempAppl_Card --> Temporary_Application_Temporary_Application_Payment_Informat : unnamed
    TempAppl_Contract_Bank_Account --> Temporary_Application_Temporary_Application_Payment_Informat : unnamed
    Person_Custom_Attribute ..> Person_Custom_Attribute_Type : unnamed
    TempAppl_Person o-- TempAppl_Contact : unnamed
    MOD_Temporary_Application o-- TempAppl_Payment_Channel : unnamed
    MOD_Temporary_Application o-- TempAppl_Person : unnamed
    MOD_Temporary_Application o-- MOD_TempAppl_Employment : unnamed
    MOD_Temporary_Application o-- TempAppl_Contract_Bank_Account : unnamed
    MOD_Temporary_Application o-- TempAppl_Client_Address : unnamed
    Temporary_Application_Temporary_Application_Person_and_Emplo --> TempAppl_Contact : unnamed
    MOD_Temporary_Application o-- External_Identifier : unnamed
    MOD_Temporary_Application o-- TempAppl_Card : unnamed
    MOD_Temporary_Application o-- TempAppl_Document : unnamed
    MOD_Temporary_Application o-- Person_Custom_Attribute : unnamed
    Temporary_Application_Temporary_Application_detail --> MOD_Temporary_Application : unnamed
    MOD_Temporary_Application o-- TempAppl_Contact : unnamed
    Temporary_Application_Temporary_Application_Person_and_Emplo --> TempAppl_Address : unnamed
    MOD_Temporary_Application o-- TempAppl_Refinanced_Contract : unnamed
    Offer_Financial_Parameter --> MOD_Contract : unnamed
    Offer_Financial_Parameter --> MOD_Temporary_Application : unnamed
    MOD_Contract --> MOD_Temporary_Application : unnamed
    MOD_Contract o-- External_Identifier : unnamed
```
