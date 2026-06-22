# PAYM-6304 (CBL-31820) Migrate BSL Bank Account Validation from Artajasa Integration to BITE System

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-6304 (CBL-31820) Migrate BSL Bank Account Validation from Artajasa Integration to BITE System
- **Diagram ID**: 164660
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph TD
    MOD_CBL_31820_00_300_Verify_bank_account_data_externally_ser["{MOD CBL-31820}00.300 - Verify bank account data externally - service(/MOD)"]
    BITE["BITE"]
    REQ_1_Migrate_BSL_Bank_Account_Validation_from_Artajasa_Inte["REQ#1 Migrate BSL Bank Account Validation from Artajasa Integration to BITE System"]
    REQ_1_Migrate_BSL_Bank_Account_Validation_from_Artajasa_Inte -->|unnamed| MOD_CBL_31820_00_300_Verify_bank_account_data_externally_ser
    REQ_1_Migrate_BSL_Bank_Account_Validation_from_Artajasa_Inte -->|unnamed| BITE
```
