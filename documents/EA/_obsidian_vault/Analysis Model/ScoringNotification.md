---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Consumed JMS messages/Scoring notification"
domain: "Analysis Model"
element_id: 1638867
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 ScoringNotification

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Consumed JMS messages/Scoring notification

## 🔗 Connections (4)

- ← Generalization: [[ScoringFailedNotification]]
- ← Generalization: [[ScoringStartedNotification]]
- ← Generalization: [[ScoringPositiveNotification]]
- ← Generalization: [[ScoringNegativeNotification]]

## 📊 Appears In (1 diagrams)

- Logical: ScoringNotification v3

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| evaluationResult | string |  |
| partyIdentifier | string |  |
| processType | string |  |
| externalIdentifier | string |  |
