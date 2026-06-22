# ProductDto

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product
- **Diagram ID**: 161476
- **Elements**: 16
- **Connectors**: 13

```mermaid
classDiagram
    class SalesDescriptionDto["SalesDescriptionDto"]
    class Product_Product["Product : Product"]
    class Subvention_Participant["Subvention Participant"]
    class SubventionParticipantTypeDto["SubventionParticipantTypeDto"]
    class Version_Status["Version Status"]
    class RoundingTypeDto["RoundingTypeDto"]
    class TwoSPBlockOfTypeDto["TwoSPBlockOfTypeDto"]
    class DocumentPrintoutDto["DocumentPrintoutDto"]
    class ContainerRuleDto["ContainerRuleDto"]
    class MOD_SubventionDto["{MOD}SubventionDto"]
    class ProductServiceTypeDto["ProductServiceTypeDto"]
    class ProductServiceDto["ProductServiceDto"]
    class ProductCommodityTypeDto["ProductCommodityTypeDto"]
    class ProductVariantDto["ProductVariantDto"]
    class ProductProfileDto["ProductProfileDto"]
    class MOD_ProductDto["{MOD}ProductDto"]
    MOD_ProductDto ..> ProductProfileDto : unnamed
    MOD_ProductDto ..> ProductVariantDto : unnamed
    MOD_ProductDto ..> ProductCommodityTypeDto : unnamed
    MOD_ProductDto ..> ProductServiceDto : unnamed
    MOD_ProductDto ..> ProductServiceTypeDto : unnamed
    MOD_ProductDto ..> MOD_SubventionDto : unnamed
    MOD_ProductDto ..> ContainerRuleDto : unnamed
    MOD_ProductDto ..> DocumentPrintoutDto : unnamed
    ContainerRuleDto ..> TwoSPBlockOfTypeDto : unnamed
    MOD_ProductDto ..> Version_Status : unnamed
    MOD_SubventionDto ..> SubventionParticipantTypeDto : unnamed
    SubventionParticipantTypeDto ..> Subvention_Participant : unnamed
    MOD_ProductDto ..> SalesDescriptionDto : unnamed
```
