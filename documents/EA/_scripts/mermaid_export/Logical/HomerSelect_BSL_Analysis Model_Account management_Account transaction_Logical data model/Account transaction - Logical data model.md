# Account transaction - Logical data model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Account management/Account transaction/Logical data model
- **Diagram ID**: 162541
- **Elements**: 11
- **Connectors**: 10

```mermaid
classDiagram
    class Verification_Result["Verification Result"]
    class Verification["Verification"]
    class TransactionSubTypeDto["TransactionSubTypeDto"]
    class Transaction_Subtype["Transaction Subtype"]
    class TransactionTypeDto["TransactionTypeDto"]
    class MOD_Transaction_Type["{MOD}Transaction Type"]
    class MOD_Contract["{MOD}Contract"]
    class Account_Transaction_Setting["Account Transaction Setting"]
    class Account_Transaction_Status_Type["Account Transaction Status Type"]
    class Account_Transaction_Status_Transition["Account Transaction Status Transition"]
    class Account_Transaction["Account Transaction"]
    Account_Transaction o-- Account_Transaction_Status_Transition : unnamed
    Account_Transaction o-- Verification : unnamed
    Account_Transaction ..> Account_Transaction_Status_Type : unnamed
    Account_Transaction_Status_Transition ..> Account_Transaction_Status_Type : unnamed
    Account_Transaction ..> MOD_Transaction_Type : unnamed
    MOD_Transaction_Type ..> TransactionTypeDto : unnamed
    Account_Transaction ..> Transaction_Subtype : unnamed
    Transaction_Subtype ..> TransactionSubTypeDto : unnamed
    Verification ..> Verification_Result : unnamed
    MOD_Contract o-- Account_Transaction : unnamed
```
