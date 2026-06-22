# LOR-9046 DSM: integrate Cabinet to get file data to HO_CONTRACT_DATA

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9023 Secure Cash Loan - Allow CFA regeneration with the updated data after the signing process/LOR-9046 DSM: integrate Cabinet to get file data to HO_CONTRACT_DATA
- **Diagram ID**: 148961
- **Elements**: 4
- **Connectors**: 2

```mermaid
graph TD
    MOD_DocumentFile["{MOD}DocumentFile"]
    MOD_DocumentType["{MOD}DocumentType"]
    LOR_9046_DSM_integrate_Cabinet_to_get_file_data_to_HO_CONTRA["LOR-9046 DSM: integrate Cabinet to get file data to HO_CONTRACT_DATA"]
    LOR_9023_Secure_Cash_Loan_Allow_CFA_regeneration_with_the_up["LOR-9023 Secure Cash Loan - Allow CFA regeneration with the updated data after the signing process"]
    LOR_9046_DSM_integrate_Cabinet_to_get_file_data_to_HO_CONTRA -->|unnamed| LOR_9023_Secure_Cash_Loan_Allow_CFA_regeneration_with_the_up
    MOD_DocumentType -->|unnamed| MOD_DocumentFile
```
