# LOR-8869 Removing of getBillingDayFromAM from Prepare documentation flow

```mermaid
graph TD
    RevolvingContractParametersDto["RevolvingContractParametersDto"]
    MOD_Contract_Origination_Global_Parameter["{MOD}Contract Origination Global Parameter"]
    MOD_01_186_Prepare_documentation["{MOD}01.186 Prepare documentation"]
    LOR_8870_Removing_of_getBillingDayFromAM_from_Prepare_docume["LOR-8870 Removing of getBillingDayFromAM from Prepare documentation flow"]
    LOR_8869_Removing_of_getBillingDayFromAM_from_Prepare_docume["LOR-8869 Removing of getBillingDayFromAM from Prepare documentation flow"]
    DEL_Billing_day_determination["{DEL}Billing day determination"]
    LOR_8870_Removing_of_getBillingDayFromAM_from_Prepare_docume -->|unnamed| LOR_8869_Removing_of_getBillingDayFromAM_from_Prepare_docume
    MOD_01_186_Prepare_documentation -->|{DEL LOR-8870}| DEL_Billing_day_determination
```
