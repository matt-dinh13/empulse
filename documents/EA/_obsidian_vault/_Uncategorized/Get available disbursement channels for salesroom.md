---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1878446
diagrams: 0
connections: 3
tags:
  - requirement
  - _uncategorized
---

# 📋 Get available disbursement channels for salesroom

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

This object describes the steps, how system gets the list of available disbursement channels for the specific salesroom.

Input:
- SalesroomCode = code of the salesroom
- ProductType (optional) = product type to be used for further filtering of salesroom's available disbursement channels
- InitialTransactionType (optional) = initial transaction type to be used for further filtering of salesroom's available disbursement channels

Output:
- DisbursementChannel [0..n] = object of respective disbursement channel

Steps:
 

	
- System takes the SalesroomCode, from the input and finds all disbursement channels available for the corresponding salesroom by calling HSIS module. The information is retrieved from  REST API GET ( https://{environment}/homesis/restful/salesrooms/{salesroomCode}.

a) If at least one disbursement channel is defined for the salesroom then such disbursement payment channel types are used for further steps

b) Otherwise the system takes the PartnerCode, from the previous call and finds all disbursement channels available for the corresponding partner by calling HSIS module. The information is retrieved from  REST API GET ( https://{environment}/homesis/restful/partners/{partnerCode}.
	
- Then, the list of DisbursementChannel contains values defined as intersection of {initialTransactionType,productType} of disbursement channel for previous step  and {initialTransactionType,productType} from the input  and returns them to the calling object as DisbursementChannel.
	
- Algorithm ends.

## 🔗 Connections (3)

- ← Dependency: [[01.158 Accept offer (UseCase 1827719)]]
- ← Dependency: [[Partner (GUIElement 1873900)]]
- ← Dependency: [[Get allowed disbursement methods for application]]
