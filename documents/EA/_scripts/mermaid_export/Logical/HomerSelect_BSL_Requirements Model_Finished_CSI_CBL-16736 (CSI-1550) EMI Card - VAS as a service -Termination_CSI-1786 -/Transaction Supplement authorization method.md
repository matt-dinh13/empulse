# Transaction Supplement authorization method

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination/CSI-1786 - Create a new method for Transaction authorization
- **Diagram ID**: 145951
- **Elements**: 9
- **Connectors**: 9

```mermaid
classDiagram
    class Contract_Supplement["Contract Supplement"]
    class SQ_Relationship["SQ Relationship"]
    class Sales_Quote_Applied["Sales Quote Applied"]
    class Account_Transaction_Status_Type["Account Transaction Status Type"]
    class Account_Transaction_Status_Transition["Account Transaction Status Transition"]
    class Account_Transaction["Account Transaction"]
    class Transaction_Change_Request["Transaction Change Request"]
    class Account_Transaction_Supplement["Account Transaction Supplement"]
    Account_Transaction_Supplement o-- Sales_Quote_Applied : unnamed
    unnamed --> Account_Transaction_Status_Transition : unnamed
    Sales_Quote_Applied --> Sales_Quote_Applied : unnamed
    Transaction_Change_Request --> Account_Transaction : unnamed
    Account_Transaction_Supplement o-- Transaction_Change_Request : unnamed
    Account_Transaction o-- Account_Transaction_Status_Transition : unnamed
    Account_Transaction_Status_Transition ..> Account_Transaction_Status_Type : unnamed
    Account_Transaction ..> Account_Transaction_Status_Type : unnamed
    Sales_Quote_Applied o-- Account_Transaction : unnamed
```
