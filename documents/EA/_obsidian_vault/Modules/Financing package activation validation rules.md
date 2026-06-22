---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Financing Packages/Validation Rules"
domain: "Modules"
element_id: 1865434
diagrams: 2
connections: 4
tags:
  - requirement
  - modules
---

# 📋 Financing package activation validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Financing Packages/Validation Rules

## 📝 Notes

Validations processed before activation of product version. 

	
- If Product catalog Application properties.partner-scheme = true system check if Partner scheme code exists for financing package, obtaining it by Get partner scheme code with attributes financingPackageCode = FinancingPackage.code. If no partner scheme code is returned then warning is displayed.

## 🔗 Connections (4)

- ← Dependency: [[POST financing package]]
- ← Dependency: [[PUT financing package]]
- ← Dependency: [[PUT financing package activations]]
- → Dependency: [[Get partner scheme code]]

## 📊 Appears In (2 diagrams)

- Custom: Validation Rules
- Use Case: Use Case
