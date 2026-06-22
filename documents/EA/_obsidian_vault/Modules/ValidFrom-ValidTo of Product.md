---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/COMMON for UI for Product Management/Business Rules"
domain: "Modules"
element_id: 1275107
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 ValidFrom-ValidTo of Product

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/COMMON for UI for Product Management/Business Rules

## 📝 Notes

Validations:

	
- Valid From is mandatory.
MSG_5040 (e. g. Mandatory field {0} is empty!)
	
- Valid From >= TODAY if does not exist active version of the product.
MSG_ProductValidToTODAY  (e. g. Product validity must start at least from today.)
	
- Valid To >= Valid From or empty.
MSG_ProductValidFromValidTo (e. g. End of product validity must be greater than start.)

## 📊 Appears In (1 diagrams)

- Custom: Product setting common rules
