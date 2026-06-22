# Product Offer Limit

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Product Offer Limits (internal DB)/Logical Data Model
- **Diagram ID**: 111663
- **Elements**: 11
- **Connectors**: 10

```mermaid
classDiagram
    class Logical_Data_Model_Offer_Financial_Parameters["Logical Data Model : Offer Financial Parameters"]
    class Product_Transaction_Type["Product Transaction Type"]
    class Product_Offer_Limit_Product["Product Offer Limit Product"]
    class Product_Offer_Limit_Client["Product Offer Limit Client"]
    class Product_Offer_Limit_Segment["Product Offer Limit Segment"]
    class Offer_Financial_Parameter["Offer Financial Parameter"]
    class Marketing_Action["Marketing Action"]
    class Commodity_Type["Commodity Type"]
    class MOD_Product_Offer_Limit["{MOD}Product Offer Limit"]
    class MOD_Product["{MOD}Product"]
    class Product_Type["Product Type"]
    MOD_Product_Offer_Limit ..> Product_Type : unnamed
    Product_Offer_Limit_Product ..> MOD_Product : unnamed
    MOD_Product_Offer_Limit o-- Product_Offer_Limit_Product : unnamed
    MOD_Product_Offer_Limit <|-- Product_Offer_Limit_Client : unnamed
    MOD_Product_Offer_Limit <|-- Product_Offer_Limit_Segment : unnamed
    Offer_Financial_Parameter ..> MOD_Product_Offer_Limit : unnamed
    MOD_Product_Offer_Limit ..> Commodity_Type : unnamed
    MOD_Product_Offer_Limit ..> Marketing_Action : unnamed
    MOD_Product_Offer_Limit ..> Product_Transaction_Type : unnamed
    Offer_Financial_Parameter ..> MOD_Product_Offer_Limit : unnamed
```
