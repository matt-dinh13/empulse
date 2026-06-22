# Installment plan for REL management

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Account management/Installment Plan for REL/Use Cases
- **Diagram ID**: 133201
- **Elements**: 16
- **Connectors**: 21

```mermaid
graph LR
    ADD_Determine_displaying_of_interest_rate["{ADD}Determine displaying of interest rate"]
    n_12_628_Print_installment_plan_overview_for_REL(("12.628 Print installment plan overview for REL"))
    Print_Server[/"Print Server"/]
    TransferBackInstallmentPlan_TransferBackInstallmentPlan["TransferBackInstallmentPlan : TransferBackInstallmentPlan"]
    CancelInstalmentPlan_CancelInstalmentPlan["CancelInstalmentPlan : CancelInstalmentPlan"]
    DoCoolingOffInstalmentPlan_DoCoolingOffInstalmentPlan["DoCoolingOffInstalmentPlan : DoCoolingOffInstalmentPlan"]
    GetInstalmentPlan_GetInstalmentPlan["GetInstalmentPlan : GetInstalmentPlan"]
    GetInstalmentPlanList_GetInstalmentPlanList["GetInstalmentPlanList : GetInstalmentPlanList"]
    Transfer_installment_plan_back_Transfer_installment_plan_bac["Transfer installment plan back : Transfer installment plan back"]
    User_Interface_Installment_plan_for_REL["User Interface : Installment plan for REL"]
    CaBus_AM[/"CaBus-AM"/]
    User[/"User"/]
    n_12_624_Cancel_installment_plan(("12.624 Cancel installment plan"))
    n_12_626_Cancel_installment_plan_in_cooling_off_period(("12.626 Cancel installment plan in cooling-off period"))
    n_12_622_Transfer_installment_plan_back_request(("12.622 Transfer installment plan back request"))
    n_12_620_Show_installment_plan_for_REL(("12.620 Show installment plan for REL"))
    CancelInstalmentPlan_CancelInstalmentPlan -->|unnamed| n_12_624_Cancel_installment_plan
    User_Interface_Installment_plan_for_REL -->|unnamed| n_12_624_Cancel_installment_plan
    DoCoolingOffInstalmentPlan_DoCoolingOffInstalmentPlan -->|unnamed| n_12_626_Cancel_installment_plan_in_cooling_off_period
    n_12_620_Show_installment_plan_for_REL -->|unnamed| ADD_Determine_displaying_of_interest_rate
    Transfer_installment_plan_back_Transfer_installment_plan_bac -->|unnamed| n_12_622_Transfer_installment_plan_back_request
    TransferBackInstallmentPlan_TransferBackInstallmentPlan -->|unnamed| n_12_622_Transfer_installment_plan_back_request
    User_Interface_Installment_plan_for_REL -->|unnamed| n_12_622_Transfer_installment_plan_back_request
    GetInstalmentPlan_GetInstalmentPlan -->|unnamed| n_12_620_Show_installment_plan_for_REL
    GetInstalmentPlanList_GetInstalmentPlanList -->|unnamed| n_12_620_Show_installment_plan_for_REL
    User_Interface_Installment_plan_for_REL -->|unnamed| n_12_620_Show_installment_plan_for_REL
    User_Interface_Installment_plan_for_REL -->|unnamed| n_12_626_Cancel_installment_plan_in_cooling_off_period
    User --> n_12_620_Show_installment_plan_for_REL
    User --> n_12_624_Cancel_installment_plan
    User --> n_12_626_Cancel_installment_plan_in_cooling_off_period
    User --> n_12_628_Print_installment_plan_overview_for_REL
    User --> n_12_622_Transfer_installment_plan_back_request
    CaBus_AM --> n_12_626_Cancel_installment_plan_in_cooling_off_period
    CaBus_AM --> n_12_628_Print_installment_plan_overview_for_REL
    CaBus_AM --> n_12_620_Show_installment_plan_for_REL
    CaBus_AM --> n_12_624_Cancel_installment_plan
    CaBus_AM --> n_12_622_Transfer_installment_plan_back_request
```
