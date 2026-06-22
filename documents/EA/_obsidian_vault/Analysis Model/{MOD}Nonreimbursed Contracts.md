---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract search/User Interface Model"
domain: "Analysis Model"
element_id: 1822363
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}Nonreimbursed Contracts

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract search/User Interface Model

## 📝 Notes

Number of results is defined by Search with unlimited number of results.
Default column order:

	
- Contract number
	
- Status
	
- Date created
	
- Clients name
	
- Payment amount
	
- Action buttons


The grid can display results of two entities as is described in respective columns:

	
- Contract and related entities
	
- Revolving transaction supplement and related entities

## 🔗 Connections (4)

- → Dependency: [[Search with unlimited number of results]]
- → Dependency: [[Status reason icon rules]]
- → Dependency: [[Registration status icon rules]]
- → Dependency: [[Insurance icon rules]]

## 📊 Appears In (1 diagrams)

- Custom: Search for contract

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Client's Name | Text |  |
| Status | Enumeration Contract status |  |
| Contract number | Contract code |  |
| Date created | Date |  |
| Payment amount | Financial amount |  |
| Functional buttons |  |  |
| Payment Creation Date | date |  |
| POS | text |  |
| Signed | date |  |
