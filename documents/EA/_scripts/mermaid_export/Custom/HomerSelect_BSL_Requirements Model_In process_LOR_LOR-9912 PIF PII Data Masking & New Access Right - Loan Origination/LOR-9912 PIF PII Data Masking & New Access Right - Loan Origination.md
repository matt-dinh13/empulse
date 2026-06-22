# LOR-9912 PIF PII Data Masking & New Access Right - Loan Origination

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9912 PIF PII Data Masking & New Access Right - Loan Origination
- **Diagram ID**: 159089
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph TD
    LOR_10198_Integration_to_new_version_of_PIF_endpoint["LOR-10198 Integration to new version of PIF endpoint"]
    LOR_10355_RBP_integrate_to_v2_PIF_API["LOR-10355 RBP: integrate to /v2 PIF API"]
    LOR_9883_Remove_obsolete_switches_related_to_applicant["LOR-9883 Remove obsolete switches related to applicant"]
    LOR_9912_PIF_PII_Data_Masking_New_Access_Right_Loan_Originat["LOR-9912 PIF PII Data Masking and New Access Right - Loan Origination"]
    LOR_9883_Remove_obsolete_switches_related_to_applicant -->|unnamed| LOR_9912_PIF_PII_Data_Masking_New_Access_Right_Loan_Originat
    LOR_10198_Integration_to_new_version_of_PIF_endpoint -->|unnamed| LOR_9912_PIF_PII_Data_Masking_New_Access_Right_Loan_Originat
    LOR_10355_RBP_integrate_to_v2_PIF_API -->|unnamed| LOR_9912_PIF_PII_Data_Masking_New_Access_Right_Loan_Originat
```
