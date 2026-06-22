---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/COMMON for Salesroom/Business Rules/PH"
domain: "Analysis Model"
element_id: 1627481
diagrams: 3
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Salesroom activation rules

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/COMMON for Salesroom/Business Rules/PH

## 📝 Notes

In order to activate a salesroom, the following conditions must be met:

	
- Salesroom may not be in CLOSED status (MSG_0004)
	
- Salesroom may not be in ACTIVE status (MSG_0119)
	
- Partner must be ACTIVE (MSG_0066)
	
- At least one of the contacts must have ContactPersonType set to SHOP MANAGER (MSG_0007)


	
- Business area must be valid; MSG_0042
	
- District sales manager must be selected; MSG_0043
	
- Group salesroom number may not be empty; MSG_0018
	
- Salesroom must have at least one address of BUSINESS_PLACE role type (MSG_0037)

On error particular message is displayed.

## 🔗 Connections (2)

- ← Generalization: [[Salesroom activation rules - PH]]
- ← Dependency: [[09.260 Activate salesroom manually]]

## 📊 Appears In (3 diagrams)

- Custom: BR: Salesroom
- Custom: Salesroom Management -  business Rules
- Use Case: Change Salesroom status
