---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Use Case"
domain: "Modules"
element_id: 1269869
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 GetVersionedEntityCriterionValue - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Use Case

## 📝 Notes

// Validation of search criterions (type, value) related to versioned entity

	
- For type in (VERSION_NUMBER) the value can be converted into integer data type.
For type in (VERSION_ACTIVATED_FROM, VERSION_ACTIVATED_TO) the value can be converted into date time data type.
[INVALID_CRITERIONVALUE].


	
- Criterion of type in (NAME, VERSION_ACTIVATED_FROM, VERSION_ACTIVATED_TO) must be unique (i.e. can not be defined more than once in the set of criteria).
[NOTUNIQUE_CRITERIONTYPE].

## 🔗 Connections (2)

- ← Dependency: [[GetFinancingSchemeRequest - validation rules]]
- ← Dependency: [[GetFinancingPackageRequest - validation rules]]

## 📊 Appears In (2 diagrams)

- Use Case: Financing Package UC
- Use Case: Financing Scheme Management UC
