# CBL-5290 (CLM-1868) Skipping Commodity Validation functionality

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5290 (CLM-1868) Skipping Commodity Validation functionality
- **Diagram ID**: 114351
- **Elements**: 6
- **Connectors**: 4

```mermaid
graph TD
    UseCase_Model_Contract_registration["UseCase Model : Contract registration"]
    REQ_2_Commodity_validation_in_the_Registration["REQ #2 - Commodity validation in the Registration"]
    User_Interface_Model_Edit_commodity["User Interface Model : Edit commodity"]
    UseCase_Model_Manage_contract_commodities["UseCase Model : Manage contract commodities"]
    Tab_Commodity_Tab_Commodity["Tab-Commodity : Tab-Commodity"]
    REQ_1_Skipping_commodity_validation_by_authorized_user["REQ #1 - Skipping commodity validation by authorized user"]
    UseCase_Model_Contract_registration -->|unnamed| REQ_2_Commodity_validation_in_the_Registration
    User_Interface_Model_Edit_commodity -->|unnamed| REQ_1_Skipping_commodity_validation_by_authorized_user
    UseCase_Model_Manage_contract_commodities -->|unnamed| REQ_1_Skipping_commodity_validation_by_authorized_user
    Tab_Commodity_Tab_Commodity -->|unnamed| REQ_1_Skipping_commodity_validation_by_authorized_user
```
