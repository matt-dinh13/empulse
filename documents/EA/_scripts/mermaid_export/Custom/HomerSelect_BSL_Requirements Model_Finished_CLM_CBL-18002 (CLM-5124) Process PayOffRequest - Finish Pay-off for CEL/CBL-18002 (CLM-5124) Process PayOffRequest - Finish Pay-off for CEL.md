# CBL-18002 (CLM-5124) Process PayOffRequest - Finish Pay-off for CEL

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-18002 (CLM-5124) Process PayOffRequest - Finish Pay-off for CEL
- **Diagram ID**: 148814
- **Elements**: 11
- **Connectors**: 8

```mermaid
graph TD
    Termination_due_date["Termination due date"]
    n_01_550_Write_off_CEL_contract["01.550 Write-off CEL contract"]
    n_03_140_Recalculate_accrued_income["03.140 Recalculate accrued income"]
    MOD_03_120_Pay_off_installment_schedule["{MOD}03.120 Pay off installment schedule"]
    Check_pay_off_possibility_algorithm_GUI_RMQ["Check pay-off possibility algorithm (GUI/RMQ)"]
    n_01_501_Pay_off_CEL_contract_from_external_system["01.501 Pay-off CEL contract from external system"]
    n_01_410_Pay_off_contract_manually["01.410 Pay-off contract manually"]
    n_01_502_Pay_off_CEL_contract["01.502 Pay-off CEL contract"]
    payOffContract_payOffContract["payOffContract : payOffContract"]
    CBL_18002_CLM_5124_Process_PayOffRequest_Finish_Pay_off_for_["CBL-18002 (CLM-5124) Process PayOffRequest - Finish Pay-off for CEL"]
    JMS_CEL_pay_off["JMS CEL pay-off"]
    Termination_due_date -->|unnamed| Check_pay_off_possibility_algorithm_GUI_RMQ
    Check_pay_off_possibility_algorithm_GUI_RMQ -->|unnamed| n_01_410_Pay_off_contract_manually
    n_01_410_Pay_off_contract_manually -->|unnamed| n_01_502_Pay_off_CEL_contract
    n_01_410_Pay_off_contract_manually -->|unnamed| Termination_due_date
    n_01_502_Pay_off_CEL_contract -->|unnamed| MOD_03_120_Pay_off_installment_schedule
    n_01_501_Pay_off_CEL_contract_from_external_system -->|unnamed| Check_pay_off_possibility_algorithm_GUI_RMQ
    n_01_550_Write_off_CEL_contract -->|unnamed| MOD_03_120_Pay_off_installment_schedule
    MOD_03_120_Pay_off_installment_schedule -->|unnamed| n_03_140_Recalculate_accrued_income
```
