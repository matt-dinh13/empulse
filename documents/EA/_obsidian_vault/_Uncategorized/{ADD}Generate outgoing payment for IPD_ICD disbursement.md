---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1878554
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 {ADD}Generate outgoing payment for IPD/ICD disbursement

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

{ADD CBL-7202 PAYM-2504}
Input parameters: 

	
- contract
	
- payment type
	
- payment amount


Creates a new Outgoing Payment object with attributes:

	
- Contract = reference to Contract
	
- Payment Type = payment type
	
- Amount = payment amount
	
- Creation Date = current date & time
	
- Payment Channel = reference to currently valid Contract.Payment Channel having Purpose = DI (Disbursement)
	
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
