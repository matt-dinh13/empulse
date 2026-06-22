# Product Offers generated for External system

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Product Offer Calculation/Logical Data Model
- **Diagram ID**: 126789
- **Elements**: 19
- **Connectors**: 18

```mermaid
classDiagram
    class Manufacturer["Manufacturer"]
    class Use_Case_Product_Calculator_for_External_system["Use Case : Product Calculator for External system"]
    class Product_Offer_Request_Type["Product Offer Request Type"]
    class Service["Service"]
    class Product_Offer_Request_Service_Choice["Product Offer Request Service Choice"]
    class Product_Offer_Recalculation_Request["Product Offer Recalculation Request"]
    class Product_Offer_Request["Product Offer Request"]
    class Product_Offer_Request_Service_Preference["Product Offer Request Service Preference"]
    class Service_Type["Service Type"]
    class Service_Type_Preference["Service Type Preference"]
    class Loan_Option["Loan Option"]
    class Document_Type["Document Type"]
    class Product_Offer_Request_Document_Type["Product Offer Request Document Type"]
    class Commodity_Type["Commodity Type"]
    class Product_Offer_Request_Commodity["Product Offer Request Commodity"]
    class Logical_Data_Model_Offer_Financial_Parameters["Logical Data Model : Offer Financial Parameters"]
    class Product_Offer_Response["Product Offer Response"]
    class MOD_Product_Offer_Calculation_Request["{MOD}Product Offer Calculation Request"]
    class Offer_Financial_Parameter["Offer Financial Parameter"]
    Product_Offer_Request ..> Product_Offer_Request_Type : unnamed
    Product_Offer_Request_Service_Choice ..> Service : unnamed
    Product_Offer_Recalculation_Request o-- Product_Offer_Request_Service_Choice : unnamed
    Product_Offer_Request <|-- Product_Offer_Recalculation_Request : unnamed
    Product_Offer_Request <|-- MOD_Product_Offer_Calculation_Request : unnamed
    Product_Offer_Request o-- Product_Offer_Response : unnamed
    Product_Offer_Request_Service_Preference ..> Service_Type : unnamed
    Product_Offer_Request_Commodity ..> Manufacturer : unnamed
    Product_Offer_Request_Service_Preference ..> Service_Type_Preference : unnamed
    Product_Offer_Response --> Offer_Financial_Parameter : unnamed
    MOD_Product_Offer_Calculation_Request ..> Loan_Option : unnamed
    Product_Offer_Request_Document_Type ..> Document_Type : unnamed
    Product_Offer_Request_Commodity ..> Commodity_Type : unnamed
    Product_Offer_Recalculation_Request ..> Product_Offer_Response : unnamed
    MOD_Product_Offer_Calculation_Request o-- Product_Offer_Request_Commodity : unnamed
    MOD_Product_Offer_Calculation_Request o-- Product_Offer_Request_Document_Type : unnamed
    MOD_Product_Offer_Calculation_Request o-- Product_Offer_Request_Service_Preference : unnamed
    Product_Offer_Response --> MOD_Product_Offer_Calculation_Request : OriginalCalculationRequest
```
