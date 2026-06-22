# checkAll

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Interface provided/Registration management/contracts/checkAll
- **Diagram ID**: 156805
- **Elements**: 12
- **Connectors**: 16

```mermaid
classDiagram
    class ADD_ContractRegistrationTicketDefinitionEntity["{ADD}ContractRegistrationTicketDefinitionEntity"]
    class ADD_ContractRegistrationDocument["{ADD}ContractRegistrationDocument"]
    class ADD_ContractRegistrationDocumentFlag["{ADD}ContractRegistrationDocumentFlag"]
    class ADD_ContractRegistrationDocumentFile["{ADD}ContractRegistrationDocumentFile"]
    class ADD_ContractRegistrationDocumentAttribute["{ADD}ContractRegistrationDocumentAttribute"]
    class ADD_ContractRegistrationUser["{ADD}ContractRegistrationUser"]
    class ADD_ContractRegistrationTicket["{ADD}ContractRegistrationTicket"]
    class MOD_Check_all_registration_documents["{MOD}Check all registration documents"]
    class PropertyErrorApi["PropertyErrorApi"]
    class ErrorRestApi["ErrorRestApi"]
    class ErrorMessageRestApi["ErrorMessageRestApi"]
    class ADD_checkAll["{ADD}checkAll"]
    ADD_checkAll ..> ErrorMessageRestApi : unnamed
    MOD_Check_all_registration_documents ..> ADD_checkAll : unnamed
    ErrorMessageRestApi ..> PropertyErrorApi : unnamed
    ErrorMessageRestApi ..> ErrorRestApi : unnamed
    ADD_ContractRegistrationTicket ..> ADD_ContractRegistrationTicketDefinitionEntity : unnamed
    ADD_ContractRegistrationDocument ..> ADD_ContractRegistrationDocumentFile : unnamed
    ADD_ContractRegistrationDocument ..> ADD_ContractRegistrationTicket : unnamed
    ADD_ContractRegistrationTicket ..> ADD_ContractRegistrationTicketDefinitionEntity : unnamed
    ADD_ContractRegistrationTicket ..> ADD_ContractRegistrationTicketDefinitionEntity : unnamed
    ADD_ContractRegistrationTicket ..> ADD_ContractRegistrationUser : unnamed
    ADD_ContractRegistrationTicket ..> ADD_ContractRegistrationTicketDefinitionEntity : unnamed
    ADD_ContractRegistrationDocument ..> ADD_ContractRegistrationDocumentAttribute : unnamed
    ADD_ContractRegistrationDocument ..> ADD_ContractRegistrationUser : unnamed
    ADD_ContractRegistrationTicket ..> ADD_ContractRegistrationTicketDefinitionEntity : unnamed
    ADD_ContractRegistrationTicket ..> ADD_ContractRegistrationUser : unnamed
    ADD_ContractRegistrationDocument ..> ADD_ContractRegistrationDocumentFlag : unnamed
```
