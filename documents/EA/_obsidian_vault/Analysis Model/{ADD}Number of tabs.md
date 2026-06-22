---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/_General Rules/System behavior"
domain: "Analysis Model"
element_id: 1764656
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Number of tabs

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/_General Rules/System behavior

## 📝 Notes

{ADD PCG-4212/}

Input:
- list of roles

Output:
- max number of tabs

For each role system takes max number of tabs from configuration Max tabs for role 
if no configuration for role is found 
then max number of tabs = GlobalParameter.MaxNumberOfTabs(MAX_NUMBER_OF_TABS)
else max number of tabs = max(MaxTabsForRole.MaxNumberOfTabs found for list of roles)

## 🔗 Connections (2)

- ← Dependency: [[{MOD}Support of multitab]]
- → Dependency: [[{ADD}Max tabs for role]]

## 📊 Appears In (1 diagrams)

- Custom: General rules for system behavior
