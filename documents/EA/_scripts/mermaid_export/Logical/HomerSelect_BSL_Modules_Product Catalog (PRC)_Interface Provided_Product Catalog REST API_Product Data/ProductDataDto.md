# ProductDataDto

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product Data
- **Diagram ID**: 158745
- **Elements**: 5
- **Connectors**: 3

```mermaid
classDiagram
    class Product_Data_Product_Data["Product Data : Product Data"]
    class LocalizedString["LocalizedString"]
    class ProductDataDtoCommodityTypes["ProductDataDtoCommodityTypes"]
    class ProductDataDtoMaximalPartnerSubvention["ProductDataDtoMaximalPartnerSubvention"]
    class MOD_ProductDataDto["{MOD}ProductDataDto"]
    MOD_ProductDataDto ..> ProductDataDtoMaximalPartnerSubvention : unnamed
    MOD_ProductDataDto ..> ProductDataDtoCommodityTypes : unnamed
    ProductDataDtoCommodityTypes ..> LocalizedString : unnamed
```
