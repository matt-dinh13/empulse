# SCServiceDto

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Service Catalog
- **Diagram ID**: 161061
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class ADD_SCServiceRoleDto["{ADD}SCServiceRoleDto"]
    class SCServiceRelationsDto["SCServiceRelationsDto"]
    class SCServiceParameterDto["SCServiceParameterDto"]
    class SCServiceCriterionDto["SCServiceCriterionDto"]
    class MOD_SCServiceDto["{MOD}SCServiceDto"]
    MOD_SCServiceDto ..> SCServiceCriterionDto : unnamed
    MOD_SCServiceDto ..> SCServiceParameterDto : unnamed
    MOD_SCServiceDto ..> SCServiceRelationsDto : unnamed
    MOD_SCServiceDto ..> ADD_SCServiceRoleDto : unnamed
```
