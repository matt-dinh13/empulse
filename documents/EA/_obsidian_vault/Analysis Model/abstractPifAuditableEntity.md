---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person"
domain: "Analysis Model"
element_id: 1813621
diagrams: 3
connections: 12
tags:
  - class
  - analysis-model
---

# 🔷 abstractPifAuditableEntity

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person

## 🔗 Connections (12)

- ← Generalization «XSDextension»: [[relatedPersonInfo]]
- ← Generalization «XSDextension»: [[{MOD}partyRole]]
- ← Generalization «XSDextension»: [[consent]]
- ← Generalization «XSDextension»: [[employmentInfo]]
- ← Generalization «XSDextension»: [[document (Class 1813622)]]
- ← Generalization «XSDextension»: [[abstractContact]]
- ← Generalization «XSDextension»: [[postalAddress]]
- ← Generalization «XSDextension»: [[party]]
- → Generalization «XSDextension»: [[abstractPifEntity]]
- → Dependency: [[audit (Class 1813598)]]
- ← Generalization «XSDextension»: [[partyRelationship]]
- ← Generalization «XSDextension»: [[status]]

## 📊 Appears In (3 diagrams)

- Logical: customerPersonCreate
- Logical: customerPersonCreateOrUpdate
- Logical: customerPersonUpdate

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| audit | audit |  |
| originationDate | string |  |
| reasonOfChange | string |  |
