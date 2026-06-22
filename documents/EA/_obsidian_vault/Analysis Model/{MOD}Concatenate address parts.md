---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Business Rules"
domain: "Analysis Model"
element_id: 1627271
diagrams: 3
connections: 8
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Concatenate address parts

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Business Rules

## 📝 Notes

Address parts are concatenated in following order and separated by comma:

	
- Country
	
- Region
	
- District
	
- Sub-district
	
- Town
	
- Zip code
	
- Locality
	
- Street name
	
- House
	
- Floor
	
- Flat
	
- Block set
	
- Block
	
- Landmark



Street name and Landmark are concatenated only if user has the access right:

	
- 06.030 Show client data (show client address data)  for Client detail in Client center
	
- 08.900 Show available collection tools for client's contracts (show client address data)  for Client header in Collection tools overview
	
- {ADD CSI-863}
{ADD}12.501 Show card detail (show client address data) for Show card detail form
	
- {ADD}12.510 Change delivery address (show client address data) for Change delivery address form 
{/ADD}


Note: Empty address levels (positions) are skipped at the concatenation

## 🔗 Connections (8)

- ← Dependency: [[Permanent address (GUIElement 1242995)]]
- ← Dependency: [[Permanent address (GUIElement 1344910)]]
- → Dependency: [[{ADD}06.030 Show client data (show client address data)]]
- → Dependency: [[{ADD}08.900 Show available collection tools for client's contracts (show client address data)]]
- ← Dependency: [[POS and Partner address]]
- ← Dependency: [[Permanent address (GUIElement 1813885)]]
- ← Dependency: [[Contact address (GUIElement 1813881)]]
- ← Dependency: [[Partner bank address]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: CBL-11026 (CLM-3615) Hiding of personal data - Changes in Client Detail
- Custom: CBL-14153 (CSI-863) Masking of Personal data
