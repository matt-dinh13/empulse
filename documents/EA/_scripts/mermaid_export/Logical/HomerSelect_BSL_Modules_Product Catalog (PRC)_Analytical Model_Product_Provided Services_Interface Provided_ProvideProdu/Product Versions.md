# Product Versions

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/Provided Services/Interface Provided/ProvideProductDataWS/Product Versions
- **Diagram ID**: 162475
- **Elements**: 3
- **Connectors**: 1

```mermaid
classDiagram
    class Synchronization_of_Product_ProvideProductDataWS["Synchronization of Product : ProvideProductDataWS"]
    class DEL_Product_Version["{DEL}Product Version"]
    class DEL_GetProductVersionsResponse["{DEL}GetProductVersionsResponse"]
    DEL_GetProductVersionsResponse ..> DEL_Product_Version : unnamed
```
