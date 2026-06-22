# Grace Period - Setting

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/GRPER
- **Diagram ID**: 92353
- **Elements**: 5
- **Connectors**: 2

```mermaid
classDiagram
    class Service["Service"]
    class Logical_Data_Model_Service_Management["Logical Data Model : Service Management"]
    class Payment_Discipline_Parameters["Payment Discipline Parameters"]
    class Grace_Period_Service["Grace Period Service"]
    class Early_Repayment_Algorithm_Type["Early Repayment Algorithm Type"]
    Grace_Period_Service ..> Early_Repayment_Algorithm_Type : unnamed
    Grace_Period_Service o-- Payment_Discipline_Parameters : unnamed
```
