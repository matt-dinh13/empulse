# CBL-4834 (CLM-1782) API for Insurance Cancellation and Termination

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4834 (CLM-1782) API for Insurance Cancellation and Termination
- **Diagram ID**: 112151
- **Elements**: 9
- **Connectors**: 6

```mermaid
graph TD
    Contract_Insurance_Change_Requests_Contract_Insurance_Change["Contract Insurance Change Requests : Contract Insurance Change Requests - GET: ContractInsuranceCancelPreview"]
    Contract_Insurance_Change_Requests_Contract_Insurance_Change["Contract Insurance Change Requests : Contract Insurance Change Requests - GET: ContractInsuranceTerminatePreview"]
    Contract_Insurance_Services_Contract_Insurance_Services_PUT_["Contract Insurance Services : Contract Insurance Services - PUT: Contract Insurance Service Terminate"]
    Use_case_model_Contract_insurance_cancellation["Use case model : Contract insurance cancellation"]
    Use_case_model_Contract_insurance_termination["Use case model : Contract insurance termination"]
    Contract_Insurance_Services_Contract_Insurance_Services_GET_["Contract Insurance Services : Contract Insurance Services - GET: Contract list Insurances"]
    Contract_Insurance_Services_Contract_Insurance_Services_PUT_["Contract Insurance Services : Contract Insurance Services - PUT: Contract Insurance Service Cancel"]
    REQ_2_Exposing_web_service_for_insurance_termination["REQ #2 - Exposing web service for insurance termination"]
    REQ_1_Exposing_web_service_for_insurance_cancellation["REQ #1 - Exposing web service for insurance cancellation"]
    Contract_Insurance_Services_Contract_Insurance_Services_PUT_ -->|unnamed| REQ_1_Exposing_web_service_for_insurance_cancellation
    Use_case_model_Contract_insurance_cancellation -->|unnamed| REQ_1_Exposing_web_service_for_insurance_cancellation
    Contract_Insurance_Change_Requests_Contract_Insurance_Change -->|unnamed| REQ_1_Exposing_web_service_for_insurance_cancellation
    Contract_Insurance_Services_Contract_Insurance_Services_PUT_ -->|unnamed| REQ_2_Exposing_web_service_for_insurance_termination
    Use_case_model_Contract_insurance_termination -->|unnamed| REQ_2_Exposing_web_service_for_insurance_termination
    Contract_Insurance_Change_Requests_Contract_Insurance_Change -->|unnamed| REQ_2_Exposing_web_service_for_insurance_termination
```
