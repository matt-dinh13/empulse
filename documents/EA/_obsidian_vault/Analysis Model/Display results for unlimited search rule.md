---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/COMMON for Common for BSL/Business Rules"
domain: "Analysis Model"
element_id: 1623713
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Display results for unlimited search rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/COMMON for Common for BSL/Business Rules

## 📝 Notes

The initial number of records that are displayed as a search result is defined by a global parameter "initial_number_of_result" (this attribute can be changed via a data change). Each search must display as much records as possible (according to the search criteria) up to the number defined by the initial_number_of_result parameter. Next (based on the default sorting) up to initial_number_of_result results (if available) are returned based on user's request.
In an example:

	
- there are 1000 records in the system
	
- 150 of them match search criteria
	
- initial_number_of_result = 50
	
- system displays 50 results on the first page and two more pages

## 🔗 Connections (1)

- → Aggregation: [[Search with unlimited number of results]]

## 📊 Appears In (1 diagrams)

- Custom: Search results
