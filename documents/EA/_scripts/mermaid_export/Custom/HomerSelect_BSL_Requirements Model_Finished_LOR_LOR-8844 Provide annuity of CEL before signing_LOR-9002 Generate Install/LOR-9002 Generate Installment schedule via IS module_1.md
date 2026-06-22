# LOR-9002 Generate Installment schedule via IS module

```mermaid
graph TD
    MOD_Switches_for_LOR_tasks["{MOD}Switches for LOR tasks"]
    MOD_01_186_Prepare_documentation["{MOD}01.186 Prepare documentation"]
    Preliminary_installment_schedule["Preliminary installment schedule"]
    LOR_9002_Generate_Installment_schedule_via_IS_module["LOR-9002 Generate Installment schedule via IS module"]
    LOR_8844_Provide_annuity_of_CEL_before_signing["LOR-8844 Provide annuity of CEL before signing"]
    LOR_9002_Generate_Installment_schedule_via_IS_module -->|unnamed| LOR_8844_Provide_annuity_of_CEL_before_signing
```
