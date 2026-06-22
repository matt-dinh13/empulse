# Direct Debit Statements

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Logical Data Model
- **Diagram ID**: 151681
- **Elements**: 12
- **Connectors**: 7

```mermaid
classDiagram
    class Logical_Data_Model_Contract_DDM["Logical Data Model : Contract - DDM"]
    class DDS_Error_Reason["DDS Error Reason"]
    class DDS_Amount_calculation_algorithm_type["DDS Amount calculation algorithm type"]
    class Accepted_DDM_status["Accepted DDM status"]
    class DDM["DDM"]
    class MOD_Contract["{MOD}Contract"]
    class Direct_Debit_Statement_Status["Direct Debit Statement Status"]
    class Direct_Debit_Statement_Import_File["Direct Debit Statement Import File"]
    class Direct_Debit_Statement_File["Direct Debit Statement File"]
    class Direct_Debit_Statement_Confirmation_File["Direct Debit Statement Confirmation File"]
    class Direct_Debit_Statement["Direct Debit Statement"]
    class Non_working_Day["Non-working Day"]
    Direct_Debit_Statement_Confirmation_File o-- Direct_Debit_Statement : unnamed
    Direct_Debit_Statement_File o-- Direct_Debit_Statement : unnamed
    Direct_Debit_Statement_Import_File o-- Direct_Debit_Statement : unnamed
    Direct_Debit_Statement ..> Direct_Debit_Statement_Status : unnamed
    Direct_Debit_Statement ..> DDS_Error_Reason : unnamed
    DDM --> MOD_Contract : {ADD PAYM-1844 CBL-1541 /}
    DDM o-- Direct_Debit_Statement : unnamed
```
