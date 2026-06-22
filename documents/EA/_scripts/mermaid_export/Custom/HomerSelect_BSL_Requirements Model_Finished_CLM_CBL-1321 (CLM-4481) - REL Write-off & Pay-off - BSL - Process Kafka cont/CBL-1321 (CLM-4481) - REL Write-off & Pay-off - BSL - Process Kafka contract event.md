# CBL-1321 (CLM-4481) - REL Write-off & Pay-off - BSL - Process Kafka contract event

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-1321 (CLM-4481) - REL Write-off & Pay-off - BSL - Process Kafka contract event
- **Diagram ID**: 158914
- **Elements**: 10
- **Connectors**: 2

```mermaid
graph TD
    DEL_Process_ContractPaidOffSE_CSI["{DEL}Process ContractPaidOffSE [CSI]"]
    Process_ContractWrittenOff["Process ContractWrittenOff"]
    Process_ContractWrittenOffSE_CLM["Process ContractWrittenOffSE [CLM]"]
    Process_ContractPaidOff["Process ContractPaidOff"]
    COMA["COMA"]
    n_01_740_Process_notification_about_credit_account_closure["01.740 Process notification about credit account closure "]
    Process_ContractPaidOffSE_CLM["Process ContractPaidOffSE [CLM] "]
    CLM_4481_REL_Write_off_Pay_off_BSL_Process_Kafka_contract_ev["CLM-4481 - REL Write-off and Pay-off - BSL - Process Kafka contract event"]
    Pay_off["Pay-off"]
    Write_off["Write-off"]
    COMA -->|unnamed| Process_ContractPaidOff
    COMA -->|unnamed| Process_ContractWrittenOff
```
