# CBL-16722 (CLM-4661) - BSL - start to send Kafka ContractEvent on contract changes

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-16722 (CLM-4661) - BSL - start to send Kafka ContractEvent on contract changes
- **Diagram ID**: 145010
- **Elements**: 28
- **Connectors**: 0

```mermaid
graph TD
    DEL_01_550_Process_request_for_contract_write_off["{DEL}01.550 Process request for contract write-off "]
    MOD_01_715_Finish_contract_automatically["{MOD}01.715 Finish contract automatically"]
    Process_ContractCancelled["Process ContractCancelled"]
    n_01_333_Cancel_active_contract_service["01.333 Cancel active contract service"]
    n_01_590_Cancel_active_contract_manually["01.590 Cancel active contract manually"]
    n_01_592_Cancel_paid_off_contract_manually["01.592 Cancel paid-off contract manually"]
    n_01_332_Cancel_signed_contract_service["01.332 Cancel signed contract service"]
    n_01_330_Cancel_signed_contract_manually["01.330 Cancel signed contract manually"]
    n_01_445_Cancel_undisbursed_contract["01.445 Cancel undisbursed contract"]
    Process_ContractWrittenOff["Process ContractWrittenOff"]
    Process_ContractPaidOff["Process ContractPaidOff"]
    n_01_740_Process_notification_about_credit_account_closure["01.740 Process notification about credit account closure "]
    n_01_502_Pay_off_CEL_contract["01.502 Pay-off CEL contract"]
    Process_ContractFinished["Process ContractFinished"]
    MOD_01_274_Activate_disbursed_contracts["{MOD}01.274 Activate disbursed contracts"]
    n_01_730_Finish_contract_manually["01.730 Finish contract manually"]
    Process_ContractActivated["Process ContractActivated"]
    Process_ContractSigned["Process ContractSigned"]
    MOD_01_290_Activate_contract["{MOD}01.290 Activate contract"]
    MOD_01_720_Reactivate_finished_contracts["{MOD}01.720 Reactivate finished contracts"]
    MOD_01_187_Sign_contract["{MOD}01.187 Sign contract"]
    CLM_4661_Start_to_send_Kafka_ContractEvent_on_contract_chang["CLM-4661 - Start to send Kafka ContractEvent on contract changes"]
    ContractSignSE_ContractSigned_Kafka["ContractSignSE =› ContractSigned Kafka"]
    ContractActivationSE_ContractActivated_Kafka["ContractActivationSE =› ContractActivated Kafka"]
    ContractFinishingAutomaticallySE_ContractFinished_Kafka["ContractFinishingAutomaticallySE =› ContractFinished Kafka"]
    ContractPaidOffSE_ContractPaidOff_Kafka["ContractPaidOffSE =› ContractPaidOff Kafka"]
    ContractWrittenOffSE_ContractWrittenOff_Kafka["ContractWrittenOffSE =› ContractWrittenOff Kafka"]
    ContractCancellationSE_ContractCancelled_Kafka["ContractCancellationSE =› ContractCancelled Kafka"]
```
