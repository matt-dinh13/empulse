---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract search/User Interface Model"
domain: "Analysis Model"
element_id: 1822361
diagrams: 1
connections: 0
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}Remotely created contracts, not disbursed, signed on current salesroom

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract search/User Interface Model

## 📝 Notes

{ADD CLM-939 /}
A result grid for showing remotely created contracts, not disbursed, and signed on current salesroom (where user is logged in)

Column order:

	
- Contract number
	
- Contract Status
	
- Date created
	
- Clients name
	
- Amount to be disbursed
	
- Functional buttons


Grid is horizontally scrollable.
Number of results is defined by Search with unlimited number of results.

## 📊 Appears In (1 diagrams)

- Custom: Search for contract

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Contract number | Contract code |  |
| Contract status | Enumeration contract status |  |
| Date created | Date |  |
| Client's Name | text |  |
| Amount to be disbursed | Fianncial Amount |  |
| Functional buttons |  |  |
