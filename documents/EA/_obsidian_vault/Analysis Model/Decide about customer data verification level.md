---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Client Management/Client update/Business Rules"
domain: "Analysis Model"
element_id: 1647320
diagrams: 2
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Decide about customer data verification level

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Client update/Business Rules

## 📝 Notes

This object describes, how system decides about the verification level to be used during the sending of customer's data to CIF.

If contract is in status In Pre-process ('P') or In Process ('R'), then:

	
- For all entities except the phone numbers of customer's related persons, system uses verificationLevel = 4.
	
- For the phone numbers of customer's related persons:

a) If global parameter customerData.customRelatedPersonPhoneNumberVerificationLevelEnabled = TRUE, then system uses verificationLevel = value of global parameter customerData.customRelatedPersonPhoneNumberVerificationLevelValue.

b) Otherwise system uses verificationLevel = 4.


If contract is in any other status, then:

	
- For all entities except the phone numbers of customer's related persons, system uses verificationLevel = 7
	
- For the phone numbers of customer's related persons:

a) If global parameter customerData.customRelatedPersonPhoneNumberVerificationLevelEnabled = TRUE, then system uses verificationLevel = value of global parameter customerData.customRelatedPersonPhoneNumberVerificationLevelValue.

b) Otherwise system uses verificationLevel = 7

## 🔗 Connections (3)

- ← Dependency: [[{MOD}06.051 Process customers notification message]]
- ← Dependency: [[{MOD}06.010 Identify Client]]
- ← Dependency: [[06.020 Update Client Data]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Custom: REQ #1 - Migrate full person update to PIF REST
