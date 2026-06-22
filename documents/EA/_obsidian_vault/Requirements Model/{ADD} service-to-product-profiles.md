---
type: Class
stereotype: "Resources"
package: "HomerSelect/BSL/Requirements Model/In process/PCG/ID/PCG-5343 Display vas add on offers based on specific product type (CBL-29025)"
domain: "Requirements Model"
element_id: 1864957
diagrams: 3
connections: 9
tags:
  - class
  - requirements-model
---

# 🔷 {ADD} service-to-product-profiles

> **Type**: Class · **Stereotype**: «Resources»
> **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/ID/PCG-5343 Display vas add on offers based on specific product type (CBL-29025)

## 📝 Notes

{ADD PCG-5343}
For country: ID
https://prc.{environment}/openapi/v1/service-to-product-profiles
{/ADD}

## 🔗 Connections (9)

- → Realisation: [[{ADD} POST service-to-product-profiles]]
- → Realisation: [[PUT manufacturers]]
- → Realisation: [[POST marketing action]]
- → Realisation: [[{ADD} GET service-to-product-profiles]]
- → Realisation: [[{ADD} DELETE service-to-product-profiles]]
- → Realisation: [[GET marketing-actions]]
- → Dependency: [[{ADD} ServiceToProductProfilesDto]]
- → Dependency: [[{ADD} ServiceToProductProfilesResponse]]
- ← Dependency «path»: [[Product catalog API (Class 1873281)]]

## 📊 Appears In (3 diagrams)

- Custom: PCG-5343 Display vas add on offers based on specific product type (CBL-29025)
- Logical: Service to Product profile
- Logical: Service to Product profile API
