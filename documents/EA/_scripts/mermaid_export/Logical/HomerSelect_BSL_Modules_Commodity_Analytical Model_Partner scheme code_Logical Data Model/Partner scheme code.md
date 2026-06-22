# Partner scheme code

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Partner scheme code/Logical Data Model
- **Diagram ID**: 158943
- **Elements**: 3
- **Connectors**: 2

```mermaid
classDiagram
    class ADD_Partner_scheme_data["{ADD}Partner scheme data"]
    class Partner_scheme_entity_type["Partner scheme entity type"]
    class Partner_scheme["Partner scheme"]
    Partner_scheme ..> Partner_scheme_entity_type : unnamed
    ADD_Partner_scheme_data o-- Partner_scheme : unnamed
```
