# Contract Services - GET contract services v8

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Services/v8
- **Diagram ID**: 148004
- **Elements**: 14
- **Connectors**: 11

```mermaid
classDiagram
    class services["services"]
    class InsuranceCustomData["InsuranceCustomData"]
    class GetContractServicesRequest_v8["GetContractServicesRequest_v8"]
    class GetContractServicesResponse_v8["GetContractServicesResponse_v8"]
    class Insurance_v3["Insurance_v3"]
    class InsuranceCommodity_v3["InsuranceCommodity_v3"]
    class LoanService_v3["LoanService_v3"]
    class CoolingOffPeriod["CoolingOffPeriod"]
    class GracePeriod["GracePeriod"]
    class GiftPayment["GiftPayment"]
    class Use_Case_Model_Customer_Self_Care_API_Use_Case_Model["Use Case Model :Customer Self-Care API - Use Case Model"]
    class Application_Interface_Model_Application_Interface_Model["Application Interface Model : Application Interface Model"]
    class Contract_Service_Services["Contract Service Services"]
    class n_01_759_Get_contract_services_for_self_care["01.759 Get contract services for self-care"]
    GetContractServicesResponse_v8 --> LoanService_v3 : unnamed
    Insurance_v3 --> InsuranceCommodity_v3 : unnamed
    Insurance_v3 --> InsuranceCustomData : unnamed
    LoanService_v3 <|-- Insurance_v3 : unnamed
    LoanService_v3 <|-- GracePeriod : unnamed
    LoanService_v3 <|-- GiftPayment : unnamed
    LoanService_v3 <|-- CoolingOffPeriod : unnamed
    Contract_Service_Services --> GetContractServicesRequest_v8 : unnamed
    Contract_Service_Services --> GetContractServicesResponse_v8 : unnamed
    Contract_Service_Services ..> n_01_759_Get_contract_services_for_self_care : unnamed
    services o-- Contract_Service_Services : unnamed
```
