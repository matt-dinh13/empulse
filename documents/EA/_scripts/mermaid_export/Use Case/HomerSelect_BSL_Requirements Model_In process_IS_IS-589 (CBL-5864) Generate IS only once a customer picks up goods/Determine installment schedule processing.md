# Determine installment schedule processing

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Requirements Model/In process/IS/IS-589 (CBL-5864) Generate IS only once a customer picks up goods
- **Diagram ID**: 163536
- **Elements**: 14
- **Connectors**: 3

```mermaid
graph LR
    Goods_received_Goods_received["Goods received : Goods received"]
    Use_Case_Model_Processing_disbursement_confirmation_message["Use Case Model : Processing disbursement confirmation message"]
    Use_Case_Model_Disbursement_confirmations["Use Case Model : Disbursement confirmations"]
    diagram_180A3199_F9B7_4531_BA4F_A3DC297F07E9["$diagram://{180A3199-F9B7-4531-BA4F-A3DC297F07E9}"]
    Calculation_of_ExpectedEndDate["Calculation of ExpectedEndDate"]
    n_01_474_Calculate_CEL_debt_info(("01.474 Calculate CEL debt info"))
    MOD_Evaluate_First_Installment_Due_Date["{MOD}Evaluate First Installment Due Date"]
    Total_Payment_Per_Credit["Total Payment Per Credit"]
    Total_Monthly_Payment_definition["Total Monthly Payment definition"]
    MOD_Annuity_base_amount_definition["{MOD}Annuity base amount definition"]
    Annuity_calculation["Annuity calculation"]
    UseCase_Model_Contract_signing["UseCase Model : Contract signing"]
    MOD_Update_data_in_contract_related_structures["{MOD}Update data in contract related structures"]
    System_event[/"System event"/]
    UseCase_Model_Contract_signing -->|unnamed| MOD_Update_data_in_contract_related_structures
    MOD_Update_data_in_contract_related_structures -->|unnamed| n_01_474_Calculate_CEL_debt_info
    Total_Payment_Per_Credit -->|unnamed| Total_Monthly_Payment_definition
```
