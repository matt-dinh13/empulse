# uncheckAll

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Interface provided/Registration management/contracts/uncheckAll
- **Diagram ID**: 156808
- **Elements**: 12
- **Connectors**: 16

```mermaid
classDiagram
    class ADD_ContractRegistrationDocument["{ADD}ContractRegistrationDocument"]
    class ADD_ContractRegistrationTicket["{ADD}ContractRegistrationTicket"]
    class ADD_ContractRegistrationDocumentFlag["{ADD}ContractRegistrationDocumentFlag"]
    class ADD_ContractRegistrationDocumentFile["{ADD}ContractRegistrationDocumentFile"]
    class ADD_ContractRegistrationDocumentAttribute["{ADD}ContractRegistrationDocumentAttribute"]
    class ADD_ContractRegistrationTicketDefinitionEntity["{ADD}ContractRegistrationTicketDefinitionEntity"]
    class ADD_ContractRegistrationUser["{ADD}ContractRegistrationUser"]
    class MOD_Uncheck_all_registration_documents["{MOD}Uncheck all registration documents"]
    class PropertyErrorApi["PropertyErrorApi"]
    class ErrorRestApi["ErrorRestApi"]
    class ErrorMessageRestApi["ErrorMessageRestApi"]
    class ADD_uncheckAll["{ADD}uncheckAll"]
    ADD_uncheckAll ..> ErrorMessageRestApi : unnamed
    MOD_Uncheck_all_registration_documents ..> ADD_uncheckAll : unnamed
    ErrorMessageRestApi ..> PropertyErrorApi : unnamed
    ErrorMessageRestApi ..> ErrorRestApi : unnamed
    ADD_ContractRegistrationTicket ..> ADD_ContractRegistrationTicketDefinitionEntity : unnamed
    ADD_ContractRegistrationDocument ..> ADD_ContractRegistrationUser : unnamed
    ADD_ContractRegistrationTicket ..> ADD_ContractRegistrationTicketDefinitionEntity : unnamed
    ADD_ContractRegistrationTicket ..> ADD_ContractRegistrationUser : unnamed
    ADD_ContractRegistrationTicket ..> ADD_ContractRegistrationTicketDefinitionEntity : unnamed
    ADD_ContractRegistrationTicket ..> ADD_ContractRegistrationUser : unnamed
    ADD_ContractRegistrationDocument ..> ADD_ContractRegistrationDocumentAttribute : unnamed
    ADD_ContractRegistrationDocument ..> ADD_ContractRegistrationDocumentFile : unnamed
    ADD_ContractRegistrationDocument ..> ADD_ContractRegistrationTicket : unnamed
    ADD_ContractRegistrationDocument ..> ADD_ContractRegistrationDocumentFlag : unnamed
    ADD_ContractRegistrationTicket ..> ADD_ContractRegistrationTicketDefinitionEntity : unnamed
    ADD_ContractRegistrationTicket ..> ADD_ContractRegistrationTicketDefinitionEntity : unnamed
```
