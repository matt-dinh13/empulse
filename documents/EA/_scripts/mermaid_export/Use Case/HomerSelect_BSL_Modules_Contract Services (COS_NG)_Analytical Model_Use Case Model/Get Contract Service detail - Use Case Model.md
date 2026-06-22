# Get Contract Service detail - Use Case Model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Contract Services (COS_NG)/Analytical Model/Use Case Model
- **Diagram ID**: 164143
- **Elements**: 4
- **Connectors**: 4

```mermaid
graph LR
    n_08_080_Get_Contract_Services_by_Contract(("08.080 Get Contract Services by Contract"))
    Contract_Services_Get_Contract_Services_data_method_COS["Contract Services : Get Contract Services data method (COS)"]
    External_System[/"External System"/]
    n_08_070_Get_Contract_Service_detail(("08.070 Get Contract Service detail"))
    Contract_Services_Get_Contract_Services_data_method_COS -->|unnamed| n_08_070_Get_Contract_Service_detail
    External_System --- n_08_070_Get_Contract_Service_detail
    n_08_080_Get_Contract_Services_by_Contract -->|unnamed| Contract_Services_Get_Contract_Services_data_method_COS
    External_System --- n_08_080_Get_Contract_Services_by_Contract
```
