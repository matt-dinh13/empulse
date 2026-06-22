---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/GetFinancingPackage"
domain: "Modules"
element_id: 1197886
diagrams: 3
connections: 3
tags:
  - class
  - modules
---

# 🔷 VersionData

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/GetFinancingPackage

## 📝 Notes

Detailed information about version of versioned entity

## 🔗 Connections (3)

- → Dependency: [[Version Status]]
- ← Dependency: [[ResultGetFinancingScheme]]
- ← Dependency: [[ResultGetFinancingPackage]]

## 📊 Appears In (3 diagrams)

- Logical: GetFinancingPackage
- Logical: GetFinancingScheme
- Logical: Versioned entity

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| versionStatus | Version Status |  |
| creationDate | DateTime |  |
| createdBy | User |  |
| plannedActivationDate | DateTime |  |
| activationDate | DateTime |  |
| activatedBy | User |  |
| terminationDate | DateTime |  |
| terminatedBy | User |  |
