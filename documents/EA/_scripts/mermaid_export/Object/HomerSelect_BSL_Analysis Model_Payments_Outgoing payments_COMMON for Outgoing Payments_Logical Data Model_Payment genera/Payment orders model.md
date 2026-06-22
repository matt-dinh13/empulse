# Payment orders model

- **Diagram Type**: Object
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/COMMON for Outgoing Payments/Logical Data Model/Payment generation model
- **Diagram ID**: 104393
- **Elements**: 33
- **Connectors**: 32

```mermaid
classDiagram
    class SBA["SBA"]
    class PBA["PBA"]
    class GBA["GBA"]
    class HC_bank_acc["HC bank acc"]
    class F345["F345"]
    class F234["F234"]
    class Ins_Co_bank["Ins Co bank"]
    class Client_bank["Client bank"]
    class Partner_bank["Partner bank"]
    class Post_main["Post main"]
    class POS1["POS1"]
    class Partner_bank_acc["Partner bank acc"]
    class Ins_Co_bank_acc["Ins Co bank acc"]
    class Post_main_bank_acc["Post main bank acc"]
    class POS1_bank_acc["POS1 bank acc"]
    class Client_bank_acc["Client bank acc"]
    class Insurance_Co_1["Insurance Co 1"]
    class Bank_branch_1["Bank branch 1"]
    class Partner_bank_1["Partner bank 1"]
    class POS_1["POS 1"]
    class Retailer_1["Retailer 1"]
    class Post_Branch_1["Post Branch 1"]
    class Post_CL_Retailer["Post CL Retailer"]
    class INS["INS"]
    class AF2_INS["AF2 INS"]
    class PTR["PTR"]
    class CL["CL"]
    class AF4_CL["AF4 CL"]
    class AF3_CL["AF3 CL"]
    class AF2_PTR["AF2 PTR"]
    class AF1_CL["AF1 CL"]
    class Generated_payments["Generated payments"]
    class Sales_network["Sales network"]
    Ins_Co_bank o-- AF2_INS : unnamed
    Post_main --> Post_main_bank_acc : unnamed
    Ins_Co_bank --> Ins_Co_bank_acc : unnamed
    Partner_bank --> Partner_bank_acc : unnamed
    POS1 o-- AF2_PTR : unnamed
    Post_main o-- AF1_CL : unnamed
    AF3_CL --> Client_bank_acc : unnamed
    Client_bank o-- AF3_CL : unnamed
    Client_bank --> Client_bank_acc : unnamed
    F234 o-- Partner_bank : unnamed
    F234 o-- Client_bank : unnamed
    F345 o-- POS1 : unnamed
    F234 --> HC_bank_acc : unnamed
    F345 --> HC_bank_acc : unnamed
    Partner_bank o-- AF4_CL : unnamed
    AF2_PTR --> POS_1 : unnamed
    AF4_CL --> CL : unnamed
    AF3_CL --> CL : unnamed
    AF2_PTR --> PTR : unnamed
    AF2_INS --> INS : unnamed
    Post_CL_Retailer o-- Post_Branch_1 : unnamed
    Post_CL_Retailer o-- Post_main_bank_acc : unnamed
    POS1 --> POS1_bank_acc : unnamed
    Retailer_1 o-- POS_1 : unnamed
    AF1_CL --> CL : unnamed
    POS_1 o-- POS1_bank_acc : unnamed
    Partner_bank_1 o-- Bank_branch_1 : unnamed
    Partner_bank_1 o-- Partner_bank_acc : unnamed
    AF4_CL --> Bank_branch_1 : unnamed
    Insurance_Co_1 o-- Ins_Co_bank_acc : unnamed
    AF2_INS --> Insurance_Co_1 : unnamed
    AF1_CL --> Post_Branch_1 : unnamed
```
