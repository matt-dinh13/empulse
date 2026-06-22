# Product Catalog REST API

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API
- **Diagram ID**: 163848
- **Elements**: 24
- **Connectors**: 23

```mermaid
classDiagram
    class Service_to_Product_profile_API["Service to Product profile API"]
    class Partner_Scheme_API["Partner Scheme API"]
    class Promo_Actions_API["Promo Actions API"]
    class Subventions_API["Subventions API"]
    class Sales_Descriptions_API["Sales Descriptions API"]
    class Model_API["Model API"]
    class Service_Catalog_API["Service Catalog API"]
    class Service_Eligibility_Containers_API["Service Eligibility Containers API"]
    class Salesroom_API["Salesroom API"]
    class Product_Recalculation_Data_API["Product Recalculation Data API"]
    class Salesroom_assignment_API["Salesroom assignment API"]
    class Marketing_Action_API["Marketing Action API"]
    class Manufacturer_API["Manufacturer API"]
    class Sales_Packages_API["Sales Packages API"]
    class Product_Profile_API["Product Profile API"]
    class Financing_Packages["Financing Packages"]
    class Sales_Features_API["Sales Features API"]
    class Tariff_API["Tariff API"]
    class Financing_Schemes_API["Financing Schemes API"]
    class Product_Calculation_Data["Product Calculation Data"]
    class Product["Product"]
    class Service["Service"]
    class Management["Management"]
    class Product_catalog_API["Product catalog API"]
    Product_catalog_API ..> Manufacturer_API : unnamed
    Product_catalog_API ..> Partner_Scheme_API : unnamed
    Product_catalog_API ..> Promo_Actions_API : unnamed
    Product_catalog_API ..> Subventions_API : unnamed
    Product_catalog_API ..> Sales_Descriptions_API : unnamed
    Product_catalog_API ..> Model_API : unnamed
    Product_catalog_API ..> Service_Catalog_API : unnamed
    Product_catalog_API ..> Service_Eligibility_Containers_API : unnamed
    Product_catalog_API ..> Salesroom_API : unnamed
    Product_catalog_API ..> Product_Recalculation_Data_API : unnamed
    Product_catalog_API ..> Service_to_Product_profile_API : unnamed
    Product_catalog_API ..> Marketing_Action_API : unnamed
    Product_catalog_API ..> Management : unnamed
    Product_catalog_API ..> Sales_Packages_API : unnamed
    Product_catalog_API ..> Product_Profile_API : unnamed
    Product_catalog_API ..> Financing_Packages : unnamed
    Product_catalog_API ..> Sales_Features_API : unnamed
    Product_catalog_API ..> Tariff_API : unnamed
    Product_catalog_API ..> Financing_Schemes_API : unnamed
    Product_catalog_API ..> Product_Calculation_Data : unnamed
    Product_catalog_API ..> Product : unnamed
    Product_catalog_API ..> Service : unnamed
    Product_catalog_API ..> Salesroom_assignment_API : unnamed
```
