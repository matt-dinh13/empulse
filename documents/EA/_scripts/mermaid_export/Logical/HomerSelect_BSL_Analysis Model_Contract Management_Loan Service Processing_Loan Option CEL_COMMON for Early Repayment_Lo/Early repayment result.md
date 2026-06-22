# Early repayment result

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/Logical Data Model
- **Diagram ID**: 163961
- **Elements**: 10
- **Connectors**: 8

```mermaid
classDiagram
    class Extraordinary_Payable_Item["Extraordinary Payable Item"]
    class Extraordinary_Payable_Items["Extraordinary Payable Items"]
    class Logical_Data_Model_Early_repayment_request["Logical Data Model : Early repayment request"]
    class ER_Fee_Item["ER Fee Item"]
    class ER_Fee_Items["ER Fee Items"]
    class Overdue_Items["Overdue Items"]
    class Payable_Items["Payable Items"]
    class Overdue_Item["Overdue Item"]
    class Payable_Item["Payable Item"]
    class Early_Repayment_Result["Early Repayment Result"]
    Early_Repayment_Result o-- Extraordinary_Payable_Items : unnamed
    Early_Repayment_Result o-- ER_Fee_Items : unnamed
    Early_Repayment_Result o-- Overdue_Items : unnamed
    Early_Repayment_Result o-- Payable_Items : unnamed
    Payable_Items o-- Payable_Item : unnamed
    Overdue_Items o-- Overdue_Item : unnamed
    ER_Fee_Items o-- ER_Fee_Item : unnamed
    Extraordinary_Payable_Items o-- Extraordinary_Payable_Item : unnamed
```
