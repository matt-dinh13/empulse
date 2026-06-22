# Outgoing Payments

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/COMMON for Outgoing Payments/Logical Data Model
- **Diagram ID**: 151001
- **Elements**: 19
- **Connectors**: 21

```mermaid
classDiagram
    class tariff_item2out_pay["tariff_item2out_pay"]
    class MOD_Outgoing_Payment_Status_Transition["{MOD}Outgoing Payment Status Transition"]
    class Transaction_Subtype["Transaction Subtype"]
    class Contract_Bank_Account["Contract Bank Account"]
    class Logical_Data_Model_Outgoing_Payment_Orders["Logical Data Model : Outgoing Payment Orders"]
    class Outgoing_Payment_Order["Outgoing Payment Order"]
    class Bank_Account["Bank Account"]
    class Legend["Legend"]
    class Logical_Data_Model_Payment_Channels["Logical Data Model : Payment Channels"]
    class MOD_Partner["{MOD}Partner"]
    class Outgoing_Payment_Status["Outgoing Payment Status"]
    class Outgoing_Payment_Type["Outgoing Payment Type"]
    class Salesroom["Salesroom"]
    class Payment_Channel_Type["Payment Channel Type"]
    class Outgoing_Payment["Outgoing Payment"]
    class Payment_Purpose_Type["Payment Purpose Type"]
    class MOD_Payment_Channel["{MOD}Payment Channel"]
    class MOD_Contract["{MOD}Contract"]
    class PTR2SUBVENTION["PTR2SUBVENTION"]
    Outgoing_Payment ..> Transaction_Subtype : unnamed
    Outgoing_Payment o-- MOD_Outgoing_Payment_Status_Transition : unnamed
    MOD_Outgoing_Payment_Status_Transition ..> Outgoing_Payment_Status : unnamed
    Outgoing_Payment_Order --> Salesroom : unnamed
    Outgoing_Payment_Order --> MOD_Partner : unnamed
    Logical_Data_Model_Payment_Channels --> MOD_Payment_Channel : unnamed
    Outgoing_Payment o-- tariff_item2out_pay : unnamed
    Outgoing_Payment --> MOD_Payment_Channel : unnamed
    Outgoing_Payment --> Outgoing_Payment : unnamed
    Outgoing_Payment --> MOD_Contract : unnamed
    Outgoing_Payment_Order o-- Outgoing_Payment : unnamed
    Outgoing_Payment ..> Outgoing_Payment_Type : unnamed
    Outgoing_Payment ..> Outgoing_Payment_Status : unnamed
    Outgoing_Payment --> PTR2SUBVENTION : 0..*
    MOD_Partner o-- Salesroom : unnamed
    Contract_Bank_Account --> Bank_Account : unnamed
    MOD_Contract o-- Contract_Bank_Account : unnamed
    MOD_Payment_Channel --> Bank_Account : {DEL CBL-4414 PAYM-1613 /}
    MOD_Payment_Channel ..> Payment_Purpose_Type : unnamed
    MOD_Payment_Channel --> Bank_Account : {DEL CBL-4414 PAYM-1613 /}
    MOD_Payment_Channel ..> Payment_Channel_Type : unnamed
```
