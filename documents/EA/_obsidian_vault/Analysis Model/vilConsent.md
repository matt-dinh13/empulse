---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/VIL consent"
domain: "Analysis Model"
element_id: 1545286
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 vilConsent

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/VIL consent

## 🔗 Connections (3)

- → Dependency: [[PartnerType]]
- ← Dependency «use»: [[vilConsents]]
- → Dependency: [[ConsentStatus]]

## 📊 Appears In (1 diagrams)

- Logical: VIL consent

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contactNumber | string |  |
| partner | PartnerType |  |
| hboEligible | string |  |
| circleId | string |  |
| offerId | string |  |
| status | string |  |
| consent_status | ConsentStatus |  |
