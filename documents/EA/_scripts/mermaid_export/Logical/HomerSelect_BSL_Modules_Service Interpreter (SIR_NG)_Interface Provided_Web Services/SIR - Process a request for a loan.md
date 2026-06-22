# SIR - Process a request for a loan

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Interface Provided/Web Services
- **Diagram ID**: 160386
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class MOD_16_010_Request_for_a_loan_service["{MOD}16.010 Request for a loan service"]
    class RelatedSubject["RelatedSubject"]
    class RequestSourceId["RequestSourceId"]
    class ADD_LoanProcessingRequest["{ADD}LoanProcessingRequest"]
    class ADD_service_interpreter["{ADD}service-interpreter"]
    ADD_service_interpreter --> ADD_LoanProcessingRequest : unnamed
    ADD_LoanProcessingRequest --> RequestSourceId : unnamed
    ADD_LoanProcessingRequest --> RelatedSubject : unnamed
    ADD_service_interpreter ..> MOD_16_010_Request_for_a_loan_service : unnamed
```
