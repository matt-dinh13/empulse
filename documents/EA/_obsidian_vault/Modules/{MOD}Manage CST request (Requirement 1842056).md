---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/COMMON for COMA_NG/Business Rules"
domain: "Modules"
element_id: 1842056
diagrams: 4
connections: 3
tags:
  - requirement
  - modules
---

# 📋 {MOD}Manage CST request

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/COMMON for COMA_NG/Business Rules

## 📝 Notes

{ADD CLM-4405/}
Input:

 
- resultType
 
- contractId
 
- type
 
- contract type


Steps:

 
- If {ADD CLM-4771}type <> TERMINATION,{/ADD}{ADD CLM-4839}contract type = REL and{/ADD} CST request[where .Contract Id = contractId and .Type = type] does not exist then system creates CST request with attributes:
- .Contract Id = contractId
- .Type = type
 
- {ADD CLM-4839}If contract type = REL,{/ADD} system updates latest CST request[where .Contract Id = contractId and .Type = type and .Creation date is latest] with attributes:
- If  .resultType in( WRITEOFF_ERROR, PAYOFF_ERROR, PAYOFF_ERROR, {ADD CLM-4771}TERMINATION_ERROR{/ADD}) then .Status = RES_ERROR
- If  .resultType in(WRITEOFF_SUCCESSFUL, PAYOFF_SUCCESSFUL, ALREADY_PAIDOFF, {ADD CLM-4771}TERMINATION_SUCCESSFUL{/ADD}) then .Status = FINISHED
- .Update date = current date
 
- {ADD CLM-4839}If contract type = CEL, system updates latest CST request[where .Contract Id = contractId and .Type = type and .Creation date is latest] with .Status = FINISHED{/ADD} 
 
- Scenario ends.

## 🔗 Connections (3)

- ← Dependency: [[{MOD}Contract pay-off]]
- ← Dependency: [[{MOD}Contract write-off (UseCase 1841728)]]
- ← Dependency: [[{DEL}Contracts finish]]

## 📊 Appears In (4 diagrams)

- Custom: Business Rules
- Use Case: Contract pay-off
- Use Case: Contract write-off
- Use Case: Contracts finishing
