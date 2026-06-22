---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-79 Eshop API - interface for Commodity (CBL-52)"
domain: "Requirements Model"
element_id: 1270476
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#2 - Provide data of commodity for update

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-79 Eshop API - interface for Commodity (CBL-52)

## 📝 Notes

Create interface for provision of detailed information about commodity necessary for update. 
For each commodity attribute provide at least following information:

	
- Enabled for update (boolean)
	
- In case the attribute is filled by combo box or by text field with whisperer
- reference to static list of available values (code, name for displaying), static list is provided by separate method
or
- list of available values (code, name for displaying) in case of dynamic list, i.e. the content of the list depends on properties of updated commodity

## 🔗 Connections (2)

- ← Realisation: [[{DEL}01.691 Provide commodity data for update from external systems]]
- ← Realisation: [[{DEL}01.695 Provide commodity data code lists for external systems]]

## 📊 Appears In (1 diagrams)

- Custom: PCG-79 Eshop API - interface for Commodity (CBL-52)
