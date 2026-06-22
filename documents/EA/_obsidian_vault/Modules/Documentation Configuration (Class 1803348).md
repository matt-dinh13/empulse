---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Profile/User Interface"
domain: "Modules"
element_id: 1803348
diagrams: 1
connections: 0
tags:
  - class
  - modules
---

# 🔷 Documentation Configuration

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Profile/User Interface

## 📝 Notes

LDM: ProductProfile.ProductProfile2DocumentationConfiguration.DocumentationConfiguration
In the list is displayed union of Documentation Configurations, which are:
- currently chosen for Product Profile (inactive inclusive),
- active.
Currently chosen configurations are pre-selected.
When saving then all canceled (deselected) assignments (ProductProfile2DocumentationConfiguration) are marked as archived and new assignments are created.
Default order: code, asc.
Localization code: PRF_DocumentationConfiguration

## 📊 Appears In (1 diagrams)

- Custom: Set main Product Profile properties

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| selection | boolean |  |
| code | char |  |
| name | char |  |
| active | boolean |  |
