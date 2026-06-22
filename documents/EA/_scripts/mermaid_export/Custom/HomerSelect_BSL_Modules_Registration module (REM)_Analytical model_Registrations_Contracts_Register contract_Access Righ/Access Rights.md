# Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Analytical model/Registrations/Contracts/Register contract/Access Rights
- **Diagram ID**: 160027
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph TD
    MOD_Register_contract["{MOD}Register contract"]
    MOD_Register_contract_via_API["{MOD}Register contract via  API"]
    MOD_Register_contract_automatically["{MOD}Register contract automatically"]
    ADD_Register_contract["{ADD}Register contract"]
    MOD_Register_contract_via_API -->|unnamed| MOD_Register_contract
    MOD_Register_contract_automatically -->|unnamed| MOD_Register_contract
    MOD_Register_contract_via_API -->|unnamed| ADD_Register_contract
```
