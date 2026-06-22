---
type: Requirement
stereotype: "Validate"
package: ""
domain: "_Uncategorized"
element_id: 1753484
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 VAL_0517_Corresponding_DDS_exists

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: N/A

## 📝 Notes

The older specification does not exist. 
Search for an appropriate Direct Debit Mandate is proceed in the following order:
externalReference,
ddmReference,
contractReference.
If some reference is not empty and a corresponding DDM is not found, system does not continue with the next reference and the DDS is not imported.
