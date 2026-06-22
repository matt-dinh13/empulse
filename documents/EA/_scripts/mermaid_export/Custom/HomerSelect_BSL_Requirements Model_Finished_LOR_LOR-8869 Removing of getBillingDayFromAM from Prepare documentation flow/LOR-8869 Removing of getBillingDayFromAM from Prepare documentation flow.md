# LOR-8869 Removing of getBillingDayFromAM from Prepare documentation flow

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8869 Removing of getBillingDayFromAM from Prepare documentation flow
- **Diagram ID**: 148014
- **Elements**: 6
- **Connectors**: 2

```mermaid
graph TD
    DEL_Billing_day_determination["{DEL}Billing day determination"]
    RevolvingContractParametersDto["RevolvingContractParametersDto"]
    MOD_Contract_Origination_Global_Parameter["{MOD}Contract Origination Global Parameter"]
    MOD_01_186_Prepare_documentation["{MOD}01.186 Prepare documentation"]
    LOR_8870_Removing_of_getBillingDayFromAM_from_Prepare_docume["LOR-8870 Removing of getBillingDayFromAM from Prepare documentation flow"]
    LOR_8869_Removing_of_getBillingDayFromAM_from_Prepare_docume["LOR-8869 Removing of getBillingDayFromAM from Prepare documentation flow"]
    LOR_8870_Removing_of_getBillingDayFromAM_from_Prepare_docume -->|unnamed| LOR_8869_Removing_of_getBillingDayFromAM_from_Prepare_docume
    MOD_01_186_Prepare_documentation -->|{DEL LOR-8870}| DEL_Billing_day_determination
```
