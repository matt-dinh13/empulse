---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract search/User Interface Model"
domain: "Analysis Model"
element_id: 1822356
diagrams: 1
connections: 0
tags:
  - class
  - analysis-model
---

# 🔷 Contracts for disbursement channel verification

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract search/User Interface Model

## 📝 Notes

A result grid for showing contracts where a disbursement channel change wait for a verification
Column order:

	
- Contract number
	
- Contract Status
	
- Date created
	
- Clients name
	
- Amount to be disbursed
	
- Request for change date
	
- Request for change created by
	
- Functional buttons


Grid is horizontally scrollable.
Number of results is defined by Search with unlimited number of results.

## 📊 Appears In (1 diagrams)

- Custom: Search for contract

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Contract number | Contract code |  |
| Contract status | Enumeration Contract status |  |
| Date created | Date |  |
| Client's Name | text |  |
| Amount to be disbursed | Financial Amount |  |
| Request for change created by | User |  |
| Request for change date | DateTime |  |
| Functional buttons |  |  |
