# Temporary Application - detail

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Logical Data Model
- **Diagram ID**: 153600
- **Elements**: 29
- **Connectors**: 22

```mermaid
classDiagram
    class Photo_Quality_Issue["Photo Quality Issue"]
    class Application_2_Commodity["Application 2 Commodity"]
    class Language["Language"]
    class Validation_Attempt_Detail_Type["Validation Attempt Detail Type"]
    class Client_Possession_Type["Client Possession Type"]
    class Validation_Attempt_Detail["Validation Attempt Detail"]
    class Security_Question_Type["Security Question Type"]
    class Currency["Currency"]
    class TempAppl_Card["TempAppl Card"]
    class Validation_Result_Type["Validation Result Type"]
    class TempAppl_Contract_Bank_Account["TempAppl Contract Bank Account"]
    class Photo_Taking_Result["Photo Taking Result"]
    class TempAppl_Payment_Channel["TempAppl Payment Channel"]
    class Temporary_Application_Temporary_Application_Person_and_Emplo["Temporary Application :Temporary Application - Person and Employment"]
    class TempAppl_Person["TempAppl Person"]
    class MOD_Temporary_Application["{MOD}Temporary Application"]
    class Temporary_Application_Temporary_Application_Payment_Informat["Temporary Application :Temporary Application - Payment Information"]
    class Temporary_Application_Temporary_Application_Attributes_Types["Temporary Application :Temporary Application - Attributes, Types and Enumerations"]
    class Temporary_Application_Temporary_Application_overview["Temporary Application : Temporary Application - overview"]
    class TempAppl_User_Statistics["TempAppl User Statistics"]
    class TempAppl_Refinanced_Contract["TempAppl Refinanced Contract "]
    class Commodity_Type["Commodity Type"]
    class TempAppl_Client_Possession["TempAppl Client Possession"]
    class Commodity_Delivery_Type["Commodity Delivery Type"]
    class TempAppl_Security_Question["TempAppl Security Question"]
    class Color["Color"]
    class TempAppl_Preferred_Language["TempAppl Preferred Language"]
    class Bank_Branch["Bank Branch"]
    class TempAppl_Document["TempAppl Document"]
    MOD_Temporary_Application o-- TempAppl_Contract_Bank_Account : unnamed
    TempAppl_Client_Possession ..> Client_Possession_Type : unnamed
    TempAppl_Security_Question ..> Security_Question_Type : unnamed
    TempAppl_Payment_Channel ..> Currency : unnamed
    TempAppl_Document ..> Photo_Taking_Result : unnamed
    TempAppl_Person o-- TempAppl_Document : unnamed
    Temporary_Application_Temporary_Application_Person_and_Emplo --> TempAppl_Person : unnamed
    MOD_Temporary_Application o-- TempAppl_Security_Question : unnamed
    TempAppl_Preferred_Language ..> Language : unnamed
    MOD_Temporary_Application o-- TempAppl_Card : unnamed
    TempAppl_Payment_Channel --> Temporary_Application_Temporary_Application_Payment_Informat : unnamed
    MOD_Temporary_Application o-- TempAppl_Payment_Channel : unnamed
    MOD_Temporary_Application o-- TempAppl_User_Statistics : unnamed
    MOD_Temporary_Application o-- TempAppl_Person : unnamed
    MOD_Temporary_Application o-- TempAppl_Client_Possession : unnamed
    MOD_Temporary_Application o-- TempAppl_Preferred_Language : unnamed
    MOD_Temporary_Application o-- Application_2_Commodity : unnamed
    MOD_Temporary_Application o-- TempAppl_Refinanced_Contract : unnamed
    TempAppl_Card --> Temporary_Application_Temporary_Application_Payment_Informat : unnamed
    TempAppl_Contract_Bank_Account --> Temporary_Application_Temporary_Application_Payment_Informat : unnamed
    MOD_Temporary_Application o-- TempAppl_Document : unnamed
    Validation_Attempt_Detail ..> Validation_Attempt_Detail_Type : unnamed
```
