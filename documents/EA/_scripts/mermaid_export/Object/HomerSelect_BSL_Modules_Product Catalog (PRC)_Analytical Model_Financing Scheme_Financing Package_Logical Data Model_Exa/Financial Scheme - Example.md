# Financial Scheme - Example

- **Diagram Type**: Object
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Logical Data Model/Example
- **Diagram ID**: 163001
- **Elements**: 19
- **Connectors**: 19

```mermaid
classDiagram
    class Financing_Scheme_HIGH_BUDGET["Financing Scheme HIGH BUDGET"]
    class Financing_Package_LG_TV_40plus["Financing Package LG TV 40plus"]
    class Financing_Package_iPhone_8["Financing Package iPhone 8"]
    class Financing_Package_LG_Desktop["Financing Package LG Desktop"]
    class Financing_Package_Samsung_Galaxy_Tab["Financing Package Samsung Galaxy Tab"]
    class Product_BETA["Product BETA"]
    class Product_ALPHA["Product ALPHA"]
    class FS_Initial_Payment_1["FS Initial Payment 1"]
    class Financing_Package_Criteria_E["Financing Package Criteria E"]
    class Financing_Package_Criteria_D["Financing Package Criteria D"]
    class Financing_Package_Criteria_B["Financing Package Criteria B"]
    class Financing_Package_Criteria_C["Financing Package Criteria C"]
    class Financing_Package_Criteria_A2["Financing Package Criteria A2"]
    class Financing_Package_Criteria_A1["Financing Package Criteria A1"]
    class Financing_Scheme_Variant_2["Financing Scheme Variant 2"]
    class Financing_Scheme_Variant_1["Financing Scheme Variant 1"]
    class Installment_Plan_Scheme_BASIC_30_360["Installment Plan Scheme BASIC 30/360"]
    class Financing_Scheme_LOW_BUDGET["Financing Scheme LOW BUDGET"]
    Product_ALPHA --> Financing_Package_LG_Desktop : unnamed
    Financing_Package_LG_TV_40plus --> Financing_Scheme_HIGH_BUDGET : unnamed
    Product_ALPHA --> Financing_Package_LG_TV_40plus : unnamed
    Financing_Package_iPhone_8 o-- Financing_Package_Criteria_D : unnamed
    Financing_Package_iPhone_8 o-- Financing_Package_Criteria_B : unnamed
    Financing_Package_iPhone_8 o-- Financing_Package_Criteria_C : unnamed
    Financing_Package_iPhone_8 o-- Financing_Package_Criteria_A2 : unnamed
    Product_BETA --> Financing_Package_iPhone_8 : unnamed
    Financing_Package_iPhone_8 --> Financing_Scheme_HIGH_BUDGET : unnamed
    Financing_Package_iPhone_8 o-- Financing_Package_Criteria_E : unnamed
    Financing_Scheme_LOW_BUDGET o-- Financing_Scheme_Variant_1 : unnamed
    Product_BETA --> Financing_Package_LG_Desktop : unnamed
    Product_BETA --> Financing_Package_Samsung_Galaxy_Tab : unnamed
    Financing_Scheme_LOW_BUDGET --> Installment_Plan_Scheme_BASIC_30_360 : unnamed
    Financing_Package_iPhone_8 --> Financing_Scheme_LOW_BUDGET : unnamed
    Financing_Package_LG_Desktop --> Financing_Scheme_LOW_BUDGET : unnamed
    Financing_Scheme_LOW_BUDGET o-- FS_Initial_Payment_1 : unnamed
    Financing_Scheme_LOW_BUDGET o-- Financing_Scheme_Variant_2 : unnamed
    Financing_Package_iPhone_8 o-- Financing_Package_Criteria_A1 : unnamed
```
