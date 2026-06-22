# Assign Document Container

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Document Container Assignment/Use Case
- **Diagram ID**: 162479
- **Elements**: 6
- **Connectors**: 7

```mermaid
graph LR
    User[/"User"/]
    Containers_Containers_Set["Containers : Containers - Set"]
    Containers_Containers["Containers : Containers"]
    DEL_02_604_Assign_document_container_to_product(("{DEL}02.604 Assign document container to product"))
    DEL_02_644_Remove_document_container_from_product(("{DEL}02.644 Remove document container from product"))
    DEL_02_070_Show_product_version_detail(("{DEL}02.070 Show product version detail"))
    Containers_Containers -->|unnamed| DEL_02_644_Remove_document_container_from_product
    Containers_Containers -->|unnamed| DEL_02_604_Assign_document_container_to_product
    DEL_02_604_Assign_document_container_to_product -->|unnamed| Containers_Containers_Set
    User --- DEL_02_604_Assign_document_container_to_product
    User --- DEL_02_070_Show_product_version_detail
    User --- DEL_02_644_Remove_document_container_from_product
    DEL_02_070_Show_product_version_detail -->|unnamed| Containers_Containers
```
