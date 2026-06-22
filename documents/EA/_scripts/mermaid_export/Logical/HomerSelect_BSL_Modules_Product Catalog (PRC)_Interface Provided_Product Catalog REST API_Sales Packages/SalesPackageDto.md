# SalesPackageDto

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Packages
- **Diagram ID**: 139122
- **Elements**: 6
- **Connectors**: 3

```mermaid
classDiagram
    class Sales_Package_Item_Type["Sales Package Item Type"]
    class SalesPackageItemIdDto["SalesPackageItemIdDto"]
    class SalesPackageItemInputDto["SalesPackageItemInputDto"]
    class SalesPackageInputDto["SalesPackageInputDto"]
    class SalesPackageItemDto["SalesPackageItemDto"]
    class SalesPackageDto["SalesPackageDto"]
    SalesPackageDto ..> SalesPackageItemDto : unnamed
    SalesPackageInputDto ..> SalesPackageItemInputDto : unnamed
    SalesPackageItemDto ..> Sales_Package_Item_Type : unnamed
```
