# CBL-22844 (CLM-5856) DDM flag-Blacklisted & Re-used Registration to be disabled across all products

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-22844 (CLM-5856) Repayment bank account number flag-Blacklisted & Re-used Registration to be disabled across all products
- **Diagram ID**: 157001
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph TD
    UseCase_Model_Contract_registration["UseCase Model : Contract registration"]
    Use_Cases_Register_contract["Use Cases : Register contract"]
    CLM_6024_Extend_conditions_when_Contract_Registration_is_all["CLM-6024 Extend conditions when Contract Registration is allowed (REM)"]
    Use_Cases_Register_contract -->|unnamed| CLM_6024_Extend_conditions_when_Contract_Registration_is_all
    UseCase_Model_Contract_registration -->|unnamed| CLM_6024_Extend_conditions_when_Contract_Registration_is_all
```
