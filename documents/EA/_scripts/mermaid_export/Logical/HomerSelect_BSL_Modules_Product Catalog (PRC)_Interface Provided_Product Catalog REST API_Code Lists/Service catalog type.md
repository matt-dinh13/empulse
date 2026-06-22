# Service catalog type

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Code Lists
- **Diagram ID**: 161075
- **Elements**: 4
- **Connectors**: 2

```mermaid
classDiagram
    class Code_Lists_Code_Lists["Code Lists : Code Lists"]
    class ServiceCatalogRoleAssignmentDto["ServiceCatalogRoleAssignmentDto"]
    class MOD_ServiceCatalogTypeDto["{MOD}ServiceCatalogTypeDto"]
    class ServiceCatalogCategoryDto["ServiceCatalogCategoryDto"]
    MOD_ServiceCatalogTypeDto ..> ServiceCatalogRoleAssignmentDto : unnamed
    MOD_ServiceCatalogTypeDto ..> ServiceCatalogCategoryDto : unnamed
```
