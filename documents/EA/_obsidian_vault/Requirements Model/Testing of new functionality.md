---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/IS/IS-393 (CBL-1855) Full early repayment services changes"
domain: "Requirements Model"
element_id: 1290869
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 Testing of new functionality

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/IS/IS-393 (CBL-1855) Full early repayment services changes

## 📝 Notes

- Create a FER service with includeGiftPayments = true
	
- Create a contract with GIFT service and the newly created FER service
	
- Make sure that GIFT will be granted (good payment discipline of the contract and possibly other client's contracts)
	
- Create a FER request on the contract - calculated amount should be lowered by the expected amount of gift payment
	
- Trigger processing of FER request on the contract and make sure the calculated amount was sufficient for successful processing of the FER request


	
- Check if due dates of special installment, its parts and incoming gift payment are the same as ER due date


We also need to make sure that contracts with status = L (paid off) can have FER service with includeGiftPayments = true applied and processed successfully.

## 🔗 Connections (1)

- → Generalization: [[Add support for FER service with included GIFT payments]]

## 📊 Appears In (1 diagrams)

- Custom: IS-393 (CBL-1855) Full early repayment services changes
