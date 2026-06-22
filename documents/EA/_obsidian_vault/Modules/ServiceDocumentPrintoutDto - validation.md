---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Validation Rules"
domain: "Modules"
element_id: 1877267
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 ServiceDocumentPrintoutDto - validation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Validation Rules

## 📝 Notes

ServiceDocumenPrintoutDto
 

	
- documentTypeCode
must exists in Document Type
	
- printoutTemplateCode
must exists in Printout Template
	
- numberOfcopies
higher than 0
lower than 1000
must fulfill Unique assignment to service


	
- whenPrintable
must exists in {ADD}CheckMomentTypeDto


	
- whenRequired
must exists in {ADD}CheckMomentTypeDto

## 🔗 Connections (2)

- ← Dependency: [[Service - validation]]
- → Dependency: [[Unique assignment to service]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
