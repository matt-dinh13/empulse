---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Services (COS_NG)/Requirement Model/CBL-29554 Allow CONTRACT to have multiple Accounts"
domain: "Modules"
element_id: 1870263
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 DOBA-334 Update ProcessServiceOperationNotification function for Account assignment

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Services (COS_NG)/Requirement Model/CBL-29554 Allow CONTRACT to have multiple Accounts

## 📝 Notes

Change of processServiceOperationNotification function when MTCACC service is processed: assign account to the Contract Service of MTCACC type.
Reason: When the Add Service request for MTCACC service type is sent to AM, we don't know account number yet as AM creates an account based on MTCACC service. We should receive this account number in response from AM.

Prerequisite:

	
- processServiceOperationNotification message provided AM in the am.headers.account.contract.change.result exchange must contain accountNumber value.

## 📊 Appears In (1 diagrams)

- Custom: CBL-29554 Allow CONTRACT to have multiple Accounts
