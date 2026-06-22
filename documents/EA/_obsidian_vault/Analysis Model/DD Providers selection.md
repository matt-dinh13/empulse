---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/User Interface/Common"
domain: "Analysis Model"
element_id: 865581
diagrams: 4
connections: 6
tags:
  - requirement
  - analysis-model
---

# 📋 DD Providers selection

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/User Interface/Common

## 📝 Notes

Any bank, which fulfills following criteria is offered as a DD Provider:

	
- Bank is in status Active


	
- Bank isn't DD Client of any other bank except itself (in other words it must be its own DD Provider).


As a result of this, it's not possible to create multi-level structure of DD providers.

## 🔗 Connections (6)

- ← Dependency: [[DD Provider]]
- ← Dependency: [[{MOD} 00.170 Update bank]]
- ← Dependency: [[00.110 Find bank (UseCase 1300665)]]
- ← Dependency: [[{MOD} 00.160 Create bank]]
- ← Dependency: [[DD Provider (GUIElement 1761474)]]
- ← Dependency: [[Used DD Provider]]

## 📊 Appears In (4 diagrams)

- Custom: Bank DD settings - Common
- Custom: Bank DD settings - ID specific
- Custom: Business rules
- Custom: Find bank
