---
type: Class
stereotype: "Resource"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Fingerprints/DOT Adapter (Digital Onboarding Toolkit Adapter)"
domain: "Analysis Model"
element_id: 1638455
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 CheckPhotoQualityRequest

> **Type**: Class · **Stereotype**: «Resource»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Fingerprints/DOT Adapter (Digital Onboarding Toolkit Adapter)

## 📝 Notes

Request for person photo quality check.

## 🔗 Connections (2)

- → Dependency: [[PhotoQualityRequestConfiguration]]
- ← Dependency: [[CheckQuality]]

## 📊 Appears In (1 diagrams)

- Logical: DOT Adapter API - DOT Adapter Controller

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| photo | string |  |
| photoQualityRequestConfiguration | PhotoQualityRequestConfiguration |  |
