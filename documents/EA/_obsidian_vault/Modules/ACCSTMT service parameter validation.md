---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Service Catalog/Validation Rules"
domain: "Modules"
element_id: 1851665
diagrams: 1
connections: 3
tags:
  - requirement
  - modules
---

# 📋 ACCSTMT service parameter validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Service Catalog/Validation Rules

## 📝 Notes

ACCSTMT

	
- STATEMENT_PRINTOUT_TEMPLATE
must exists in Printout Template [INVALID_VALUE]
	
- EMAIL_STATEMENT
must exists in list of values obtained by Get list of email templates [INVALID_VALUE]

## 🔗 Connections (3)

- → Dependency: [[{ADD}Get list of email templates]]
- → Dependency: [[Printout Template]]
- ← Dependency: [[{MOD}Service Catalog Service - validation]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
