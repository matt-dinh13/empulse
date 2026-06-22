# Sales Quote structure (OM)

- **Diagram Type**: Object
- **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Sales Quote processing/Sales Quote structure (OM)
- **Diagram ID**: 160445
- **Elements**: 14
- **Connectors**: 9

```mermaid
classDiagram
    class IA_Interest["IA:Interest"]
    class FA_ServiceFeeAmt["FA:ServiceFeeAmt"]
    class SP_BillingDay["SP:BillingDay"]
    class AA_TrAmount["AA:TrAmount"]
    class SQ_CashTransaction["SQ:CashTransaction"]
    class LA_CreditLimit["LA:CreditLimit"]
    class SA_Service2["SA:Service2"]
    class SA_Service1["SA:Service1"]
    class SQ2["SQ2"]
    class Spec_Service1["Spec:Service1"]
    class SA_Service1["SA:Service1"]
    class SQ_TrService["SQ:TrService"]
    class Business_Case_TRANSACTION_SQ_type_TRANSACTION["Business Case TRANSACTION: SQ.type = TRANSACTION"]
    class Business_case_SERVICE_SQ_type_ACCOUNT_CREATION["Business case SERVICE: SQ.type = ACCOUNT_CREATION"]
    FA_ServiceFeeAmt --> SQ_TrService : unnamed
    SA_Service1 --> SQ_TrService : unnamed
    SA_Service1 --> Spec_Service1 : unnamed
    LA_CreditLimit --> SQ2 : unnamed
    SA_Service2 --> SQ2 : unnamed
    SA_Service1 --> SQ2 : unnamed
    SP_BillingDay --> SA_Service1 : unnamed
    IA_Interest --> SQ_CashTransaction : unnamed
    SQ_CashTransaction --> AA_TrAmount : unnamed
```
