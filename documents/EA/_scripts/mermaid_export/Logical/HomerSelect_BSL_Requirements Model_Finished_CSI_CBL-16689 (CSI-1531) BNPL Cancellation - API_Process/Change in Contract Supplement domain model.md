# Change in Contract Supplement domain model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16689 (CSI-1531) BNPL Cancellation - API/Process
- **Diagram ID**: 159740
- **Elements**: 5
- **Connectors**: 3

```mermaid
classDiagram
    class Contract_Supplement["Contract Supplement"]
    class Contract_Supplement_Status_Type["Contract Supplement Status Type"]
    class Transaction_Change_Request["Transaction Change Request"]
    class Account_Transaction["Account Transaction"]
    class Account_Transaction_Supplement["Account Transaction Supplement"]
    Account_Transaction_Supplement o-- Transaction_Change_Request : unnamed
    Transaction_Change_Request --> Account_Transaction : unnamed
    Contract_Supplement ..> Contract_Supplement_Status_Type : unnamed
```
