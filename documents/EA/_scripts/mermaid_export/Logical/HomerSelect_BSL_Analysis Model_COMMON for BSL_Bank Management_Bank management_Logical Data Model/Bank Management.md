# Bank Management

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/Logical Data Model
- **Diagram ID**: 152608
- **Elements**: 8
- **Connectors**: 9

```mermaid
classDiagram
    class Custom_Data_Definition["Custom Data Definition"]
    class Bank_Branch_Contact["Bank Branch Contact"]
    class Bank_Branch_Address["Bank Branch Address"]
    class Direct_Debit_Provider["Direct Debit Provider"]
    class Bank_Account["Bank Account"]
    class Bank_Status["Bank Status"]
    class Bank_Branch["Bank Branch"]
    class Bank["Bank"]
    Bank --> Bank : unnamed
    Bank_Branch o-- Bank_Branch_Contact : unnamed
    Bank --> Bank_Branch : unnamed
    Bank_Account --> Bank_Branch : {DEL CBL-4414 PAYM-1613 /}
    Bank ..> Bank_Status : unnamed
    Bank_Branch ..> Bank_Status : unnamed
    Bank_Branch --> Bank_Branch_Address : unnamed
    Bank ..> Custom_Data_Definition : unnamed
    Bank ..> Custom_Data_Definition : unnamed
```
