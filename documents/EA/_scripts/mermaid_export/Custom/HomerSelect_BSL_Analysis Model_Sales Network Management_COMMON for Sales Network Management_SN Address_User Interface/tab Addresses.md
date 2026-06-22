# tab Addresses

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/SN Address/User Interface
- **Diagram ID**: 71989
- **Elements**: 9
- **Connectors**: 7

```mermaid
graph TD
    Show_address_detail["Show address detail "]
    Create_Update_address["Create/Update address"]
    Addresses["Addresses"]
    n_09_310_Show_address["09.310 Show address"]
    n_09_110_Remove_address["09.110 Remove address"]
    n_09_100_Update_address["09.100 Update address"]
    n_09_090_Create_address["09.090 Create address"]
    Create_address["Create address"]
    tab_Addresses["tab Addresses"]
    Create_address -->|unnamed| n_09_090_Create_address
    Addresses -->|unnamed| n_09_100_Update_address
    Addresses -->|unnamed| n_09_110_Remove_address
    Addresses -->|unnamed| n_09_310_Show_address
    Addresses -->|unnamed| Create_Update_address
    Create_address -->|unnamed| Create_Update_address
    Addresses -->|unnamed| Show_address_detail
```
