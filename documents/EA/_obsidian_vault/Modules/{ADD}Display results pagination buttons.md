---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-19215 (CLM-5259) Add queue support - GUI"
domain: "Modules"
element_id: 1799299
diagrams: 2
connections: 3
tags:
  - requirement
  - modules
---

# 📋 {ADD}Display results pagination buttons

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-19215 (CLM-5259) Add queue support - GUI

## 📝 Notes

{ADD CLM-5259/}

Rule controlling the display of ticket search results pagination buttons.

System creates and shows buttons (<, <int> and >) to paginate through the results of the ticket search call: the page number on the middle button (in place of "int") will depend on the total count of the results and the current pagination subset being displayed:

	
- when displaying 1-50 results, int = 1
	
- when displaying 51-100 results, int = 2
	
- ...

If total count of results is greater than the given page's range, then button > will becomes enabled and active.
If page number is greater than 1, then button < becomes enabled and active.

## 🔗 Connections (3)

- ← Dependency: [[Show Queues and tickets screen]]
- ← Dependency: [[10.100 Show My overview]]
- ← Dependency: [[Show Queue detail]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-19215 (CLM-5259) Add queue support - GUI
- Custom: CBL-19215 (CLM-5412) Queues monitoring screen - FE
