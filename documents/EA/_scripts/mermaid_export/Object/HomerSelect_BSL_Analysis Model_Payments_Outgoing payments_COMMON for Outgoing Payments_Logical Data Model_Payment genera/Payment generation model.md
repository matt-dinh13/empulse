# Payment generation model

- **Diagram Type**: Object
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/COMMON for Outgoing Payments/Logical Data Model/Payment generation model
- **Diagram ID**: 104392
- **Elements**: 37
- **Connectors**: 42

```mermaid
classDiagram
    class Ins_POS["Ins POS"]
    class SBA_INS["SBA (INS)"]
    class Insurance_Co_1["Insurance Co 1"]
    class Client_bank_acc["Client bank acc"]
    class INS["INS"]
    class AF2_INS["AF2 INS"]
    class PTR["PTR"]
    class CL["CL"]
    class AF4_CL["AF4 CL"]
    class AF3_CL["AF3 CL"]
    class AF2_PTR["AF2 PTR"]
    class Application_form_4["Application form 4"]
    class Application_form_3["Application form 3"]
    class CLX2_HC["CLX2 HC"]
    class CLX1_HC["CLX1 HC"]
    class Application_form_2["Application form 2"]
    class AF1_CL["AF1 CL"]
    class SBA_AF2["SBA AF2"]
    class GBA["GBA"]
    class PBA["PBA"]
    class SBA["SBA"]
    class Application_form_1["Application form 1"]
    class TW_on_POS["TW on POS"]
    class GBA["GBA"]
    class Cash_POS_1["Cash POS 1"]
    class Cash_provider_virtual["Cash provider virtual"]
    class Bank_branch_1["Bank branch 1"]
    class Partner_bank_1["Partner bank 1"]
    class POS_1["POS 1"]
    class Retailer_1["Retailer 1"]
    class PBA["PBA"]
    class CL_on_Post["CL on Post"]
    class SBA_AF1["SBA AF1"]
    class Post_Branch_1["Post Branch 1"]
    class Post_CL_Retailer["Post CL Retailer"]
    class Generated_payments["Generated payments"]
    class Sales_network_configuration["Sales network configuration"]
    AF4_CL --> CL : unnamed
    Post_Branch_1 --> SBA : Allowed Payment Channel
    SBA_INS --> SBA : unnamed
    POS_1 --> SBA : unnamed
    SBA_AF1 --> SBA : unnamed
    Cash_POS_1 --> PBA : unnamed
    Cash_POS_1 --> GBA : Allowed Payment Channel
    GBA --> GBA : unnamed
    TW_on_POS --> SBA_AF2 : unnamed
    AF2_PTR --> SBA_AF2 : unnamed
    SBA_INS --> Ins_POS : Paid on
    AF4_CL --> CLX2_HC : unnamed
    SBA_INS --> TW_on_POS : unnamed
    AF1_CL --> CL : unnamed
    AF3_CL --> CL : unnamed
    AF2_PTR --> PTR : unnamed
    AF2_INS --> INS : unnamed
    GBA --> Client_bank_acc : Paid on
    Insurance_Co_1 o-- Ins_POS : unnamed
    AF2_INS --> SBA_INS : unnamed
    AF3_CL --> CLX1_HC : unnamed
    SBA_AF2 --> POS_1 : Paid on
    CL_on_Post --> Post_Branch_1 : Originated at
    SBA_AF1 --> Post_Branch_1 : Paid on
    AF1_CL --> SBA_AF1 : unnamed
    CL_on_Post --> SBA_AF1 : unnamed
    AF1_CL --> CL_on_Post : unnamed
    CLX2_HC --> PBA : unnamed
    AF4_CL --> PBA : unnamed
    Retailer_1 o-- POS_1 : unnamed
    SBA_AF2 --> SBA : unnamed
    AF2_PTR --> TW_on_POS : unnamed
    Partner_bank_1 o-- Bank_branch_1 : unnamed
    PBA --> Bank_branch_1 : Paid on
    Cash_provider_virtual o-- Cash_POS_1 : unnamed
    CLX2_HC --> Cash_POS_1 : Originated at
    CLX1_HC --> Cash_POS_1 : Originated at
    AF3_CL --> GBA : unnamed
    CLX1_HC --> GBA : unnamed
    AF2_INS --> TW_on_POS : unnamed
    Post_CL_Retailer o-- Post_Branch_1 : unnamed
    TW_on_POS --> POS_1 : Originated at
```
