---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/COMMON for Common for BSL/Business Rules"
domain: "Analysis Model"
element_id: 1623718
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Display results for limited search rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/COMMON for Common for BSL/Business Rules

## 📝 Notes

Maximum number of records that are displayed as a search result is defined by a system parameter. Each search must display as much records as possible (according to the search criteria) up to the number defined by the system parameter. No other results are available for the user.
In an example:

	
- there are 1000 records in the system
	
- 150 of them match search criteria
	
- initial_number_of_result = 50
	
- system displays 50 results on the page and nothing else

## 🔗 Connections (1)

- → Aggregation: [[Search with limited number of results]]

## 📊 Appears In (1 diagrams)

- Custom: Search results
