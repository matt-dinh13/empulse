# CBL-25127 (CSI-3646) Display BNPL Credit Limit

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-25127 (CSI-3646) Display BNPL Credit Limit
- **Diagram ID**: 159875
- **Elements**: 4
- **Connectors**: 1

```mermaid
graph TD
    MOD_12_601_Show_account_detail["{MOD}12.601 Show account detail"]
    MOD_01_210_Show_contract_detail["{MOD}01.210 Show contract detail"]
    Account["Account"]
    User_Interface_Model_Contract_detail["User Interface Model : Contract detail"]
    Account -->|unnamed| MOD_12_601_Show_account_detail
```
