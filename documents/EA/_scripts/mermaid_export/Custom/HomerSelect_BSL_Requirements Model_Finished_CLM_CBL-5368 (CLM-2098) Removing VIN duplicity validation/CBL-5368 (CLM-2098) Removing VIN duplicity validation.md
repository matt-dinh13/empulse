# CBL-5368 (CLM-2098) Removing VIN duplicity validation

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5368 (CLM-2098) Removing VIN duplicity validation
- **Diagram ID**: 117321
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph TD
    UseCase_Model_Contract_registration["UseCase Model : Contract registration"]
    UseCase_Model_Contract_signing["UseCase Model : Contract signing"]
    REQ_1_Removing_VIN_duplicity_check_from_contract_sign_and_re["REQ #1 - Removing VIN duplicity check from contract sign and registration"]
    UseCase_Model_Contract_signing -->|unnamed| REQ_1_Removing_VIN_duplicity_check_from_contract_sign_and_re
    REQ_1_Removing_VIN_duplicity_check_from_contract_sign_and_re -->|unnamed| UseCase_Model_Contract_registration
```
