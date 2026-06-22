---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Use Case"
domain: "Modules"
element_id: 1208895
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 GetVersionedEntity - search filter

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Use Case

## 📝 Notes

//This algorithm defines searching rules for Versioned Entity according to defined Criterion
VE = Versioned Entity

	
- Criterion.type = CODE (more such criteria can be defined)
If exists such criterion then system finds VE where VE.Code = Criterion.value for at least one criterion where Criterion.type = CODE
	
- Criterion.type = VERSION_NUMBER (more such criteria can be defined)
If exists such criterion then system finds VE where VE.VersionNumber = Criterion.value for at least one criterion where Criterion.type = VERSION_NUMBER


	
- Criterion.type = VERSION_STATUS (more such criteria can be defined)
If exists such criterion then system finds VE where VE.VersionStatus = Criterion.value for at least one criterion where Criterion.type = VERSION_STATUS
	
- Criterion.type = VERSION_ACTIVATED_FROM
If exists such criterion then system finds VE where VE.ActivationDate >= Criterion.value


	
- Criterion.type = VERSION_ACTIVATED_TO
If exists such criterion then system finds VE where VE.ActivationDate <= Criterion.value


	
- Criterion.type = NAME
If exists such criterion then system finds VE where UpperCase(Criterion.value) is in UpperCase(VE.name)

## 🔗 Connections (2)

- ← Dependency: [[GetFinancingPackage - search filter]]
- ← Dependency: [[GetFinancingScheme - search filter]]

## 📊 Appears In (2 diagrams)

- Use Case: Financing Package UC
- Use Case: Financing Scheme Management UC
