---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person"
domain: "Analysis Model"
element_id: 1621010
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 customerPersonCreateOrUpdateRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person

## 🔗 Connections (4)

- ← Dependency: [[PartyWS]]
- → Dependency: [[createOptions]]
- → Dependency: [[roleUpdateMode]]
- → Generalization «XSDextension»: [[abstractCustomerPersonRequest]]

## 📊 Appears In (2 diagrams)

- Logical: customerPersonCreateOrUpdate
- Logical: PartyWS-Person

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| mode | roleUpdateMode |  |
| createOptions | createOptions |  |
