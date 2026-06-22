# SCServiceInputDto

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Service Catalog
- **Diagram ID**: 161062
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class ADD_SCServiceRoleDto["{ADD}SCServiceRoleDto"]
    class SCServiceRelationsDto["SCServiceRelationsDto"]
    class SCServiceCriterionDto["SCServiceCriterionDto"]
    class SCServiceParameterDto["SCServiceParameterDto"]
    class Input["Input"]
    class SCServiceInputDto["SCServiceInputDto"]
    SCServiceInputDto ..> Input : unnamed
    Input ..> ADD_SCServiceRoleDto : unnamed
    Input ..> SCServiceParameterDto : unnamed
    Input ..> SCServiceCriterionDto : unnamed
    Input ..> SCServiceRelationsDto : unnamed
```
