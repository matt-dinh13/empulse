---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/IS/IS-393 (CBL-1855) Full early repayment services changes"
domain: "Requirements Model"
element_id: 1290871
diagrams: 1
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 Enable to pass a due date of gift payment to GP processing and enforcing of GP granting

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/IS/IS-393 (CBL-1855) Full early repayment services changes

## 📝 Notes

In order for the installment schedule to be correct from accounting point of view, the gift payment has to have the same due date as the last installment of early repayment installment schedule (IS after FER processing). Therefore, when system calls UC {MOD}08.210 Check and process Gift payment from FER processing UC, it needs to be able to pass the gift payment due date (optionally).

New optional date parameter giftPaymentDueDate will be added to UC {MOD}08.210 Check and process Gift payment . This parameter will be used as:

	
- due date of special installment to cover gift payment
	
- customer due date of special installment to cover gift payment
	
- fully paid date of installment part of the special installment to cover gift payment
	
- deposit date of incoming gift payment


Moreover, if giftPaymentDueDate is passed, the date of gift payment should not be validated to be less or equal then current date.

New boolean parameter enforceGPGranting (default value false) will be added to UC {MOD}08.210 Check and process Gift payment . If the parameter is set to true, checking of payment discipline of client will be skipped. This is also a preparation for future CBL-1902 that requires to have a possibility to enforce GP granting on GP contractService in GUI.

## 🔗 Connections (3)

- → Generalization: [[Add support for FER service with included GIFT payments]]
- ← Association: [[Gift payment conditions]]
- ← Realisation: [[{MOD}08.210 Check and process Gift payment]]

## 📊 Appears In (1 diagrams)

- Custom: IS-393 (CBL-1855) Full early repayment services changes
