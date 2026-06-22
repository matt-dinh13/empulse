# Logical Data Model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service to Product profile/COMMON for Service to Product profile/Logical Data Model
- **Diagram ID**: 162966
- **Elements**: 3
- **Connectors**: 2

```mermaid
classDiagram
    class ADD_Service_to_Product_Profile_Relation["{ADD} Service to Product Profile Relation"]
    class Product_Profile["Product Profile"]
    class Service["Service"]
    ADD_Service_to_Product_Profile_Relation ..> Service : unnamed
    ADD_Service_to_Product_Profile_Relation ..> Product_Profile : unnamed
```
