# Automatic source bank account assignment - OP orders

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/COMMON for Outgoing Payments/Logical Data Model
- **Diagram ID**: 151003
- **Elements**: 4
- **Connectors**: 2

```mermaid
classDiagram
    class Logical_Data_Model_Outgoing_Payment_Orders["Logical Data Model : Outgoing Payment Orders"]
    class Credit_Owner["Credit Owner"]
    class Bank_Account["Bank Account"]
    class ADD_JFC_Partner_Code_To_Bank_Account["{ADD}JFC Partner Code To Bank Account"]
    ADD_JFC_Partner_Code_To_Bank_Account ..> Credit_Owner : unnamed
    ADD_JFC_Partner_Code_To_Bank_Account --> Bank_Account : {DEL CBL-4414 PAYM-1613 /}
```
