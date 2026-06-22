# Manage Contract Parties - Use case model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/{ADD}Contract Parties/Use Case Model
- **Diagram ID**: 160663
- **Elements**: 6
- **Connectors**: 3

```mermaid
graph LR
    ADD_getContractParties_ADD_getContractParties["{ADD}getContractParties : {ADD}getContractParties"]
    ADD_Get_Contract_Parties(("{ADD}Get Contract Parties"))
    ADD_Set_contract_party["{ADD}Set contract party"]
    ADD_setContractParty_ADD_setContractParty["{ADD}setContractParty : {ADD}setContractParty"]
    ADD_Create_Contract_Party(("{ADD}Create Contract Party"))
    External_system[/"External system"/]
    ADD_Create_Contract_Party -->|unnamed| ADD_Set_contract_party
    External_system --> ADD_Get_Contract_Parties
    External_system --- ADD_Create_Contract_Party
```
