---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-10543 (CSI-170) Cancel Insurance possibility when loan contract is Early terminated"
domain: "Requirements Model"
element_id: 1757677
diagrams: 2
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 {ADD}Evaluate CET Insurance cancellation period

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-10543 (CSI-170) Cancel Insurance possibility when loan contract is Early terminated

## 📝 Notes

{ADD CSI-170/}
This rule evaluates service setting and decisive date and return if the Insurance cancellation has to be used or not.

Inputs:

	
- CET service setting
	
- Decisive day


Result:

	
- Date in Insurance cancellation period (true/false)



	
- System gets Insurance cancellation period (days) parameter  from the service setting (LOAN_OPTIONS_SERVICE).
	
- If the parameter is not set (null or 0) then the rule returns false and ends.
	
- System finds contract sign date (by the rule Get Contract Sign Date)
	
- System sets result:
- if Decisive day <= contract sign date + Insurance cancellation period then result = true
- else result = false

## 🔗 Connections (2)

- ← Dependency: [[{MOD}08.273 Create CET request common]]
- ← Dependency: [[{MOD}08.272 Get CET data preview]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-10543 (CSI-170) Cancel Insurance possibility when loan contract is Early terminated
- Use Case: Contract Early Termination request creation
