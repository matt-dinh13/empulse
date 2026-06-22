---
type: Class
stereotype: "Resources"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Salesroom assignment"
domain: "Modules"
element_id: 1873496
diagrams: 2
connections: 4
tags:
  - class
  - modules
---

# 🔷 {ADD}product-assignment

> **Type**: Class · **Stereotype**: «Resources»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Salesroom assignment

## 📝 Notes

{ADD PCG-5594}
For country: PH

https://prc.{environment}/openapi/v1/product-assignment/{productCode}

Input parameters:

	
- productCode: mandatory, URL parameter, string
	
- partnerCode: optional, Query parameter, string
	
- partnerName: optional, Query parameter, string

## 🔗 Connections (4)

- ← Dependency «path»: [[Product catalog API (Class 1873281)]]
- → Dependency: [[{ADD}GET product-assignments]]
- → Dependency: [[{ADD}ProductAssignmentsSearchParameters]]
- → Dependency: [[{ADD}ProductAssignmentsResponse]]

## 📊 Appears In (2 diagrams)

- Logical: Salesroom assignment
- Logical: Salesroom assignment API
