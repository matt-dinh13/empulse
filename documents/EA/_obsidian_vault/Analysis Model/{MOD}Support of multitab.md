---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/_General Rules/System behavior"
domain: "Analysis Model"
element_id: 1764664
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Support of multitab

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/_General Rules/System behavior

## 📝 Notes

Application support more independent tabs or windows. User can work independently in N tabs. N is defined as {ADD PCG-4212}Number of tabs with list of roles for logged user{/ADD} {DEL PCG-4212}GlobalParameter.MaxNumberOfTabs (default value = 3).{/DEL} 

The tabs can be opened by standard of opening tabs:

	
- open a link in a new tab,
	
- open a link in a new window,
	
- ctrl-click on the link,
	
- click middle mouse button.


If is exceeds the number N, the application shown message (MSG_5063) with the information.
For each tab register the following settings: shop, last search parameters, last-viewed page. Tabs are independently, i.e. do not overwrite the input data. 
When back button is used, then is shown previous screen with pre-filled data from particular tab.
When user logs into the application loads the last saved shop set in the user settings. If user opens a new tab, new tab will have same shop (copy) like parents tab.

## 🔗 Connections (2)

- ← Dependency: [[General rules for user interfaces]]
- → Dependency: [[{ADD}Number of tabs]]

## 📊 Appears In (1 diagrams)

- Custom: General rules for system behavior
