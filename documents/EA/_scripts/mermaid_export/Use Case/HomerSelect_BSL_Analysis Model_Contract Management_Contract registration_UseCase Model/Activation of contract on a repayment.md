# Activation of contract on a repayment

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract registration/UseCase Model
- **Diagram ID**: 163264
- **Elements**: 10
- **Connectors**: 8

```mermaid
graph LR
    Process_ContractRegisteredSE_CLM(("Process ContractRegisteredSE [CLM]"))
    System_event[/"System event"/]
    CaBus_AM[/"CaBus-AM"/]
    MOD_Calculation_of_Loan_Service_parameters["{MOD}Calculation of Loan Service parameters"]
    MOD_05_091_Generate_outgoing_payment_insurance(("{MOD}05.091 Generate outgoing payment - insurance"))
    Activate_Disbursed_Contracts["Activate Disbursed Contracts"]
    n_11_040_Activate_insurance_contract(("11.040 Activate insurance contract"))
    Time[/"Time"/]
    MOD_01_274_Activate_disbursed_contracts(("{MOD}01.274 Activate disbursed contracts"))
    MOD_01_290_Activate_contract(("{MOD}01.290 Activate contract"))
    MOD_01_274_Activate_disbursed_contracts -.->|include| MOD_01_290_Activate_contract
    MOD_01_290_Activate_contract -.->|include| n_11_040_Activate_insurance_contract
    MOD_01_274_Activate_disbursed_contracts -->|unnamed| Activate_Disbursed_Contracts
    MOD_01_290_Activate_contract -.->|include| MOD_05_091_Generate_outgoing_payment_insurance
    MOD_01_290_Activate_contract -->|unnamed| MOD_Calculation_of_Loan_Service_parameters
    Time --> MOD_01_274_Activate_disbursed_contracts
    System_event --- Process_ContractRegisteredSE_CLM
    CaBus_AM --> MOD_01_290_Activate_contract
```
