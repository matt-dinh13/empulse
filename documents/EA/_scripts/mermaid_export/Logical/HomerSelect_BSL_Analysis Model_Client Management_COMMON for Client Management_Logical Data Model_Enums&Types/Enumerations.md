# Enumerations

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Client Management/COMMON for Client Management/Logical Data Model/Enums&Types
- **Diagram ID**: 152284
- **Elements**: 28
- **Connectors**: 28

```mermaid
classDiagram
    class Industry_to_Economical_Status["Industry to Economical Status"]
    class Statement_Channel["Statement Channel"]
    class Country["Country"]
    class Financial_Data_Remittance["Financial Data Remittance"]
    class Client_Preferred_language["Client Preferred language"]
    class Language["Language"]
    class Financial_Data["Financial Data"]
    class Client_Address["Client Address"]
    class Salary_frequency["Salary frequency"]
    class Marital_Status_Type["Marital Status Type"]
    class Client_Address_Role["Client Address Role"]
    class Additional_Person["Additional Person"]
    class Person_Relation_Type["Person Relation Type"]
    class Consent["Consent"]
    class Salary_payment_method["Salary payment method"]
    class Profession["Profession"]
    class Employment_Type["Employment Type"]
    class Undesirability["Undesirability"]
    class Undesirability_Type["Undesirability Type"]
    class Employer["Employer"]
    class Industry["Industry"]
    class House_Type["House Type"]
    class Education["Education"]
    class MOD_Employment["{MOD}Employment"]
    class Economical_Status["Economical Status"]
    class Consent_Type["Consent Type"]
    class Consent_Modication_Action["Consent Modication Action"]
    class MOD_Client_Snapshot["{MOD}Client Snapshot"]
    Industry_to_Economical_Status ..> Industry : unnamed
    Client_Preferred_language --> Language : unnamed
    MOD_Employment ..> Salary_frequency : unnamed
    MOD_Client_Snapshot ..> Marital_Status_Type : unnamed
    Client_Address ..> Client_Address_Role : unnamed
    Additional_Person o-- Financial_Data_Remittance : unnamed
    Additional_Person o-- MOD_Employment : {DEL LOR-6643/}
    Additional_Person ..> Person_Relation_Type : unnamed
    MOD_Employment ..> Salary_payment_method : unnamed
    MOD_Employment ..> Profession : unnamed
    MOD_Employment ..> Employment_Type : unnamed
    Undesirability ..> Undesirability_Type : unnamed
    MOD_Client_Snapshot ..> Country : unnamed
    Employer ..> Industry : unnamed
    MOD_Client_Snapshot o-- Consent : unnamed
    MOD_Client_Snapshot ..> House_Type : unnamed
    MOD_Client_Snapshot ..> Education : unnamed
    Industry_to_Economical_Status ..> Economical_Status : unnamed
    MOD_Employment ..> Economical_Status : unnamed
    Consent ..> Consent_Type : unnamed
    Consent ..> Consent_Modication_Action : unnamed
    MOD_Client_Snapshot o-- Client_Address : has
    MOD_Client_Snapshot o-- MOD_Employment : unnamed
    MOD_Client_Snapshot o-- Undesirability : unnamed
    MOD_Client_Snapshot o-- Additional_Person : unnamed
    MOD_Client_Snapshot o-- Financial_Data : unnamed
    MOD_Client_Snapshot o-- Client_Preferred_language : unnamed
    MOD_Employment --> Employer : unnamed
```
