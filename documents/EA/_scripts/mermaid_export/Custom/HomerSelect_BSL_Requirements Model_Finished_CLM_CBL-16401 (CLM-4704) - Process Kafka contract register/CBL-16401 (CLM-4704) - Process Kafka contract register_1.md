# CBL-16401 (CLM-4704) - Process Kafka contract register

```mermaid
graph TD
    MOD_Process_ContractRegisteredSE_PAY["{MOD}Process ContractRegisteredSE [PAY]"]
    Process_ContractRegisteredSE_CLM["Process ContractRegisteredSE [CLM]"]
    MOD_ContractRegisteredSE["{MOD}ContractRegisteredSE"]
    Process_ContractRegistered["Process ContractRegistered
"]
    REM["REM"]
    ADD_ContractRegistered["{ADD}ContractRegistered"]
    CLM_4704_Process_Kafka_contract_register["CLM-4704 Process Kafka contract register"]
    REM -->|unnamed| Process_ContractRegistered
    MOD_ContractRegisteredSE -->|unnamed| Process_ContractRegisteredSE_CLM
    MOD_ContractRegisteredSE -->|unnamed| MOD_Process_ContractRegisteredSE_PAY
```
