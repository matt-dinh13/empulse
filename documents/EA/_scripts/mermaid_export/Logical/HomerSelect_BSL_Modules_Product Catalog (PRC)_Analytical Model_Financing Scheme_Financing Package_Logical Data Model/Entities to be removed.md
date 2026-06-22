# Entities to be removed

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Logical Data Model
- **Diagram ID**: 162997
- **Elements**: 14
- **Connectors**: 9

```mermaid
classDiagram
    class Logical_Data_Model_Product_Management["Logical Data Model : Product Management"]
    class Revolving_Loan_Product_Variant["Revolving Loan Product Variant"]
    class Closed_End_Loan_Product_Variant["Closed End Loan Product Variant"]
    class Product_Variant["Product Variant"]
    class Product_To_Manufacturer["Product To Manufacturer"]
    class RELIP_Service_Variant_Term["RELIP Service Variant Term"]
    class RELIP_Service_Variant["RELIP Service Variant"]
    class RELIP_Service["RELIP Service"]
    class Service["Service"]
    class Product_To_Service["Product To Service"]
    class Product_To_Commodity_Type["Product To Commodity Type"]
    class MOD_Product["{MOD}Product"]
    class To_be_deleted_for_CEL_REL["To be deleted for CEL + REL"]
    class To_be_deleted_for_REL["To be deleted for REL"]
    RELIP_Service o-- RELIP_Service_Variant : unnamed
    RELIP_Service_Variant o-- RELIP_Service_Variant_Term : unnamed
    Product_Variant <|-- Closed_End_Loan_Product_Variant : unnamed
    MOD_Product o-- Product_To_Commodity_Type : unnamed
    MOD_Product --> Product_Variant : unnamed
    Product_Variant <|-- Revolving_Loan_Product_Variant : unnamed
    Product_To_Service ..> Service : unnamed
    MOD_Product o-- Product_To_Service : unnamed
    MOD_Product o-- Product_To_Manufacturer : unnamed
```
