---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Use Case Model"
domain: "Analysis Model"
element_id: 1868140
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Get Business Events list

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Use Case Model

## 📝 Notes

A list of Business Events returned by Contract GET method:

	
- CREATE_APPLICATION
	
- ARRANGE_APPLICATION
	
- CREATE_CONTRACT
	
- CONSUMER_LOAN_DISBURSED; 	attributes: DISBURSEMENT_AMOUNT
	
- CASH_LOAN_DISBURSED	attributes: DISBURSEMENT_AMOUNT
	
- CONDITIONS_ACCEPTED
	
- CONDITIONS_REJECTED
	
- {ADD CLM-3789}SIGN{/ADD}
	
- {ADD CLM-3789}GENERATE_DOCUMENTATION{/ADD}

## 🔗 Connections (1)

- ← Dependency: [[{MOD}01.757 Get contracts for self-care]]

## 📊 Appears In (1 diagrams)

- Use Case: Customer Self-Care API - Use Case Model
