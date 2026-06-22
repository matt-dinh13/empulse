---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Use Case Model"
domain: "Analysis Model"
element_id: 1878552
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Create zero PTR payment

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Use Case Model

## 📝 Notes

Input parameters: 
- contract

Creates a new Outgoing Payment object with attributes:

	
- Contract = reference to Contract
	
- Payment Type = PTR (payment to retailer)
	
- Amount = 0
	
- Creation Date = current date & time
	
- Ready For Disbursement Date = current date & time
	
- Payment Channel = reference to Contract.Payment Channel having Purpose = DI (Disbursement)
	
- Status = PAID

## 🔗 Connections (1)

- ← Dependency: [[{MOD}05.090 Generate outgoing payment for contract]]

## 📊 Appears In (1 diagrams)

- Use Case: Generate and Cancel outgoing payments
