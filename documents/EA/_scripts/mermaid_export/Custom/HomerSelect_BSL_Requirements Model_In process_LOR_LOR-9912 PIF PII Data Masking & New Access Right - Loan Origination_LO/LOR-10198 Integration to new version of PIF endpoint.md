# LOR-10198 Integration to new version of PIF endpoint

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9912 PIF PII Data Masking & New Access Right - Loan Origination/LOR-10198 Integration to new version of PIF endpoint
- **Diagram ID**: 159132
- **Elements**: 5
- **Connectors**: 2

```mermaid
graph TD
    MOD_01_210_Show_contract_detail["{MOD}01.210 Show contract detail"]
    MOD_Get_applicant_data_from_PIF["{MOD}Get applicant data from PIF"]
    MOD_Switches_for_LOR_tasks["{MOD}Switches for LOR tasks"]
    LOR_10198_Integration_to_new_version_of_PIF_endpoint["LOR-10198 Integration to new version of PIF endpoint"]
    LOR_9912_PIF_PII_Data_Masking_New_Access_Right_Loan_Originat["LOR-9912 PIF PII Data Masking and New Access Right - Loan Origination"]
    LOR_10198_Integration_to_new_version_of_PIF_endpoint -->|unnamed| LOR_9912_PIF_PII_Data_Masking_New_Access_Right_Loan_Originat
    MOD_01_210_Show_contract_detail -->|unnamed| MOD_Get_applicant_data_from_PIF
```
