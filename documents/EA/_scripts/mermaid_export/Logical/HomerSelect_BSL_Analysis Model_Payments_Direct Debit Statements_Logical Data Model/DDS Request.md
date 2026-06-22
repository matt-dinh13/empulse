# DDS Request

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Logical Data Model
- **Diagram ID**: 151682
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class DDS_Import_Request["DDS Import Request"]
    class DDS_Operation_Type["DDS Operation Type"]
    class Direct_Debit_Statement_Status["Direct Debit Statement Status"]
    class DDS_Confirmation_Request["DDS Confirmation Request"]
    class DDS_Request["DDS Request"]
    DDS_Request o-- DDS_Confirmation_Request : unnamed
    DDS_Request o-- DDS_Import_Request : unnamed
    DDS_Request ..> Direct_Debit_Statement_Status : unnamed
    DDS_Request ..> DDS_Operation_Type : unnamed
```
