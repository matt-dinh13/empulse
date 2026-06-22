# LOR-9156 Payment channel masking

```mermaid
graph TD
    n_01_210_Show_contract_detail_display_bank_accout_data["01.210 Show contract detail (display bank accout data)"]
    Show_Bank_Account["Show Bank Account"]
    LOR_9156_Payment_channel_masking["LOR-9156 Payment channel masking"]
    LOR_9083_PII_data_masking_on_BSL["LOR-9083 PII data masking on BSL"]
    LOR_9156_Payment_channel_masking -->|unnamed| LOR_9083_PII_data_masking_on_BSL
    Show_Bank_Account -->|unnamed| n_01_210_Show_contract_detail_display_bank_accout_data
```
