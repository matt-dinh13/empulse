---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Use Case Model"
domain: "Analysis Model"
element_id: 1741363
diagrams: 1
connections: 6
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Supress due date method

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Use Case Model

## 📝 Notes

{ADD IS-1892}
Order of these levels is determined by Installment Priority.Suppress Due Date Method as follow:

	
- If an Installment Part having Suppress Due Date Method = DEFAULT or it is NULL  and Installment.Due Date <= PaymentDepositDate for defined Installment Part Type exists then the first level uses Installment Part Priority and second Due Date Priority
	
- If an Installment Parts having Suppress Due Date Method = OFF or Installment.Due Date > PaymentDepositDate exists then Due Date Priority is used for the first level and Installment Part Priority for the second level.
	
- If an Installment Part having Suppress Due Date Method = NO_LIMIT then the first level uses Installment Part Priority and second Due Date Priority

## 🔗 Connections (6)

- → Dependency: [[DPD priority pairing method]]
- → Dependency: [[Standard priority pairing method for particular T&C]]
- → Dependency: [[DPD priority pairing method for particular T&C]]
- → Dependency: [[Highest DPD priority pairing method for particular T&C]]
- → Dependency: [[Highest DPD priority pairing method]]
- → Dependency: [[Standard priority pairing method]]

## 📊 Appears In (1 diagrams)

- Use Case: Pairing installment parts procedure
