---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Commodity/Interface Provided/Commodity API/Validation Rule"
domain: "Modules"
element_id: 1633286
diagrams: 1
connections: 6
tags:
  - class
  - modules
---

# 🔷 ValidationRule

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Commodity/Interface Provided/Commodity API/Validation Rule

## 🔗 Connections (6)

- → Dependency: [[{MOD}Commodity Validation Type]]
- → Dependency: [[ValidationRuleCriteria]]
- ← Dependency: [[ValidationRuleResult]]
- → Dependency: [[Commodity Validation External Type (Class 1744497)]]
- ← Dependency: [[validation-rules]]
- ← Dependency: [[validation-rules]]

## 📊 Appears In (1 diagrams)

- Logical: Validation Rule

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | int |  |
| criteria | ValidationRuleCriteria |  |
| externalType | string |  |
| name | string |  |
| order | int |  |
| type | string |  |
| validFrom | string |  |
| validTo | string |  |
