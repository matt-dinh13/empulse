# getContract

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts/v12/getContract
- **Diagram ID**: 160418
- **Elements**: 41
- **Connectors**: 57

```mermaid
classDiagram
    class ContractRequestPathParam["ContractRequestPathParam"]
    class Contract["Contract"]
    class ADD_ServiceDefinition["{ADD}ServiceDefinition"]
    class ADD_ContractApplicant["{ADD}ContractApplicant"]
    class ADD_OWNER_DEFAULT["{ADD}OWNER_DEFAULT"]
    class ADD_JOINT_LENDER_DEFAULT["{ADD}JOINT_LENDER_DEFAULT"]
    class ADD_ContractOwner["{ADD}ContractOwner"]
    class ADD_ContractJointLender["{ADD}ContractJointLender"]
    class ADD_REFINANCED_CONTRACT_EXTENDED["{ADD}REFINANCED_CONTRACT_EXTENDED"]
    class Money["Money"]
    class SERVICE_DEFAULT["SERVICE_DEFAULT"]
    class EXTENDED_PROPERTIES_DEFAULT["EXTENDED_PROPERTIES_DEFAULT"]
    class PRODUCT_DEFAULT["PRODUCT_DEFAULT"]
    class DOCUMENT_DEFAULT["DOCUMENT_DEFAULT"]
    class CUSTOMER_DEFAULT["CUSTOMER_DEFAULT"]
    class STATUS_TRANSITION_DEFAULT["STATUS_TRANSITION_DEFAULT"]
    class ContractStatusTransitionUser["ContractStatusTransitionUser"]
    class ContractStatusTransitions["ContractStatusTransitions"]
    class REFINANCED_CONTRACT_DEFAULT["REFINANCED_CONTRACT_DEFAULT"]
    class ContractRefinancedContract["ContractRefinancedContract"]
    class ContractExtendedProperty["ContractExtendedProperty"]
    class COMMODITY_DEFAULT["COMMODITY_DEFAULT"]
    class BUSINESS_EVENT_FULL["BUSINESS_EVENT_FULL"]
    class BUSINESS_EVENT_DEFAULT["BUSINESS_EVENT_DEFAULT"]
    class DEFAULT["DEFAULT"]
    class ACCOUNT_DEFAULT["ACCOUNT_DEFAULT"]
    class ContractCustomer["ContractCustomer"]
    class ContractBusinessEventUser["ContractBusinessEventUser"]
    class ContractBusinessEventAttribute["ContractBusinessEventAttribute"]
    class ContractBusinessEvent["ContractBusinessEvent"]
    class ADD_ContractAccount["{ADD}ContractAccount"]
    class MOD_ContractDocument["{MOD}ContractDocument"]
    class Get_contract["Get contract"]
    class ContractsRequestQuery["ContractsRequestQuery"]
    class ADD_ContractCommodity["{ADD}ContractCommodity"]
    class ContractService["ContractService"]
    class ContractProduct["ContractProduct"]
    class Contract["Contract"]
    class ADD_Define_set_of_attributes_for_response["{ADD}Define set of attributes for response"]
    class ADD_APPLICANT_DEFAULT["{ADD}APPLICANT_DEFAULT"]
    class Humans_on_entities["Humans on entities"]
    MOD_ContractDocument ..> DOCUMENT_DEFAULT : unnamed
    ContractService ..> SERVICE_DEFAULT : unnamed
    ADD_ContractApplicant ..> ADD_APPLICANT_DEFAULT : unnamed
    ADD_ContractOwner ..> ADD_OWNER_DEFAULT : unnamed
    ADD_ContractAccount ..> ACCOUNT_DEFAULT : unnamed
    ContractExtendedProperty ..> EXTENDED_PROPERTIES_DEFAULT : unnamed
    ADD_ContractJointLender ..> ADD_JOINT_LENDER_DEFAULT : unnamed
    ContractBusinessEvent ..> BUSINESS_EVENT_DEFAULT : unnamed
    ContractBusinessEvent ..> BUSINESS_EVENT_DEFAULT : unnamed
    ContractBusinessEvent ..> BUSINESS_EVENT_FULL : unnamed
    ContractBusinessEvent --> ContractBusinessEventAttribute : unnamed
    ContractBusinessEvent ..> BUSINESS_EVENT_FULL : unnamed
    ContractBusinessEvent ..> BUSINESS_EVENT_FULL : unnamed
    ContractBusinessEvent ..> BUSINESS_EVENT_DEFAULT : unnamed
    ContractBusinessEventAttribute ..> BUSINESS_EVENT_FULL : unnamed
    ContractRefinancedContract ..> REFINANCED_CONTRACT_DEFAULT : unnamed
    ContractRefinancedContract ..> ADD_REFINANCED_CONTRACT_EXTENDED : unnamed
    Contract ..> Contract : Response
    Contract ..> ContractsRequestQuery : Request Query
    Contract ..> ContractRequestPathParam : Request path parameter(s)
    Contract ..> Get_contract : unnamed
    ContractCustomer ..> CUSTOMER_DEFAULT : unnamed
    Contract --> ContractCustomer : unnamed
    ContractService --> ADD_ServiceDefinition : unnamed
    ADD_ContractCommodity ..> COMMODITY_DEFAULT : unnamed
    Contract --> ADD_ContractCommodity : unnamed
    Contract ..> DEFAULT : unnamed
    Contract --> ADD_ContractApplicant : unnamed
    Contract --> MOD_ContractDocument : unnamed
    Contract --> ContractProduct : unnamed
    Contract --> ADD_ContractOwner : unnamed
    Contract --> ContractExtendedProperty : unnamed
    Contract --> ContractStatusTransitions : unnamed
    Contract --> ContractBusinessEvent : unnamed
    Contract --> ADD_ContractJointLender : unnamed
    Contract ..> DEFAULT : unnamed
    Contract --> ADD_ContractAccount : unnamed
    Contract ..> DEFAULT : unnamed
    Contract --> ContractRefinancedContract : unnamed
    Contract --> ContractService : unnamed
    Contract ..> DEFAULT : unnamed
    ContractRefinancedContract --> Money : unnamed
    Money ..> ADD_REFINANCED_CONTRACT_EXTENDED : unnamed
    ContractBusinessEventUser ..> BUSINESS_EVENT_FULL : unnamed
    ContractBusinessEvent --> ContractBusinessEventUser : unnamed
    ContractBusinessEvent --> ContractBusinessEventUser : unnamed
    ContractStatusTransitions ..> STATUS_TRANSITION_DEFAULT : unnamed
    ContractStatusTransitions --> ContractStatusTransitionUser : unnamed
    ContractStatusTransitions --> ContractStatusTransitionUser : unnamed
    ContractStatusTransitions ..> STATUS_TRANSITION_DEFAULT : unnamed
    ContractStatusTransitions ..> STATUS_TRANSITION_DEFAULT : unnamed
    ContractStatusTransitions ..> STATUS_TRANSITION_DEFAULT : unnamed
    ContractStatusTransitions ..> STATUS_TRANSITION_DEFAULT : unnamed
    ContractStatusTransitions ..> STATUS_TRANSITION_DEFAULT : unnamed
    ContractProduct ..> PRODUCT_DEFAULT : unnamed
    ContractStatusTransitionUser ..> STATUS_TRANSITION_DEFAULT : unnamed
    Get_contract ..> ADD_Define_set_of_attributes_for_response : unnamed
```
