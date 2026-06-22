---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process requests for outgoing payments from external systems/Use case Model"
domain: "Analysis Model"
element_id: 1878559
diagrams: 1
connections: 0
tags:
  - requirement
  - analysis-model
---

# 📋 Generate outgoing payment for card account

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process requests for outgoing payments from external systems/Use case Model

## 📝 Notes

{ADD CBL-175 PAYM-1541}

Input parameters: 

	
- contract
	
- payment type
	
- payment amount


Creates a new Outgoing Payment object with attributes:

	
- Contract = reference to Contract
	
- Payment Type = payment type
	
- Amount = payment amount
	
- Creation Date = current date & time
	
- Payment Channel = reference to currently valid Contract.Payment Channel having Purpose = DR (Disbursement Refund)
	
- Status = Unpaid
	
- IsBlocked = value determined by following rules:
System gets salesroom according to the rule Get salesroom by operation, passed is Contract and operation = CONTRACT_SIGNED. If Salesroom.Payment Status = ALLOWED AND Contract.Payment_Status = ALLOWED
- IsBlocked =  True
else
- IsBlocked  = False
end if


{ADD CBL-175 PAYM-1541}

## 📊 Appears In (1 diagrams)

- Use Case: Process DisbursementMessage
