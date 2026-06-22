# ContractRegistrationActionResolvedEvent

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Interface provided/RabbitMQ AsyncApi
- **Diagram ID**: 156781
- **Elements**: 11
- **Connectors**: 10

```mermaid
classDiagram
    class ADD_Attribute["{ADD}Attribute"]
    class ADD_BusinessEvent["{ADD}BusinessEvent"]
    class ADD_RelatedSubject["{ADD}RelatedSubject"]
    class ADD_Ticket["{ADD}Ticket"]
    class ADD_DirectDebitMandate["{ADD}DirectDebitMandate"]
    class ADD_Header["{ADD} Header"]
    class ADD_Trigger["{ADD}Trigger"]
    class ADD_extendedProperty["{ADD}extendedProperty"]
    class ADD_Contract["{ADD}Contract"]
    class ADD_Payload["{ADD}Payload"]
    class ADD_ContractRegistrationActionResolvedEventV1["{ADD}ContractRegistrationActionResolvedEventV1"]
    ADD_ContractRegistrationActionResolvedEventV1 ..> ADD_Payload : unnamed
    ADD_Payload ..> ADD_Contract : unnamed
    ADD_Payload ..> ADD_extendedProperty : unnamed
    ADD_Payload ..> ADD_Trigger : unnamed
    ADD_ContractRegistrationActionResolvedEventV1 ..> ADD_Header : unnamed
    ADD_Payload ..> ADD_DirectDebitMandate : unnamed
    ADD_Payload ..> ADD_Ticket : unnamed
    ADD_Ticket ..> ADD_RelatedSubject : unnamed
    ADD_Contract ..> ADD_BusinessEvent : unnamed
    ADD_BusinessEvent ..> ADD_Attribute : unnamed
```
