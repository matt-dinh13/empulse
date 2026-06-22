---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Requirements Model/Finished/IS/IS-418 (CBL-2228) Changes for ID Payment SMS"
domain: "Requirements Model"
element_id: 1335458
diagrams: 2
connections: 6
tags:
  - requirement
  - requirements-model
---

# 📋 Get template parameters values

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/IS/IS-418 (CBL-2228) Changes for ID Payment SMS

## 📝 Notes

Description:
Rule describes how to get value of notification message template parameter.

This rule is general. It's further specified for each system event separately.

Note that there are following country-specific configuration system properties:

	
- smsDateFormat (e.g. "dd-MM-yy")
	
- smsLanguage (e.g. "EN")
	
- smsDecimalSeparator (e.g. ",")
	
- smsGroupingSeparator (e.g. ".")

## 🔗 Connections (6)

- → Realisation: [[REQ#2 - Use first name instead of surname in salutation]]
- → Realisation: [[REQ#1 - Count only standard installments into the number of installments]]
- ← Generalization: [[Get template parameters values - IncomingPaymentPairingNotificationSE]]
- ← Generalization: [[{MOD}Get template parameters values - CELRewardSuccessSE]]
- ← Generalization: [[Get template parameters values - CELRewardMissedSE]]
- ← Dependency: [[03.702 Compose and send notification message]]

## 📊 Appears In (2 diagrams)

- Custom: IS-418 (CBL-2228) Changes for ID Payment SMS
- Use Case: SMS notification
