# CBL-16401 (CLM-4707) Post activation docs review - REM - register - registration

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Requirements/CBL-16401 (CLM-4707) Post activation docs review - REM - register - registration
- **Diagram ID**: 156790
- **Elements**: 5
- **Connectors**: 4

```mermaid
graph TD
    ContractRegistered_ContractRegistered["ContractRegistered : ContractRegistered"]
    register_register["register : register"]
    Access_Rights_Access_Rights["Access Rights : Access Rights"]
    Use_Cases_Get_registration_documents["Use Cases :Get registration documents"]
    CLM_4707_register_registration["CLM-4707 - register - registration"]
    CLM_4707_register_registration -->|unnamed| Use_Cases_Get_registration_documents
    CLM_4707_register_registration -->|unnamed| Access_Rights_Access_Rights
    CLM_4707_register_registration -->|unnamed| register_register
    CLM_4707_register_registration -->|unnamed| ContractRegistered_ContractRegistered
```
