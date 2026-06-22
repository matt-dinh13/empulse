# PAYM-2314 CBL-2048 (CBL-6282) New accounting specs for Insurance Securitization

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-2314 CBL-2048 (CBL-6282) New accounting specs for Insurance Securitization
- **Diagram ID**: 117071
- **Elements**: 5
- **Connectors**: 4

```mermaid
graph TD
    Generated_JMS_messages_Contract_Securitization["Generated JMS messages - Contract Securitization"]
    Debt_Securitization["Debt Securitization"]
    Contract_securitization_LDM["Contract securitization - LDM"]
    New_accounting_specs_for_Insurance_Securitization["New accounting specs for Insurance Securitization"]
    PAYM_2314_CBL_2048_CBL_6282_New_accounting_specs_for_Insuran["PAYM-2314 CBL-2048 (CBL-6282) New accounting specs for Insurance Securitization"]
    Contract_securitization_LDM -->|unnamed| New_accounting_specs_for_Insurance_Securitization
    Debt_Securitization -->|unnamed| New_accounting_specs_for_Insurance_Securitization
    Generated_JMS_messages_Contract_Securitization -->|unnamed| New_accounting_specs_for_Insurance_Securitization
    New_accounting_specs_for_Insurance_Securitization -->|unnamed| PAYM_2314_CBL_2048_CBL_6282_New_accounting_specs_for_Insuran
```
