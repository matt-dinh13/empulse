# Cancellation of Insurance contract options

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Insurance finishing/Use case model
- **Diagram ID**: 164424
- **Elements**: 31
- **Connectors**: 31

```mermaid
graph LR
    Check_contract_for_active_COP_GRPER_period["Check contract for active COP/GRPER period"]
    unnamed["unnamed"]
    unnamed["unnamed"]
    unnamed["unnamed"]
    unnamed["unnamed"]
    unnamed["unnamed"]
    Contract_Insurance_Services_Contract_Insurance_Services_PUT_["Contract Insurance Services : Contract Insurance Services - PUT: Contract Insurance Service Cancel"]
    External_system[/"External system"/]
    n_08_111_Cancel_contract_insurance_common(("08.111 Cancel contract insurance common"))
    Contract_Insurance_Change_Requests_Contract_Insurance_Change["Contract Insurance Change Requests : Contract Insurance Change Requests - GET: ContractInsuranceCancelPreview"]
    n_08_452_Cancel_contract_insurance_service(("08.452 Cancel contract insurance service"))
    n_08_451_Get_Contract_insurance_Cancel_preview_service(("08.451 Get Contract insurance Cancel preview service"))
    User_Interface_Service_cancellation["User Interface : Service cancellation"]
    Assemble_Cancellation_Message_for_Information_area["Assemble Cancellation Message for Information area"]
    Calculate_new_installment_amount_on_insurance_cancellation["Calculate new installment amount on insurance cancellation"]
    Get_Tariff_Items_used_for_a_Service_fees["Get Tariff Items used for a Service fees"]
    MOD_05_180_Perform_coupling_payments_with_instalments(("{MOD}05.180 Perform coupling payments with instalments"))
    MOD_05_240_Cancel_outgoing_payments(("{MOD}05.240 Cancel outgoing payments"))
    Recalculate_Presented_Interest_rates_on_financial_parameters["Recalculate Presented Interest rates on financial parameters change"]
    n_03_030_Regenerate_installment_schedule(("03.030 Regenerate installment schedule"))
    MOD_11_111_Cancel_insurance_contract_manually(("{MOD}11.111 Cancel insurance contract manually"))
    UseCase_Model_Contract_cancellation["UseCase Model : Contract cancellation"]
    UseCase_Model_Contract_finishing["UseCase Model : Contract finishing"]
    Time[/"Time"/]
    User[/"User"/]
    n_11_110_Cancel_insurance_contract(("11.110 Cancel insurance contract"))
    n_01_330_Cancel_signed_contract_manually(("01.330 Cancel signed contract manually"))
    n_01_590_Cancel_active_contract_manually(("01.590 Cancel active contract manually"))
    n_01_360_Cancel_contract(("01.360 Cancel contract"))
    n_01_445_Cancel_undisbursed_contract(("01.445 Cancel undisbursed contract"))
    Insurance_Contract_Management["Insurance Contract Management"]
    Contract_Insurance_Change_Requests_Contract_Insurance_Change -->|unnamed| n_08_451_Get_Contract_insurance_Cancel_preview_service
    unnamed -->|unnamed| n_01_445_Cancel_undisbursed_contract
    unnamed -->|unnamed| n_01_590_Cancel_active_contract_manually
    unnamed -->|unnamed| n_01_330_Cancel_signed_contract_manually
    unnamed -->|unnamed| n_08_111_Cancel_contract_insurance_common
    unnamed -->|unnamed| n_01_360_Cancel_contract
    unnamed -->|unnamed| n_08_111_Cancel_contract_insurance_common
    Contract_Insurance_Services_Contract_Insurance_Services_PUT_ -->|unnamed| n_08_452_Cancel_contract_insurance_service
    n_08_111_Cancel_contract_insurance_common -->|unnamed| Recalculate_Presented_Interest_rates_on_financial_parameters
    n_08_111_Cancel_contract_insurance_common -.->|include| MOD_05_180_Perform_coupling_payments_with_instalments
    n_08_111_Cancel_contract_insurance_common -.->|include| n_03_030_Regenerate_installment_schedule
    n_08_111_Cancel_contract_insurance_common -.->|include| MOD_05_240_Cancel_outgoing_payments
    unnamed -->|unnamed| n_08_111_Cancel_contract_insurance_common
    MOD_11_111_Cancel_insurance_contract_manually -->|unnamed| Assemble_Cancellation_Message_for_Information_area
    n_01_360_Cancel_contract -.->|include| n_11_110_Cancel_insurance_contract
    n_01_590_Cancel_active_contract_manually --- User
    n_01_330_Cancel_signed_contract_manually --- User
    n_08_111_Cancel_contract_insurance_common -->|unnamed| Calculate_new_installment_amount_on_insurance_cancellation
    MOD_11_111_Cancel_insurance_contract_manually -->|unnamed| Calculate_new_installment_amount_on_insurance_cancellation
    n_08_111_Cancel_contract_insurance_common -.->|include| n_11_110_Cancel_insurance_contract
    MOD_11_111_Cancel_insurance_contract_manually -->|unnamed| Check_contract_for_active_COP_GRPER_period
    MOD_11_111_Cancel_insurance_contract_manually -->|unnamed| User_Interface_Service_cancellation
    Calculate_new_installment_amount_on_insurance_cancellation -->|unnamed| Get_Tariff_Items_used_for_a_Service_fees
    n_08_451_Get_Contract_insurance_Cancel_preview_service -->|unnamed| Calculate_new_installment_amount_on_insurance_cancellation
    n_08_452_Cancel_contract_insurance_service -.->|include| n_08_111_Cancel_contract_insurance_common
    n_01_360_Cancel_contract -.->|include| MOD_05_240_Cancel_outgoing_payments
    MOD_11_111_Cancel_insurance_contract_manually -.->|include| n_08_111_Cancel_contract_insurance_common
    User --> MOD_11_111_Cancel_insurance_contract_manually
    External_system --> n_08_452_Cancel_contract_insurance_service
    External_system --> n_08_451_Get_Contract_insurance_Cancel_preview_service
    Time --> n_01_445_Cancel_undisbursed_contract
```
