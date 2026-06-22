---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process requests for outgoing payments from external systems/Use case Model"
domain: "Analysis Model"
element_id: 1878546
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Generate outgoing payment for repeated disbursement

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process requests for outgoing payments from external systems/Use case Model

## 📝 Notes

Input parameters: 

	
- contract
	
- payment type
	
- payment amount


Creates a new Outgoing Payment object with attributes:

	
- Contract = reference to Contract
	
- Payment Type = payment type
	
- Amount = payment amount
	
- Creation Date = current date & time
	
- Payment Channel = reference to currently valid Contract.Payment Channel having Purpose = RD (Repeated disbursement)
	
- Status = value determined by following rules:
System gets salesroom according to the rule Get salesroom by operation, passed is Contract and operation = CONTRACT_SIGNED. If Salesroom.Payment Status = ALLOWED AND Contract.Payment_Status = ALLOWED
- Status = "unpaid"
else
- Status = „waiting“
end if


and if Contract.Contract Type = REL then sets following attributes on created Outgoing payment:

	
- if Payment Type = Payment To Retailer, then 
   Transaction Subtype = If any commodity on the contract is vehicle (Contract -> Commodity -> Commodity Type.CommodityTypeFlag(IS_VEHICLE) = TRUE) then 'TW' else 'CD'


	
- if payment type = Cash loan disbursement, than

           Transaction Subtype = 'CL'
 

	
- Is Online Disbursement = Contract.Created Externally

## 🔗 Connections (2)

- ← Dependency: [[{MOD}05.701 Process DisbursementMessage]]
- ← Dependency: [[05.700 Process TransactionMessageDto]]

## 📊 Appears In (2 diagrams)

- Use Case: Process DisbursementMessage
- Use Case: Process TransactionMessageDto 
