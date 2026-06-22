---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Synchronization/Business rules"
domain: "Analysis Model"
element_id: 1610894
diagrams: 2
connections: 5
tags:
  - requirement
  - analysis-model
---

# 📋 SN synchronization - Payment status

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Synchronization/Business rules

## 📝 Notes

If status of the object was changed to 'Closed' within the current synchronization run, payment status is not synchronized (i.e. the value of payment status from the current synchronization message is ignored.).
When the payment status of an entity should be changed the following is done:
For salesroom:

	
- If required status is 'Allowed' and salesroom's payment status is currently set to  'Disabled', system invokes Algorithm: Set payment status for Salesroom to Allowed.
	
- If required status is 'Disabled' and salesroom's payment status is currently set to  'Allowed', system invokes Algorithm: Set payment status for Salesroom to Disabled.

For partner:

	
- If required status is 'Allowed' and partner's payment status is currently set to 'Disabled', system invokes Algorithm: Set payment status for Partner to Allowed.
	
- If required status is 'Disabled' and partner's payment status is currently set to 'Allowed', system invokes Algorithm: Set payment status for Partner to Disabled and system invokes Algorithm: Set payment status for Salesroom to Disabled for all partner's salesrooms with payment status set to 'Allowed' and generates a system event SalesroomChangedSE for each salesroom with processed salesroom ID.

## 🔗 Connections (5)

- → Dependency: [[Algorithm_ Set payment status for Salesroom to Disabled]]
- → Dependency: [[Algorithm_ Set payment status for Partner to Disabled]]
- → Dependency: [[Algorithm_ Set payment status for Partner to Allowed]]
- → Dependency: [[Algorithm_ Set payment status for Salesroom to Allowed]]
- ← Dependency: [[{MOD}SNM Partner and Salesroom Synchronization]]

## 📊 Appears In (2 diagrams)

- Custom: SNM Partner and Salesroom Synchronization
- Custom: Synchronization of SNM data - original
