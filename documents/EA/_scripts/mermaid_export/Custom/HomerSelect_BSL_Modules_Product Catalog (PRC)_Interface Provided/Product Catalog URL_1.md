# Product Catalog URL

```mermaid
graph TD
    User_Interface_Financing_Package_URL["User Interface : Financing Package URL"]
    Interface_Provided_Financing_Scheme_URL["Interface Provided : Financing Scheme URL"]
    User_Interface_Tariff_Root_URL["User Interface : Tariff Root URL"]
    User_Interface_Model_Service_Root_URL["User Interface Model : Service Root URL"]
    User_Interface_Product_Root_URL["User Interface : Product Root URL"]
    Product_Catalog_URL["Product Catalog URL"]
    Product_Catalog_URL -->|unnamed| User_Interface_Product_Root_URL
    Product_Catalog_URL -->|unnamed| User_Interface_Model_Service_Root_URL
    Product_Catalog_URL -->|unnamed| User_Interface_Tariff_Root_URL
    Product_Catalog_URL -->|unnamed| Interface_Provided_Financing_Scheme_URL
    Product_Catalog_URL -->|unnamed| User_Interface_Financing_Package_URL
```
