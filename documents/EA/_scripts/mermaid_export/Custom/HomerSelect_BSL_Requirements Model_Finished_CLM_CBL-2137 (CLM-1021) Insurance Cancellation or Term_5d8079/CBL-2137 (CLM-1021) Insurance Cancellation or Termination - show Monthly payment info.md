# CBL-2137 (CLM-1021) Insurance Cancellation or Termination - show Monthly payment info

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-2137 (CLM-1021) Insurance Cancellation or Termination - show Monthly payment info
- **Diagram ID**: 102490
- **Elements**: 6
- **Connectors**: 4

```mermaid
graph TD
    REQ_2_Calculate_Show_monthly_payments_on_Termination_insuran["REQ #2 - Calculate and Show monthly payments on Termination insurance screen"]
    User_Interface_Service_cancellation["User Interface : Service cancellation"]
    User_Interface_Service_termination["User Interface : Service termination"]
    REQ_1_Calculate_Show_monthly_payments_on_Cancel_insurance_sc["REQ #1 - Calculate and Show monthly payments on Cancel insurance screen"]
    n_11_121_Terminate_insurance_contract_manually["11.121 Terminate insurance contract manually"]
    MOD_11_111_Cancel_insurance_contract_manually["{MOD}11.111 Cancel insurance contract manually"]
    User_Interface_Service_termination -->|unnamed| REQ_2_Calculate_Show_monthly_payments_on_Termination_insuran
    User_Interface_Service_cancellation -->|unnamed| REQ_1_Calculate_Show_monthly_payments_on_Cancel_insurance_sc
    MOD_11_111_Cancel_insurance_contract_manually -->|unnamed| REQ_1_Calculate_Show_monthly_payments_on_Cancel_insurance_sc
    n_11_121_Terminate_insurance_contract_manually -->|unnamed| REQ_2_Calculate_Show_monthly_payments_on_Termination_insuran
```
