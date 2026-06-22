---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Consumed JMS messages/Party notifications"
domain: "Analysis Model"
element_id: 1036813
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 partyRoleNotification

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Consumed JMS messages/Party notifications

## 🔗 Connections (4)

- → Dependency: [[projections]]
- → Dependency: [[partyRoleType]]
- → Dependency: [[antecedentSuccedentPartyRole]]
- ← Dependency: [[roles]]

## 📊 Appears In (1 diagrams)

- Logical: Party-notification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| internalId | long |  |
| externalId | long |  |
| type | party:partyRoleType |  |
| antecedentSuccedentPartyRole | antecedentSuccedentPartyRole |  |
| projections | projections |  |
