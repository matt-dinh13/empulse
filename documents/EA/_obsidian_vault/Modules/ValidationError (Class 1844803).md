---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Modules/Commodity/Interface Provided/Commodity API/Commodity"
domain: "Modules"
element_id: 1844803
diagrams: 9
connections: 7
tags:
  - class
  - modules
---

# 🔷 ValidationError

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Modules/Commodity/Interface Provided/Commodity API/Commodity

## 🔗 Connections (7)

- ← Dependency: [[commodityCategoryResult]]
- ← Dependency: [[ValidationRuleResult]]
- ← Dependency: [[CommodityTypeResult]]
- ← Dependency: [[validationDataResult]]
- ← Dependency: [[PartnerSchemeResponse]]
- → Dependency: [[LocalizedString (Class 1844806)]]
- ← Dependency: [[CommodityResult]]

## 📊 Appears In (9 diagrams)

- Logical: commodities
- Logical: commodities-validation
- Logical: commodities-validation-cancelation
- Logical: Commodity Category
- Logical: Commodity Type
- Logical: Commodity Validation Data
- Logical: COMMON for Commodity REST API
- Logical: Partner Scheme
- Logical: Validation Rule

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| entityCode | string |  |
| propertyId | string |  |
| errorCode | string |  |
| message | localizedString |  |
