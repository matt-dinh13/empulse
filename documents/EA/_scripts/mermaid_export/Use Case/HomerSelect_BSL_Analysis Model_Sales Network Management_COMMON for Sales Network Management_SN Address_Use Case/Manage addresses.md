# Manage addresses

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/SN Address/Use Case
- **Diagram ID**: 71974
- **Elements**: 10
- **Connectors**: 11

```mermaid
graph LR
    SNM_Address_rules["SNM Address rules"]
    Address_rules["Address rules"]
    Show_detail_of_address_Show_detail_of_address["Show detail of address : Show detail of address"]
    tab_Addresses_tab_Addresses["tab Addresses : tab Addresses"]
    Edit_address_Create_Update_address["Edit address : Create/Update address"]
    User[/"User"/]
    n_09_310_Show_address(("09.310 Show address"))
    n_09_110_Remove_address(("09.110 Remove address"))
    n_09_100_Update_address(("09.100 Update address"))
    n_09_090_Create_address(("09.090 Create address"))
    n_09_090_Create_address -->|unnamed| Edit_address_Create_Update_address
    n_09_100_Update_address -->|unnamed| Edit_address_Create_Update_address
    n_09_310_Show_address -->|unnamed| Show_detail_of_address_Show_detail_of_address
    n_09_100_Update_address -->|unnamed| Address_rules
    n_09_090_Create_address -->|unnamed| Address_rules
    n_09_090_Create_address -->|unnamed| SNM_Address_rules
    n_09_100_Update_address -->|unnamed| SNM_Address_rules
    User --- n_09_110_Remove_address
    User --- n_09_100_Update_address
    User --- n_09_090_Create_address
    User --- n_09_310_Show_address
```
