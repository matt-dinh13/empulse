# BundleInputDto

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Bundles
- **Diagram ID**: 160830
- **Elements**: 4
- **Connectors**: 2

```mermaid
classDiagram
    class Input["Input"]
    class Bundles_Bundles["Bundles : Bundles"]
    class ADD_BundleServiceDto["{ADD}BundleServiceDto"]
    class ADD_BundleInputDto["{ADD}BundleInputDto"]
    ADD_BundleInputDto ..> Input : unnamed
    Input ..> ADD_BundleServiceDto : unnamed
```
