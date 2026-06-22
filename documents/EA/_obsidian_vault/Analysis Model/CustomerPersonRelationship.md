---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person"
domain: "Analysis Model"
element_id: 1813586
diagrams: 2
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 customerPersonRelationship

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person

## 🔗 Connections (5)

- → Dependency: [[employmentInfo]]
- → Dependency: [[safeGuaranty]]
- → Generalization «XSDextension»: [[partyRelationship]]
- ← Dependency: [[safeGuaranty]]
- → Dependency: [[relatedPersonInfo]]

## 📊 Appears In (2 diagrams)

- Logical: customerPersonGetResponse
- Logical: Party

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| numberOfDependents | int |  |
| maritalStatus | stringCodeOrValue |  |
| education | stringCodeOrValue |  |
| housingType | stringCodeOrValue |  |
| politicallyExposedPerson | boolean |  |
| safeGuaranty | safeGuaranty |  |
| statementChannel | string |  |
| employmentInfo | employmentInfo |  |
| relatedPersonInfo | relatedPersonInfo |  |
| isPreferredCallYn | boolean |  |
| isPreferredSmsYn | boolean |  |
