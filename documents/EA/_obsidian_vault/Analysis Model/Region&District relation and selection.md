---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/Business rules"
domain: "Analysis Model"
element_id: 865586
diagrams: 5
connections: 11
tags:
  - requirement
  - analysis-model
---

# 📋 Region&District relation and selection

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/Business rules

## 📝 Notes

When functionality which allows selection from Regions and Districts starts, then list of available options contains all active regions and districts defined in given country (though none of them is pre-selected - exception is update functionality, where are values pre-selected according to data already existing in DB ).

When user selects one of regions, then available options for district input field are limited to districts of this region and district input field is set to the empty value to get rid of previous value (user can then select any value from districts of selected region). 

When user selects one of districts, then appropriate region is selected automatically, but other regions are still available and user can change region to another one.

## 🔗 Connections (11)

- ← Dependency: [[00.150 Find bank branch (UseCase 1300670)]]
- ← Dependency: [[{MOD} 00.130 Update bank branch]]
- ← Dependency: [[{MOD} 00.120 Create bank branch]]
- ← Dependency: [[Bank branch region (GUIElement 1309557)]]
- ← Dependency: [[Bank branch district (GUIElement 1309550)]]
- ← Dependency: [[Bank branch region]]
- ← Dependency: [[Bank branch district]]
- ← Dependency: [[Bank branch region (GUIElement 1561666)]]
- ← Dependency: [[Bank branch region (GUIElement 1561662)]]
- ← Dependency: [[Bank branch district (GUIElement 1561661)]]
- ← Dependency: [[Bank branch district (GUIElement 1561656)]]

## 📊 Appears In (5 diagrams)

- Custom: Business rules
- Custom: Create/Update bank branch - IN specific
- Custom: Create/Update bank branch - VN Specific
- Custom: Find bank branch - IN specific
- Custom: Find bank branch - VN specific
