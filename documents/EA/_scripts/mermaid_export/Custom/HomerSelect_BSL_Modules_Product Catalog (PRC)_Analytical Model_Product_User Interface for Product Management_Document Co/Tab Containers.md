# Tab Containers

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Document Container Assignment/User Interface
- **Diagram ID**: 142064
- **Elements**: 9
- **Connectors**: 8

```mermaid
graph TD
    User_Interface_Document_container_detail["User Interface : Document container detail"]
    n_02_330_Show_document_container_detail["02.330 Show document container detail"]
    DEL_02_644_Remove_document_container_from_product["{DEL}02.644 Remove document container from product"]
    DEL_02_070_Show_product_version_detail["{DEL}02.070 Show product version detail"]
    DEL_02_604_Assign_document_container_to_product["{DEL}02.604 Assign document container to product"]
    diagram_Containers_Assign["$diagram:Containers-Assign"]
    Assign_container["Assign container"]
    MOD_Containers["{MOD}Containers"]
    Containers["Containers"]
    MOD_Containers -->|unnamed| diagram_Containers_Assign
    Assign_container -->|unnamed| diagram_Containers_Assign
    MOD_Containers -->|unnamed| DEL_02_604_Assign_document_container_to_product
    Assign_container -->|unnamed| DEL_02_604_Assign_document_container_to_product
    Containers -->|unnamed| DEL_02_070_Show_product_version_detail
    MOD_Containers -->|unnamed| DEL_02_644_Remove_document_container_from_product
    User_Interface_Document_container_detail -->|unnamed| n_02_330_Show_document_container_detail
    MOD_Containers -->|unnamed| n_02_330_Show_document_container_detail
```
