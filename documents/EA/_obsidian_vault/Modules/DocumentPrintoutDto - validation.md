---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product/Validation Rules"
domain: "Modules"
element_id: 1845097
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 DocumentPrintoutDto - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product/Validation Rules

## 📝 Notes

documentPrintoutDto
 

	
- documentTypeCode
must exists in Document Type
[INVALID_DOCUMENT_TYPE]
	
- printoutTemplateCode
must exists in Printout Template
[INVALID_PRINTOUT_TEMPLATE]
	
- numberOfcopies
higher than 0
lower than 1000
must fulfill Unique assignment to product
[INVALID_NUMBER]

## 🔗 Connections (2)

- → Dependency: [[Unique assignment to product]]
- ← Dependency: [[Product - validation]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
