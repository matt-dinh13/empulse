# Assign Service

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Service Assignment/Use Case
- **Diagram ID**: 162483
- **Elements**: 6
- **Connectors**: 7

```mermaid
graph LR
    User[/"User"/]
    DEL_02_632_Remove_service_from_product(("{DEL}02.632 Remove service from product"))
    User_Interface_Service_or_Insurance_Assign["User Interface :Service or Insurance-Assign"]
    User_Interface_Tab_Services["User Interface :Tab Services"]
    DEL_02_070_Show_product_version_detail(("{DEL}02.070 Show product version detail"))
    DEL_02_631_Assign_service_to_product(("{DEL}02.631 Assign service to product"))
    User_Interface_Tab_Services -->|unnamed| DEL_02_631_Assign_service_to_product
    DEL_02_631_Assign_service_to_product -->|unnamed| User_Interface_Service_or_Insurance_Assign
    User_Interface_Tab_Services -->|unnamed| DEL_02_632_Remove_service_from_product
    User --- DEL_02_631_Assign_service_to_product
    User --- DEL_02_070_Show_product_version_detail
    User --- DEL_02_632_Remove_service_from_product
    DEL_02_070_Show_product_version_detail -->|unnamed| User_Interface_Tab_Services
```
