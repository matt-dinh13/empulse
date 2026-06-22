# getContractJointLenders

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts/v12/getContractJointLenders
- **Diagram ID**: 160410
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class ContractRequestPathParam["ContractRequestPathParam"]
    class Contract["Contract"]
    class ADD_ContractJointLender["{ADD}ContractJointLender"]
    class Get_Contract_Party_Role["Get Contract Party Role"]
    Contract ..> ADD_ContractJointLender : Response
    Contract ..> ContractRequestPathParam : Request path param(s)
    Contract ..> Get_Contract_Party_Role : unnamed
```
