---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Bundles"
domain: "Modules"
element_id: 1843573
diagrams: 2
connections: 3
tags:
  - class
  - modules
---

# 🔷 {ADD}BundleSearchParametersDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Bundles

## 📝 Notes

{ADD PCG-4926/}
Search parameters for bundle

## 🔗 Connections (3)

- → Dependency: [[{ADD}ServiceTypePreferencesDto]]
- ← Dependency: [[{ADD}search]]
- → Dependency: [[{ADD}ServicePreferencesDto]]

## 📊 Appears In (2 diagrams)

- Logical: Bundles
- Logical: BundleSearchParametersDto

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
| validOn | date |  |
| onlyFinalVersion | boolean |  |
| servicePreferences | {ADD}ServicePreferencesDto |  |
| serviceTypePreferences | {ADD}ServiceTypePreferencesDto |  |
