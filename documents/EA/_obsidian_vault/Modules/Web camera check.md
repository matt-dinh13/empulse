---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules"
domain: "Modules"
element_id: 1835625
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Web camera check

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules

## 📝 Notes

This algorithm checks if salesroom has web camera.

Inputs:

	
- Salesroom
	
- DocumentContainer(s) assigned to product


Outputs:

	
- decision if product has to be skipped (true/false) because the product requires to take a photo of at least one document by photo component


Steps:

	
- If Salesroom.Web_Cam=True(it is retrieved from Salesroom Rest Controller API GET), product is offered and algorithm ends. Otherwise each default document container has to be evaluated.
	
- For selected DocumentContainer, count document types that don't require to take photo by photo component (i.e. DocumentContainer.documentTypes.photoAcquiringCode in ('PCU', 'PCO', 'PUM', 'PIM', 'PD')
	
- If value of minimal document (MinCountOfDocuments related to the DocumentContainer) <= than count from previous step, system continues with next container. Otherwise product is skipped

## 🔗 Connections (2)

- ← Dependency: [[{MOD}Product selection]]
- → Dependency: [[Default document container]]

## 📊 Appears In (2 diagrams)

- Custom: Calculate product offer
- Custom: Product and Service selection
