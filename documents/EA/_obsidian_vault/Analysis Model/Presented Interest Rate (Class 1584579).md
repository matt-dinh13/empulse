---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Presented Interest Rate"
domain: "Analysis Model"
element_id: 1584579
diagrams: 1
connections: 0
tags:
  - class
  - analysis-model
---

# 🔷 Presented Interest Rate

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Presented Interest Rate

## 📝 Notes

Grid containing the list of all Presented Interest Rates (PIR) possibly applicable for the respective application/contract.

Individual records within the grid are ordered by:

	
- Case ASC (records with the Case = 'STANDARD' are always displayed on top)
	
- PIR.Order ASC


Note: The ordering cannot be changed by user.


Other:
The grid has no visible header for its columns.

Localization code: none

## 📊 Appears In (1 diagrams)

- Custom: Presented Interest Rate

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Name | PIR Name |  |
| Value | percentage |  |
| Case | PIR Case |  |
