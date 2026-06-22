# Use Case Model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Analytical Model/Document Type Definition/Use Case Model
- **Diagram ID**: 141781
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph LR
    Document_Type_Services_Document_Type_Services_Interface_Mode["Document Type Services : Document Type Services - Interface Model"]
    External_system[/"External system"/]
    n_14_120_Get_Document_Type(("14.120 Get Document Type"))
    Document_Type_Services_Document_Type_Services_Interface_Mode -->|unnamed| n_14_120_Get_Document_Type
    External_system --> n_14_120_Get_Document_Type
```
