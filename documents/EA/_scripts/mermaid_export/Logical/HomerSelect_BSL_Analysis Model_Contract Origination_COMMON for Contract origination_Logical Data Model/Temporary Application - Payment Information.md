# Temporary Application - Payment Information

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Logical Data Model
- **Diagram ID**: 153603
- **Elements**: 25
- **Connectors**: 22

```mermaid
classDiagram
    class DDM_Frequency_Type["DDM Frequency Type"]
    class Payment_Channel_Source_Type["Payment Channel Source Type"]
    class Application_to_DDM["Application to DDM"]
    class Application_to_Payment_Channel["Application to Payment Channel"]
    class TempAppl_Bank_Account_Verification["TempAppl Bank Account Verification"]
    class Verification_result["Verification result"]
    class Verification["Verification"]
    class Payment_Channel_Type["Payment Channel Type"]
    class Payment_Purpose_Type["Payment Purpose Type"]
    class Debiting_Method_Type["Debiting Method Type"]
    class Bank_Account_Role["Bank Account Role"]
    class Account_Type["Account Type"]
    class Currency["Currency"]
    class Temporary_Application_Temporary_Application_detail["Temporary Application : Temporary Application - detail"]
    class MOD_Temporary_Application["{MOD}Temporary Application"]
    class Temporary_Application_Temporary_Application_overview["Temporary Application : Temporary Application - overview"]
    class Card_Delivery_Type_Option["Card Delivery Type Option"]
    class MOD_TempAppl_Remittance["{MOD}TempAppl Remittance"]
    class Card_issue_method_type["Card issue method type"]
    class TempAppl_Card["TempAppl Card"]
    class TempAppl_Contract_Bank_Account["TempAppl Contract Bank Account"]
    class TempAppl_Bank_Account["TempAppl Bank Account"]
    class Bank_Branch["Bank Branch"]
    class TempAppl_Payment_Channel["TempAppl Payment Channel"]
    class Salesroom["Salesroom"]
    MOD_Temporary_Application o-- TempAppl_Card : unnamed
    TempAppl_Payment_Channel ..> Payment_Channel_Source_Type : unnamed
    Verification ..> Verification_result : unnamed
    Verification <|-- TempAppl_Bank_Account_Verification : unnamed
    TempAppl_Payment_Channel ..> Payment_Channel_Type : unnamed
    TempAppl_Payment_Channel ..> Payment_Purpose_Type : unnamed
    TempAppl_Contract_Bank_Account ..> Debiting_Method_Type : unnamed
    TempAppl_Contract_Bank_Account ..> Bank_Account_Role : unnamed
    TempAppl_Bank_Account ..> Account_Type : unnamed
    TempAppl_Payment_Channel ..> DDM_Frequency_Type : unnamed
    MOD_Temporary_Application o-- Application_to_DDM : unnamed
    TempAppl_Bank_Account --> Bank_Branch : unnamed
    MOD_Temporary_Application o-- TempAppl_Payment_Channel : unnamed
    MOD_Temporary_Application o-- TempAppl_Contract_Bank_Account : unnamed
    MOD_Temporary_Application o-- Application_to_Payment_Channel : unnamed
    Temporary_Application_Temporary_Application_detail --> MOD_Temporary_Application : unnamed
    TempAppl_Card --> Card_Delivery_Type_Option : unnamed
    TempAppl_Card ..> Card_issue_method_type : unnamed
    TempAppl_Contract_Bank_Account --> TempAppl_Bank_Account : unnamed
    TempAppl_Bank_Account o-- TempAppl_Bank_Account_Verification : unnamed
    TempAppl_Payment_Channel --> TempAppl_Bank_Account : unnamed
    TempAppl_Payment_Channel ..> Currency : unnamed
```
