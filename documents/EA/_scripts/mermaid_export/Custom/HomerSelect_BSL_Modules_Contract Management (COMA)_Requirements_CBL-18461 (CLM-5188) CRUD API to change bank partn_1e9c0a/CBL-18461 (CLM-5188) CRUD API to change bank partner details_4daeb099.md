# CBL-18461 (CLM-5188) CRUD API to change bank partner details + Kafka + projections

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-18461 (CLM-5188) CRUD API to change bank partner details + Kafka + projections
- **Diagram ID**: 156110
- **Elements**: 15
- **Connectors**: 4

```mermaid
graph TD
    Common_ContractChangedEvent["Common : ContractChangedEvent"]
    getContractOwners_getContractOwners["getContractOwners : getContractOwners"]
    createContractJointLenders_createContractJointLenders["createContractJointLenders : createContractJointLenders"]
    getContractJointLenders_getContractJointLenders["getContractJointLenders : getContractJointLenders"]
    Contract["Contract"]
    searchContracts_searchContracts["searchContracts : searchContracts"]
    getContract_getContract["getContract : getContract"]
    ADD_ContractJointLender["{ADD}ContractJointLender"]
    ADD_ContractOwner["{ADD}ContractOwner"]
    ADD_OWNER_DEFAULT["{ADD}OWNER_DEFAULT"]
    ADD_JOINT_LENDER_DEFAULT["{ADD}JOINT_LENDER_DEFAULT"]
    Projections_Projections["Projections : Projections"]
    CBL_18461_CLM_5188_CRUD_API_to_change_bank_partner_details_K["CBL-18461 (CLM-5188) CRUD API to change bank partner details + Kafka + projections"]
    Expanded_with_new_collections["Expanded with new collections:"]
    New_endpoints["New endpoints:"]
    Contract -->|unnamed| ADD_ContractOwner
    Contract -->|unnamed| ADD_ContractJointLender
    ADD_ContractOwner -->|unnamed| ADD_OWNER_DEFAULT
    ADD_ContractJointLender -->|unnamed| ADD_JOINT_LENDER_DEFAULT
```
