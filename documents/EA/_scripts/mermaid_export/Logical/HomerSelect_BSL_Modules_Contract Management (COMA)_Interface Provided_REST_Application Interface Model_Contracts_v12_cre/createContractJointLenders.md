# createContractJointLenders

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts/v12/createContractJointLenders
- **Diagram ID**: 160405
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class ReplaceJointLendersRequestBody["ReplaceJointLendersRequestBody"]
    class JointLender["JointLender"]
    class ReplaceJointLendersRequestPathParam["ReplaceJointLendersRequestPathParam"]
    class Contract["Contract"]
    class Create_Contract_Party_Role["Create Contract Party Role"]
    ReplaceJointLendersRequestBody ..> JointLender : unnamed
    Contract ..> ReplaceJointLendersRequestPathParam : Request path parameter(s)
    Contract ..> ReplaceJointLendersRequestBody : Request Body
    Contract ..> Create_Contract_Party_Role : unnamed
```
