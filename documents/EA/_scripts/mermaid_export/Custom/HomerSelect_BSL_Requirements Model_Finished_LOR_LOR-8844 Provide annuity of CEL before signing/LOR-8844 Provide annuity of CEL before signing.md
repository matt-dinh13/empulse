# LOR-8844 Provide annuity of CEL before signing

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8844 Provide annuity of CEL before signing
- **Diagram ID**: 150773
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph TD
    LOR_9009_Prepare_IS_data_for_creation_of_Installment_and_Ins["LOR-9009 Prepare IS data for creation of Installment and Installment Part in sign UC"]
    LOR_9002_Generate_Installment_schedule_via_IS_module["LOR-9002 Generate Installment schedule via IS module"]
    LOR_8844_Provide_annuity_of_CEL_before_signing["LOR-8844 Provide annuity of CEL before signing"]
    LOR_9003_Store_generated_Installment_schedule_in_IS_module["LOR-9003 Store generated Installment schedule in IS module"]
    LOR_9003_Store_generated_Installment_schedule_in_IS_module -->|unnamed| LOR_8844_Provide_annuity_of_CEL_before_signing
    LOR_9002_Generate_Installment_schedule_via_IS_module -->|unnamed| LOR_8844_Provide_annuity_of_CEL_before_signing
    LOR_9009_Prepare_IS_data_for_creation_of_Installment_and_Ins -->|unnamed| LOR_8844_Provide_annuity_of_CEL_before_signing
```
