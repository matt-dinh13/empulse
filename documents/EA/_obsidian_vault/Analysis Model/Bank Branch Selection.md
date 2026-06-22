---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/VN"
domain: "Analysis Model"
element_id: 1783511
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Bank Branch Selection

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/VN

## 📝 Notes

System may contain a huge number of bank branches. Therefore it's needed to reduce number of branches offered to user. This reduction is done through mandatory selection of values in another attributes before bank branch can be selected. These attributes are:

	
- Bank
	
- Region


User isn't able to select bank branch before selection of values for all above mentioned attributes is done. When all of those attributes contain values, then system offers bank branches which match all criteria and user can select one of them.

## 🔗 Connections (1)

- ← Dependency: [[Bank branch (GUIElement 1783618)]]

## 📊 Appears In (2 diagrams)

- Custom: Create/update bank account - VN
- Custom: Validation rules VN
