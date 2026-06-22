---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/KZ"
domain: "Analysis Model"
element_id: 1234523
diagrams: 2
connections: 7
tags:
  - requirement
  - analysis-model
---

# 📋 Fill bank according to account number

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/KZ

## 📝 Notes

- User enters account number
	
- System selects 5. - 7. character from account number (see rule Account number structure - KZ)
	
- System finds bank where characters from previous step are equal to last three characters of Bank.Supplementary_Code
	
- If only one bank is found it is selected in field Bank name. If no bank is found system displays message MSG_WRONG_PATTERN. Otherwise no bank is selected

## 🔗 Connections (7)

- → Dependency: [[Account number structure - KZ]]
- ← Dependency: [[{MOD}01.671 Get HC debit card account data]]
- ← Dependency: [[Account number (GUIElement 1747181)]]
- ← Dependency: [[Account number (GUIElement 1747177)]]
- ← Dependency: [[Bank name (GUIElement 1747172)]]
- ← Dependency: [[Bank name (GUIElement 1747171)]]
- ← Dependency: [[01.672 Create external current account (UseCase 1880154)]]

## 📊 Appears In (2 diagrams)

- Custom: Create/Update bank account - KZ
- Custom: Create/Update bank account for consolidation - KZ
