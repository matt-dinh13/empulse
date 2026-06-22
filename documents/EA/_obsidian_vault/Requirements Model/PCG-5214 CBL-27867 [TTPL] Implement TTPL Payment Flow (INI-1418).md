---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/PCG/VN/CBL-27867 [TTPL] Implement TTPL Payment Flow (INI-1418)"
domain: "Requirements Model"
element_id: 1854689
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 PCG-5214  CBL-27867 [TTPL] Implement TTPL Payment Flow (INI-1418)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/VN/CBL-27867 [TTPL] Implement TTPL Payment Flow (INI-1418)

## 📝 Notes

Add new attributes in commodity 

	
- Category_id
	
- Category_name
	
- Sku_id - reuse sku attribute
	
- Sku_name



Automatic removal of the unused commodities - move it from the commodity table to commodity_acrchive table.
Commodities selected for archivation based on status and attributes filled (currently only based on category_id)

## 📊 Appears In (1 diagrams)

- Custom: CBL-27867 [TTPL] Implement TTPL Payment Flow (INI-1418)
