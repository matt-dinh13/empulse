---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/PCG/ID/PCG-5343 Display vas add on offers based on specific product type (CBL-29025)"
domain: "Requirements Model"
element_id: 1864975
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 Business Requirement

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/ID/PCG-5343 Display vas add on offers based on specific product type (CBL-29025)

## 📝 Notes

Country: ID

Management of service to product profile assignment:

	
- data model - new data structures to map map services to specific product profiles
	
- backend logic - implementation of logic for creating, reading, updating, and deleting these assignments, probably including some validation rules
	
- UI - design simple screen to manage and visualize service-profile assignments


Update API for selecting services to contract (displayed in BSL-CSI):

	
- update existing API endpoint - add attribute for product code, which will be optional


	
- backend filtering logic - implementation of logic to filter services based on product code. Possible scenarios: no product code is supplied, product code is supplied, some services need to be offer always, some services need to be offer for specific product profile

## 📊 Appears In (1 diagrams)

- Custom: PCG-5343 Display vas add on offers based on specific product type (CBL-29025)
