---
type: Requirement
stereotype: "Validate"
package: ""
domain: "_Uncategorized"
element_id: 1753470
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 At least one reference must be filled

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: N/A

## 📝 Notes

Both <ddmReference> and <contractReference> are optional, but its required at least one of attributes <ddmReference> or <contractReference> to be filled in. These attributes are needed to find appropriate DDM. If validation fails message MSG_AT_LEAST_ONE_REFERNCE is add to errors.
