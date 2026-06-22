---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Partner/COMMON for Partner/Business Rules/Common for all variants"
domain: "Analysis Model"
element_id: 1280896
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Partner activation rules

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Partner/COMMON for Partner/Business Rules/Common for all variants

## 📝 Notes

In order to activate a partner, the following conditions must be met:

	
- At least one address with Address type = "Registration address"; MSG_0054
	
- Just one bank account set for receiving payments = TRUE  ; MSG_0129
	
- One Contact person of type = "Company director"; MSG_0130
	
- Business area <> null; MSG_0131
	
- District sales manager <> null; MSG_0132
	
- Group partner number <> null; MSG_0133
	
- Risk security check = True; MSG_0134


	
- At least one disbursement channel has to be selected. - In case of failure is displayed error message MSG_DISBURSEMENT_CHANNEL_HAS_TO_BE_DEFINED_PARTNER.

On error corresponding message is displayed.

## 🔗 Connections (2)

- ← Generalization: [[Partner activation rules - PH]]
- ← Dependency: [[09.040 Activate Partner manually]]

## 📊 Appears In (2 diagrams)

- Custom: Partner - Business Rules
- Use Case: Change Partner status
