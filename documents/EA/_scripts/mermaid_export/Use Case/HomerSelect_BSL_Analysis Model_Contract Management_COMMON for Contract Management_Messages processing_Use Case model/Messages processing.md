# Messages processing

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Messages processing/Use Case model
- **Diagram ID**: 164548
- **Elements**: 25
- **Connectors**: 25

```mermaid
graph LR
    External_Reference["External Reference"]
    ADD_Process_ContractMigrationRollback(("{ADD}Process ContractMigrationRollback"))
    ADD_Process_ContractMigrated(("{ADD}Process ContractMigrated"))
    External_Reference["External Reference"]
    Core_Banking_System[/"Core Banking System"/]
    ContractRegistrationEvent_ContractRegistered["ContractRegistrationEvent : ContractRegistered"]
    Process_ContractRegistered(("Process ContractRegistered
"))
    REM[/"REM"/]
    ContractCancelled_ContractCancelled["ContractCancelled : ContractCancelled"]
    ContractActivated_ContractActivated["ContractActivated : ContractActivated"]
    ContractSigned_ContractSigned["ContractSigned : ContractSigned"]
    ContractFinished_ContractFinished["ContractFinished : ContractFinished"]
    ContractWrittenOff_ContractWrittenOff["ContractWrittenOff : ContractWrittenOff"]
    ContractPaidOff_ContractPaidOff["ContractPaidOff : ContractPaidOff"]
    ContractFinished_ContractFinished["ContractFinished : ContractFinished"]
    Process_ContractCancelled(("Process ContractCancelled"))
    Process_ContractFinished(("Process ContractFinished"))
    BSL[/"BSL"/]
    Process_ContractActivated(("Process ContractActivated"))
    Process_ContractSigned(("Process ContractSigned"))
    ContractWrittenOff_ContractWrittenOff["ContractWrittenOff : ContractWrittenOff"]
    ContractPaidOff_ContractPaidOff["ContractPaidOff : ContractPaidOff"]
    Process_ContractWrittenOff(("Process ContractWrittenOff"))
    Process_ContractPaidOff(("Process ContractPaidOff"))
    COMA[/"COMA"/]
    Process_ContractRegistered -->|unnamed| ContractRegistrationEvent_ContractRegistered
    Process_ContractCancelled -->|unnamed| ContractCancelled_ContractCancelled
    Process_ContractActivated -->|unnamed| ContractActivated_ContractActivated
    Process_ContractSigned -->|unnamed| ContractSigned_ContractSigned
    Process_ContractFinished -->|unnamed| ContractFinished_ContractFinished
    Process_ContractWrittenOff -->|unnamed| ContractWrittenOff_ContractWrittenOff
    Process_ContractPaidOff -->|unnamed| ContractPaidOff_ContractPaidOff
    Process_ContractFinished -->|unnamed| ContractFinished_ContractFinished
    ADD_Process_ContractMigrationRollback --- COMA
    Process_ContractWrittenOff -->|unnamed| ContractWrittenOff_ContractWrittenOff
    Process_ContractPaidOff -->|unnamed| ContractPaidOff_ContractPaidOff
    ADD_Process_ContractMigrated --- COMA
    Process_ContractCancelled --- COMA
    BSL --- Process_ContractFinished
    BSL --- Process_ContractSigned
    BSL --- Process_ContractPaidOff
    BSL --- Process_ContractCancelled
    BSL --- Process_ContractWrittenOff
    BSL --- Process_ContractActivated
    COMA --- External_Reference
    COMA --- Process_ContractPaidOff
    COMA --> Process_ContractWrittenOff
    COMA --- Process_ContractFinished
    REM --- Process_ContractRegistered
    Core_Banking_System --> External_Reference
```
