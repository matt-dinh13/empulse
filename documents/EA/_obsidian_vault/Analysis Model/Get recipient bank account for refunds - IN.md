---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/Business Rules"
domain: "Analysis Model"
element_id: 1877706
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Get recipient bank account for refunds - IN

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/Business Rules

## 📝 Notes

This rule for obtaining the recipient bank account is valid for IN business.

System finds an eligible DDM of the contract according to the following conditions:

	
- Active DDM exists on a contract (i.e. DDM having status in (AVAIL (Available), SFC (Sent For Confirmation), RFC (Received From Confirmation)). 
	
- Primary (IFSC) code on active DDM bank account is not dummy (i.e. Bank Branch.CODE doesn't start with XX). 
	
- Status of all DD statements on active DDM is always 


	
- debited or 
	
- undebited with one of these error reason codes (must be flexible): 
- 04 (Insufficient balance) 
- 05 (Debit limit Exceeded) 
- 06 (Payment stopped by client) 
- 09 (Misc)

## 🔗 Connections (1)

- → Generalization: [[Get recipient bank account for refunds]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: {DEL}Creating Refunds automatically
