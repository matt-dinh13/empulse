# Service concept - Loan Service Requests (object model)

- **Diagram Type**: Object
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16152 (CSI-1340) Contract service modularization - analysis/Service concept (object model)
- **Diagram ID**: 151174
- **Elements**: 35
- **Connectors**: 42

```mermaid
classDiagram
    class Campaign1["Campaign1"]
    class CLCH["CLCH"]
    class CLIP1["CLIP1"]
    class CLIPOffer123["CLIPOffer123"]
    class AlopTrx["AlopTrx"]
    class INSR["INSR"]
    class InsContract["InsContract"]
    class Ins4232424["Ins4232424"]
    class Ins4232424["Ins4232424"]
    class n_4215151515["4215151515"]
    class INSGO1["INSGO1"]
    class INSGO["INSGO"]
    class Add_insurance_to_the_transaction["Add insurance to the transaction"]
    class ALOP1["ALOP1"]
    class Trx12["Trx12"]
    class AlopTrx12["AlopTrx12"]
    class AlopDef["AlopDef"]
    class PayholPrint["PayholPrint"]
    class ALOP1["ALOP1"]
    class Payhol1["Payhol1"]
    class CollectionTool["CollectionTool"]
    class Payhol1["Payhol1"]
    class Payhol1["Payhol1"]
    class Request_for_Credit_limit_change["Request for Credit limit change"]
    class Request_for_Cardless_Trx_ALOP_LOP["Request for Cardless Trx (ALOP/LOP)"]
    class Request_for_Loan_Service_CT_extension["Request for Loan Service (CT extension)"]
    class Payhol["Payhol"]
    Ins4232424 --> INSR : unnamed
    Campaign1 o-- CLIPOffer123 : unnamed
    unnamed --> INSGO1 : unnamed
    INSGO1 o-- Ins4232424 : unnamed
    n_4215151515 o-- ALOP1 : unnamed
    n_4215151515 o-- Payhol : unnamed
    Add_insurance_to_the_transaction ..> Ins4232424 : unnamed
    INSGO1 --> Ins4232424 : unnamed
    Ins4232424 --> Ins4232424 : unnamed
    INSGO1 --> INSGO : unnamed
    Ins4232424 --> InsContract : unnamed
    unnamed --> ALOP1 : unnamed
    unnamed --> INSR : unnamed
    AlopTrx12 --> AlopTrx : unnamed
    Request_for_Credit_limit_change ..> CLIPOffer123 : unnamed
    CLIP1 --> CLIPOffer123 : unnamed
    Request_for_Credit_limit_change ..> CLIP1 : unnamed
    unnamed --> CLIP1 : unnamed
    CLIP1 --> CLCH : unnamed
    unnamed --> Campaign1 : unnamed
    unnamed --> Ins4232424 : unnamed
    unnamed --> ALOP1 : unnamed
    unnamed --> Payhol : unnamed
    Payhol o-- Payhol1 : unnamed
    Payhol1 --> Payhol1 : unnamed
    Request_for_Loan_Service_CT_extension ..> Payhol1 : unnamed
    unnamed --> Payhol1 : unnamed
    Request_for_Loan_Service_CT_extension ..> Payhol1 : unnamed
    Payhol1 --> CollectionTool : unnamed
    Payhol --> Payhol1 : unnamed
    Add_insurance_to_the_transaction ..> INSGO1 : unnamed
    Request_for_Cardless_Trx_ALOP_LOP ..> ALOP1 : unnamed
    Request_for_Loan_Service_CT_extension ..> Payhol : unnamed
    Payhol1 --> PayholPrint : unnamed
    AlopTrx12 --> AlopDef : unnamed
    unnamed --> AlopTrx12 : unnamed
    unnamed --> AlopTrx12 : unnamed
    AlopTrx12 o-- INSGO1 : unnamed
    Request_for_Cardless_Trx_ALOP_LOP ..> AlopTrx12 : unnamed
    AlopTrx12 --> Trx12 : unnamed
    ALOP1 --> ALOP1 : unnamed
    ALOP1 o-- AlopTrx12 : unnamed
```
