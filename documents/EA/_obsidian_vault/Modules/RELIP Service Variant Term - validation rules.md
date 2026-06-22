---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/RELIP/User Interface"
domain: "Modules"
element_id: 1275557
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 RELIP Service Variant Term - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/RELIP/User Interface

## 📝 Notes

// Validation of Terms setting at the moment of saving parameters of RELIP service variant

Entity RELIP Service Variant Term.

Term:
- mandatory, integer > 0, unique in scope of superior RELIP Service Variant
(MSG_RELIP_VariantTermTerm)

AIR:
- mandatory, percentage >= 0
(MSG_RELIP_VariantTermAIR)

InitTerm:
- optional, mandatory if InitAIR is defined, integer > 0, InitTerm < Term
(MSG_RELIP_VariantTermInitTerm)

InitAIR:
- optional, mandatory if InitTerm is defined, percentage >= 0, InitAIR < AIR
(MSG_RELIP_VariantTermInitAIR)

PastDueAIR:
- optional, percentage >= 0
(MSG_RELIP_VariantTermPastDueAIR)

PastDueInitAIR:
- optional, enabled only if InitTerm is defined, percentage >= 0
(MSG_RELIP_VariantTermPastDueInitAIR)

## 🔗 Connections (1)

- ← Dependency: [[RELIP Service Variant - validation rules]]

## 📊 Appears In (1 diagrams)

- Custom: Set RELIP Service Variant
