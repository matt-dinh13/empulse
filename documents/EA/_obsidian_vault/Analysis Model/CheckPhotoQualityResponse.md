---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Fingerprints/DOT Adapter (Digital Onboarding Toolkit Adapter)"
domain: "Analysis Model"
element_id: 1638446
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 CheckPhotoQualityResponse

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Fingerprints/DOT Adapter (Digital Onboarding Toolkit Adapter)

## 📝 Notes

Response for person photo quality check.

## 🔗 Connections (3)

- ← Usage: [[CheckQuality]]
- → Dependency: [[Recommendations]]
- → Dependency: [[PhotoQuality]]

## 📊 Appears In (1 diagrams)

- Logical: DOT Adapter API - DOT Adapter Controller

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| croppedImage | string |  |
| photoQuality | string |  |
| errorInfo | string |  |
| recommendations | string |  |
