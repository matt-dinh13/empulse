# Show Insurance commodity

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-99 (CBL-31) Commodity Module separation
- **Diagram ID**: 98788
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph LR
    Getting_Commodity_data_rule["Getting Commodity data rule"]
    MOD_01_210_Show_contract_detail(("{MOD}01.210 Show contract detail"))
    User[/"User"/]
    MOD_01_210_Show_contract_detail -->|unnamed| Getting_Commodity_data_rule
    User --- MOD_01_210_Show_contract_detail
```
