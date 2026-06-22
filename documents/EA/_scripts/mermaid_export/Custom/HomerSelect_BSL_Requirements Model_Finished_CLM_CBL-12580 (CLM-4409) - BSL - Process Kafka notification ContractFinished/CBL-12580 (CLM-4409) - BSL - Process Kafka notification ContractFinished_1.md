# CBL-12580 (CLM-4409) - BSL - Process Kafka notification ContractFinished

```mermaid
graph TD
    Process_ContractFinished["Process ContractFinished"]
    COMA["COMA"]
    Time["Time"]
    ADD_08_605_Update_CEL_reward_payment_channel_automatically["{ADD}08.605 Update CEL reward payment channel automatically"]
    MOD_Process_ContractFinishingAutomaticallySE_CLM["{MOD}Process ContractFinishingAutomaticallySE [CLM]"]
    CLM_4409_BSL_Process_Kafka_notification_ContractFinished["CLM-4409 - BSL - Process Kafka notification ContractFinished"]
    Swith_for_BSL_COMA_module_finishing["Swith for BSL/COMA module finishing"]
    Move_insurence_contract_deactiv["Move insurence contract deactiv"]
    Processing_Kafka_ContractFinished["Processing Kafka ContractFinished"]
    MOD_01_700_Choose_contracts_suitable_to_finishing["{MOD}01.700 Choose contracts suitable to finishing"]
    MOD_01_715_Finish_contract_automatically["{MOD}01.715 Finish contract automatically"]
    COMA -->|unnamed| Process_ContractFinished
    Time -->|unnamed| MOD_01_700_Choose_contracts_suitable_to_finishing
```
