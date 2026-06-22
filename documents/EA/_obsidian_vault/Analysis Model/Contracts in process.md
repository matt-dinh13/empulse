---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract search/User Interface Model"
domain: "Analysis Model"
element_id: 1822366
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 Contracts in process

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract search/User Interface Model

## 📝 Notes

Column order:

	
- Contract number
	
- Status
	
- Status description
	
- Date created
	
- Clients name
	
- Date sent to evaluation
	
- Credit amount
	
- Action


Number of results is defined by Search with unlimited number of results.

## 🔗 Connections (5)

- → Dependency: [[Registration status icon rules]]
- → Dependency: [[Insurance icon rules]]
- → Dependency: [[Search with unlimited number of results]]
- → Dependency: [[Evaluation duration icon rules]]
- → Dependency: [[Status reason icon rules]]

## 📊 Appears In (1 diagrams)

- Custom: Search for contract

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Credit limit | Financial Amount |  |
| Date sent to evaluation | Date |  |
| Status | Enumeration Contract status |  |
| Client's Name | Text |  |
| Contract number | Contract code |  |
| Credit amount | Financial amount |  |
| Date created | Date |  |
| Functional buttons |  |  |
| Status description | SubStatus Description Type |  |
