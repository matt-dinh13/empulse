# CLM-5981 Termination of the SAI with installments

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan/CLM-5981 Termination of the SAI with installments
- **Diagram ID**: 156647
- **Elements**: 10
- **Connectors**: 13

```mermaid
graph LR
    External_system[/"External system"/]
    User[/"User"/]
    Assemble_Termination_Message_for_Information_area["Assemble Termination Message for Information area"]
    MOD_Calculate_new_installment_amount_on_service_termination["{MOD}Calculate new installment amount on service termination"]
    n_08_454_Terminate_contract_insurance_service(("08.454 Terminate contract insurance service"))
    n_08_453_Get_Contract_insurance_Terminate_preview_service(("08.453 Get Contract insurance Terminate preview service"))
    n_11_121_Terminate_insurance_contract_manually(("11.121 Terminate insurance contract manually"))
    MOD_Check_conditions_to_insurance_termination["{MOD}Check conditions to insurance termination"]
    MOD_08_121_Terminate_contract_insurance_common(("{MOD}08.121 Terminate contract insurance common"))
    ADD_Calculate_SAI_terminated_installment_parts_amount["{ADD}Calculate SAI terminated installment parts amount"]
    External_system --> n_08_453_Get_Contract_insurance_Terminate_preview_service
    External_system --> n_08_454_Terminate_contract_insurance_service
    User --> n_11_121_Terminate_insurance_contract_manually
    n_08_453_Get_Contract_insurance_Terminate_preview_service -->|unnamed| MOD_Check_conditions_to_insurance_termination
    n_08_453_Get_Contract_insurance_Terminate_preview_service -->|unnamed| MOD_Calculate_new_installment_amount_on_service_termination
    n_11_121_Terminate_insurance_contract_manually -->|unnamed| ADD_Calculate_SAI_terminated_installment_parts_amount
    n_11_121_Terminate_insurance_contract_manually -.->|include| MOD_08_121_Terminate_contract_insurance_common
    n_11_121_Terminate_insurance_contract_manually -->|unnamed| Assemble_Termination_Message_for_Information_area
    n_11_121_Terminate_insurance_contract_manually -->|unnamed| MOD_Calculate_new_installment_amount_on_service_termination
    n_11_121_Terminate_insurance_contract_manually -->|unnamed| MOD_Check_conditions_to_insurance_termination
    n_08_454_Terminate_contract_insurance_service -->|unnamed| MOD_Check_conditions_to_insurance_termination
    n_08_454_Terminate_contract_insurance_service -.->|include| MOD_08_121_Terminate_contract_insurance_common
    MOD_08_121_Terminate_contract_insurance_common -->|unnamed| ADD_Calculate_SAI_terminated_installment_parts_amount
```
