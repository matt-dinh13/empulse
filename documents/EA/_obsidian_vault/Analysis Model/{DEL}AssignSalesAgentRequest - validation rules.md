---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Sales agents on Salesroom /Validation Rules"
domain: "Analysis Model"
element_id: 1746947
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {DEL}AssignSalesAgentRequest - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Sales agents on Salesroom /Validation Rules

## 📝 Notes

{DEL PCG-3992/}
// Validation of Request for method AssignSalesAgent of SalesroomWS
// returned resultCode code is in bracket

ComplexType = AssignSalesAgentData
 

	
- Salesroom
- Exists Salesroom where ComplexType.salesroomCode = Salesroom.Code [INVALID_SALESROOM_CODE]
- Salesroom.Status is ACTIVE [INVALID_SALESROOM_STATUS]



	
- AssignMode
- Exists AssignMode where ComplexType.assignMode = AssignMode [INVALID_ASSIGN_MODE]



	
- Validity
If both ComplexType.validFrom and ComplexType.validTo are filled, system checks if:
- ComplexType.validFrom <= ComplexType.validTo [INVALID_VALIDITY]
If ComplexType.validTo is filled, system checks if:
- ComplexType.validTo >= current date [INVALID_VALIDITY]
If ComplexType.validFrom is filled, system checks if:
- ComplexType.validFrom >= current date [INVALID_VALIDITY]



	
- SalesAgent
- Exists User where ComplexType.salesAgentEmployeeNumber = User.EmployeeNumber, if not, system also checks if User is present in UMC [INVALID_SA]

## 🔗 Connections (1)

- ← Dependency: [[{DEL}09.297 Assign or remove Sales Agent on salesroom from external systems]]

## 📊 Appears In (2 diagrams)

- Custom: Validation Rules
- Use Case: {DEL}Manage Sales agents on Salesroom from external systems
