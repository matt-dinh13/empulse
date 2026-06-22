# getRegistrationDocuments

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Interface provided/Registration management/contracts/getRegistrationDocuments
- **Diagram ID**: 162029
- **Elements**: 12
- **Connectors**: 16

```mermaid
classDiagram
    class ADD_ContractRegistrationTicket["{ADD}ContractRegistrationTicket"]
    class ADD_ContractRegistrationDocument["{ADD}ContractRegistrationDocument"]
    class ADD_ContractRegistrationUser["{ADD}ContractRegistrationUser"]
    class ADD_ContractRegistrationTicketDefinitionEntity["{ADD}ContractRegistrationTicketDefinitionEntity"]
    class ADD_ContractRegistrationDocumentAttribute["{ADD}ContractRegistrationDocumentAttribute"]
    class ADD_ContractRegistrationDocumentFlag["{ADD}ContractRegistrationDocumentFlag"]
    class ADD_ContractRegistrationDocumentFile["{ADD}ContractRegistrationDocumentFile"]
    class PropertyErrorApi["PropertyErrorApi"]
    class ErrorRestApi["ErrorRestApi"]
    class ErrorMessageRestApi["ErrorMessageRestApi"]
    class getRegistrationDocuments["getRegistrationDocuments"]
    class Get_registration_documents["Get registration documents"]
    ErrorMessageRestApi ..> ErrorRestApi : unnamed
    getRegistrationDocuments ..> ErrorMessageRestApi : unnamed
    Get_registration_documents ..> getRegistrationDocuments : unnamed
    ErrorMessageRestApi ..> PropertyErrorApi : unnamed
    ADD_ContractRegistrationTicket ..> ADD_ContractRegistrationTicketDefinitionEntity : unnamed
    ADD_ContractRegistrationTicket ..> ADD_ContractRegistrationTicketDefinitionEntity : unnamed
    ADD_ContractRegistrationTicket ..> ADD_ContractRegistrationTicketDefinitionEntity : unnamed
    ADD_ContractRegistrationTicket ..> ADD_ContractRegistrationTicketDefinitionEntity : unnamed
    ADD_ContractRegistrationTicket ..> ADD_ContractRegistrationTicketDefinitionEntity : unnamed
    ADD_ContractRegistrationTicket ..> ADD_ContractRegistrationUser : unnamed
    ADD_ContractRegistrationTicket ..> ADD_ContractRegistrationUser : unnamed
    ADD_ContractRegistrationDocument ..> ADD_ContractRegistrationTicket : unnamed
    ADD_ContractRegistrationDocument ..> ADD_ContractRegistrationDocumentFlag : unnamed
    ADD_ContractRegistrationDocument ..> ADD_ContractRegistrationUser : unnamed
    ADD_ContractRegistrationDocument ..> ADD_ContractRegistrationDocumentFile : unnamed
    ADD_ContractRegistrationDocument ..> ADD_ContractRegistrationDocumentAttribute : unnamed
```
