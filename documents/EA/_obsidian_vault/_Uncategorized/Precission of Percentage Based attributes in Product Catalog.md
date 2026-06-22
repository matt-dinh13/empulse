---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1844979
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 Precission of Percentage Based attributes in Product Catalog

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

Precission of attributes representing percentage or coefficient in Product catalog (Loan Products, Loan Services, Tariffs) will be set according to following rules:

	
- It will be possible to keep values with precission to 4 decimal places.
	
- Value will be displayed with precission  4 decimal places in GUI for the whole BSL system.
	
- For entering of percentage and coefficient values will be used mask with just 4 decimal places and up to 4 places left to decimal point. It is not possible to enter value > 9999.9999.
Example of displaying of values:
0 -> “0.0000”
1234.56 -> “1234.5600”
34.5 -> “34.5000"
