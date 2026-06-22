---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person"
domain: "Analysis Model"
element_id: 1621012
diagrams: 4
connections: 7
tags:
  - class
  - analysis-model
---

# 🔷 abstractCustomerPersonRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person

## 🔗 Connections (7)

- → Dependency: [[customerPerson]]
- ← Generalization «XSDextension»: [[customerPersonCreateOrUpdateRequest]]
- ← Generalization «XSDextension»: [[customerPersonIdentifyRequest]]
- ← Generalization «XSDextension»: [[customerPersonMergeRequest]]
- ← Generalization «XSDextension»: [[customerPersonUpdateRequest]]
- ← Generalization «XSDextension»: [[customerPersonSplitRequest]]
- ← Generalization «XSDextension»: [[customerPersonCreateRequest]]

## 📊 Appears In (4 diagrams)

- Logical: customerPersonCreate
- Logical: customerPersonCreateOrUpdate
- Logical: customerPersonIdentify
- Logical: customerPersonUpdate

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| customerPerson | customerPerson |  |
