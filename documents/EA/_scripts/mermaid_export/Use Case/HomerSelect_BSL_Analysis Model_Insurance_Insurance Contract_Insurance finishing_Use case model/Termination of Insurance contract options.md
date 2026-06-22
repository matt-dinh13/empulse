# Termination of Insurance contract options

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Insurance finishing/Use case model
- **Diagram ID**: 164425
- **Elements**: 21
- **Connectors**: 22

```mermaid
graph LR
    Contract_Service_Notification_v5_Contract_Service_Notificati["Contract Service Notification v5 : Contract Service Notification v5"]
    unnamed["unnamed"]
    unnamed["unnamed"]
    unnamed["unnamed"]
    MOD_08_121_Terminate_contract_insurance_common(("{MOD}08.121 Terminate contract insurance common"))
    Assemble_Termination_Message_for_Information_area["Assemble Termination Message for Information area"]
    MOD_Calculate_new_installment_amount_on_service_termination["{MOD}Calculate new installment amount on service termination"]
    User_Interface_Service_termination["User Interface : Service termination"]
    Tab_Insurance_Tab_Insurance["Tab-Insurance : Tab-Insurance"]
    Get_Tariff_Items_used_for_a_Service_fees["Get Tariff Items used for a Service fees"]
    Recalculate_Presented_Interest_rates_on_financial_parameters["Recalculate Presented Interest rates on financial parameters change"]
    MOD_05_180_Perform_coupling_payments_with_instalments(("{MOD}05.180 Perform coupling payments with instalments"))
    MOD_05_200_Perform_decoupling(("{MOD}05.200 Perform decoupling"))
    n_11_121_Terminate_insurance_contract_manually(("11.121 Terminate insurance contract manually"))
    Get_termination_date_for_CEL_insurance["Get termination date for CEL insurance"]
    n_01_730_Finish_contract_manually(("01.730 Finish contract manually"))
    Insurance_contract_finishing_job["Insurance contract finishing job"]
    n_11_130_Terminate_finished_insurance_contracts(("11.130 Terminate finished insurance contracts"))
    Time[/"Time"/]
    User[/"User"/]
    MOD_11_120_Terminate_insurance_contract(("{MOD}11.120 Terminate insurance contract"))
    MOD_05_180_Perform_coupling_payments_with_instalments -.->|include| MOD_05_200_Perform_decoupling
    unnamed -->|unnamed| MOD_08_121_Terminate_contract_insurance_common
    unnamed -->|unnamed| n_01_730_Finish_contract_manually
    unnamed -->|unnamed| MOD_08_121_Terminate_contract_insurance_common
    unnamed -->|unnamed| n_11_130_Terminate_finished_insurance_contracts
    MOD_08_121_Terminate_contract_insurance_common -->|unnamed| Recalculate_Presented_Interest_rates_on_financial_parameters
    MOD_08_121_Terminate_contract_insurance_common -.->|include| MOD_05_180_Perform_coupling_payments_with_instalments
    MOD_08_121_Terminate_contract_insurance_common -.->|include| MOD_05_200_Perform_decoupling
    MOD_08_121_Terminate_contract_insurance_common -.->|include| MOD_11_120_Terminate_insurance_contract
    MOD_Calculate_new_installment_amount_on_service_termination -->|unnamed| Get_Tariff_Items_used_for_a_Service_fees
    unnamed -->|unnamed| MOD_08_121_Terminate_contract_insurance_common
    Tab_Insurance_Tab_Insurance -->|unnamed| n_11_121_Terminate_insurance_contract_manually
    n_11_121_Terminate_insurance_contract_manually -->|unnamed| Get_termination_date_for_CEL_insurance
    n_11_121_Terminate_insurance_contract_manually -->|unnamed| MOD_Calculate_new_installment_amount_on_service_termination
    n_11_121_Terminate_insurance_contract_manually -->|unnamed| Assemble_Termination_Message_for_Information_area
    n_11_121_Terminate_insurance_contract_manually -.->|include| MOD_08_121_Terminate_contract_insurance_common
    n_11_130_Terminate_finished_insurance_contracts -.->|include| MOD_11_120_Terminate_insurance_contract
    n_11_130_Terminate_finished_insurance_contracts -->|unnamed| Insurance_contract_finishing_job
    User_Interface_Service_termination -->|unnamed| n_11_121_Terminate_insurance_contract_manually
    User --> n_11_121_Terminate_insurance_contract_manually
    User --> n_01_730_Finish_contract_manually
    Time --- n_11_130_Terminate_finished_insurance_contracts
```
