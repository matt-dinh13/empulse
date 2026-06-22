# Fees-back service evaluation and processing

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Fees-back/Use case model
- **Diagram ID**: 160286
- **Elements**: 16
- **Connectors**: 15

```mermaid
graph LR
    DEL_05_500_Create_refund_automatically(("{DEL} 05.500 Create refund automatically"))
    Get_related_tariff_item_to_discount["Get related tariff item to discount"]
    Find_Tariff_Items_by_Tariff_Item_Type["Find Tariff Items by Tariff Item Type"]
    Generate_installment_schedule_Extended1_algorithm["Generate installment schedule - Extended1 algorithm"]
    Generate_installment_schedule_Basic_algorithm["Generate installment schedule - Basic algorithm"]
    MOD_Generate_installment_schedule_algorithm["{MOD}Generate installment schedule algorithm"]
    MOD_05_180_Perform_coupling_payments_with_instalments(("{MOD}05.180 Perform coupling payments with instalments"))
    n_03_030_Regenerate_installment_schedule(("03.030 Regenerate installment schedule"))
    Algorithm_Find_tariff_by_Current_Tariff_Use_flag["Algorithm: Find tariff by Current Tariff Use flag"]
    MOD_Algorithm_Calculate_tariff_item_amount["{MOD}Algorithm: Calculate tariff item amount"]
    Algorithm_Find_tariff_items_by_usage["Algorithm: Find tariff items by usage"]
    n_08_262_Process_Fees_back_service(("08.262 Process Fees-back service"))
    Evaluation_of_services_on_system_events_ODS_Obsolete["Evaluation of services on system events (ODS - Obsolete)"]
    ADD_08_260_Check_Fees_back_service(("{ADD}08.260 Check Fees-back service"))
    Checking_of_payment_discipline["Checking of payment discipline"]
    Checking_of_correct_installment_payments["Checking of correct installment payments "]
    Find_Tariff_Items_by_Tariff_Item_Type -->|unnamed| Algorithm_Find_tariff_by_Current_Tariff_Use_flag
    Get_related_tariff_item_to_discount -->|unnamed| Find_Tariff_Items_by_Tariff_Item_Type
    n_08_262_Process_Fees_back_service -.->|include| MOD_05_180_Perform_coupling_payments_with_instalments
    n_08_262_Process_Fees_back_service -->|unnamed| Get_related_tariff_item_to_discount
    n_08_262_Process_Fees_back_service -.->|include| n_03_030_Regenerate_installment_schedule
    Checking_of_payment_discipline -->|unnamed| Checking_of_correct_installment_payments
    n_08_262_Process_Fees_back_service -->|unnamed| MOD_Algorithm_Calculate_tariff_item_amount
    Evaluation_of_services_on_system_events_ODS_Obsolete -->|unnamed| n_08_262_Process_Fees_back_service
    Evaluation_of_services_on_system_events_ODS_Obsolete -->|unnamed| ADD_08_260_Check_Fees_back_service
    ADD_08_260_Check_Fees_back_service -->|unnamed| Checking_of_payment_discipline
    n_03_030_Regenerate_installment_schedule -->|unnamed| MOD_Generate_installment_schedule_algorithm
    Algorithm_Find_tariff_items_by_usage -->|unnamed| Algorithm_Find_tariff_by_Current_Tariff_Use_flag
    Generate_installment_schedule_Extended1_algorithm -->|unnamed| MOD_Generate_installment_schedule_algorithm
    Generate_installment_schedule_Basic_algorithm -->|unnamed| MOD_Generate_installment_schedule_algorithm
    DEL_05_500_Create_refund_automatically -.->|include| MOD_05_180_Perform_coupling_payments_with_instalments
```
