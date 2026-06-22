# Partner scheme search

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Partner scheme code/User Interface
- **Diagram ID**: 158957
- **Elements**: 14
- **Connectors**: 3

```mermaid
graph TD
    ADD_Scheme_name["{ADD}Scheme name"]
    Create_Partner_scheme["Create Partner scheme"]
    Partner_scheme_update["Partner scheme update"]
    User_Interface_Partner_scheme_update["User Interface : Partner scheme update"]
    MOD_GET_partner_scheme_by_search["{MOD}GET partner-scheme by search"]
    Search_result["Search result"]
    Reset["Reset"]
    Search["Search"]
    Active["Active"]
    Financing_package_code["Financing package code"]
    Product_code["Product code"]
    Scheme_code["Scheme code"]
    Partner_scheme_search_parameters["Partner scheme search parameters"]
    Partner_scheme_search["Partner scheme search"]
    Search -->|unnamed| MOD_GET_partner_scheme_by_search
    Create_Partner_scheme -->|unnamed| Partner_scheme_update
    Search_result -->|unnamed| Partner_scheme_update
```
