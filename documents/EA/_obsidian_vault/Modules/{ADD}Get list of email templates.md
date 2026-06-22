---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Consumed/STM API/Business Rules"
domain: "Modules"
element_id: 1698158
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {ADD}Get list of email templates

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Consumed/STM API/Business Rules

## 📝 Notes

{ADD PCG-3626/}
List of available Email templates is retrieved from external module (Statement management) by REST service call with GET request: Statement (STM) /statements/emailTemplateServiceValues

## 🔗 Connections (2)

- → Dependency: [[{ADD}Statement (STM)]]
- ← Dependency: [[ACCSTMT service parameter validation]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Custom: Validation Rules
