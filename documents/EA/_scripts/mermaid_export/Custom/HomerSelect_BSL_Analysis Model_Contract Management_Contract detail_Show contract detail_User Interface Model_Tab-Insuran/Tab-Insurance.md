# Tab-Insurance

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Tab-Insurance
- **Diagram ID**: 151366
- **Elements**: 11
- **Connectors**: 8

```mermaid
graph TD
    Replace_service["Replace service"]
    Show_Insurance_information["Show Insurance information"]
    Insurance_prolongation["Insurance prolongation"]
    Show_insurance_operation_status["Show insurance operation status"]
    Add_available_Insurance_on_Contract["Add available Insurance on Contract"]
    n_08_340_Show_Insurance_offers_for_loan_contract["08.340 Show Insurance offers for loan contract"]
    Add_insurance["Add insurance"]
    Service_cancellation["Service cancellation"]
    Service_Termination["Service Termination"]
    Insurance_services["Insurance services"]
    Tab_Insurance["Tab-Insurance"]
    Insurance_services -->|unnamed| Show_Insurance_information
    Insurance_services -->|unnamed| Service_cancellation
    Insurance_services -->|unnamed| Insurance_prolongation
    Insurance_services -->|unnamed| Service_Termination
    Insurance_services -->|unnamed| Show_insurance_operation_status
    Insurance_services -->|unnamed| Replace_service
    Add_insurance -->|unnamed| n_08_340_Show_Insurance_offers_for_loan_contract
    Add_available_Insurance_on_Contract -->|unnamed| n_08_340_Show_Insurance_offers_for_loan_contract
```
