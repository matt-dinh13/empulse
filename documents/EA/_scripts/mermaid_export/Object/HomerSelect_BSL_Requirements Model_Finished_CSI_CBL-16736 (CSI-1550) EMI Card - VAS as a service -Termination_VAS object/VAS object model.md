# VAS object model

- **Diagram Type**: Object
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination/VAS object model
- **Diagram ID**: 151944
- **Elements**: 21
- **Connectors**: 25

```mermaid
classDiagram
    class MasterContract["MasterContract"]
    class Goods1["Goods1"]
    class SQ3["SQ3"]
    class SQ2["SQ2"]
    class SQ1["SQ1"]
    class SQ3["SQ3"]
    class GoodsInstalation["GoodsInstalation"]
    class GoodsInsurance["GoodsInsurance"]
    class GoodsPurchase["GoodsPurchase"]
    class Transaction1["Transaction1"]
    class GoodsInstalation["GoodsInstalation"]
    class GoodsInsurance["GoodsInsurance"]
    class GoodsPurchase["GoodsPurchase"]
    class Loan1["Loan1"]
    unnamed --> GoodsInstalation : unnamed
    GoodsInsurance --> Goods1 : unnamed
    GoodsPurchase --> Goods1 : unnamed
    SQ3 o-- GoodsInstalation : unnamed
    SQ2 o-- GoodsInsurance : unnamed
    SQ1 o-- GoodsPurchase : unnamed
    unnamed --> SQ3 : unnamed
    SQ3 --> GoodsInstalation : unnamed
    Transaction1 o-- SQ3 : unnamed
    Transaction1 o-- SQ2 : unnamed
    Transaction1 o-- SQ1 : unnamed
    MasterContract o-- Transaction1 : unnamed
    Transaction1 o-- SQ3 : unnamed
    Loan1 o-- GoodsPurchase : unnamed
    SQ3 --> GoodsInstalation : unnamed
    unnamed --> GoodsInsurance : unnamed
    SQ2 --> GoodsInsurance : unnamed
    unnamed --> GoodsPurchase : unnamed
    SQ1 --> GoodsPurchase : unnamed
    Transaction1 --> Loan1 : process
    unnamed --> Loan1 : unnamed
    unnamed --> Loan1 : unnamed
    Loan1 o-- GoodsInstalation : unnamed
    Loan1 o-- GoodsInsurance : unnamed
    unnamed --> Transaction1 : unnamed
```
