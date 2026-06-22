# CBL-7042 (CLM-2398) Separate ISPAY and CLM processing of ContractRegistrationSE and ContractActivationSE

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7042 (CLM-2398) Separate ISPAY and CLM processing of ContractRegistrationSE and ContractActivationSE
- **Diagram ID**: 119741
- **Elements**: 6
- **Connectors**: 5

```mermaid
graph TD
    ContractSystemEvent_schema["ContractSystemEvent schema"]
    Contract_finishing_automatically["Contract finishing automatically"]
    Contract_registration["Contract registration"]
    Processing_of_ContractSystemEvents["Processing of ContractSystemEvents"]
    CLM_2398_Separate_ISPAY_and_CLM_processing_of_ContractRegist["CLM-2398 Separate ISPAY and CLM processing of ContractRegistrationSE and ContractActivationSE"]
    CBL_7042_CLM_2274_Monitor_and_reprocess_failed_financial_JMS["CBL-7042 (CLM-2274) Monitor and reprocess failed financial JMS events"]
    Processing_of_ContractSystemEvents -->|unnamed| CLM_2398_Separate_ISPAY_and_CLM_processing_of_ContractRegist
    Contract_registration -->|unnamed| CLM_2398_Separate_ISPAY_and_CLM_processing_of_ContractRegist
    Contract_finishing_automatically -->|unnamed| CLM_2398_Separate_ISPAY_and_CLM_processing_of_ContractRegist
    ContractSystemEvent_schema -->|unnamed| CLM_2398_Separate_ISPAY_and_CLM_processing_of_ContractRegist
    CLM_2398_Separate_ISPAY_and_CLM_processing_of_ContractRegist -->|unnamed| CBL_7042_CLM_2274_Monitor_and_reprocess_failed_financial_JMS
```
