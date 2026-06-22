---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Fingerprints/DOT Adapter (Digital Onboarding Toolkit Adapter)"
domain: "Analysis Model"
element_id: 1638443
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 CompareCabinetPhotoResult

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Fingerprints/DOT Adapter (Digital Onboarding Toolkit Adapter)

## 📝 Notes

Result of person photos (from Cabinet) comparing.

## 🔗 Connections (3)

- → Dependency: [[Status (Enumeration 1638448)]]
- ← Dependency: [[CompareCabinetPhotoResponse]]
- ← Dependency: [[CompareCabinetPhotoResponse]]

## 📊 Appears In (1 diagrams)

- Logical: DOT Adapter API - DOT Adapter Controller

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| errorMessage | string |  |
| id | string |  |
| match | number |  |
| passiveLiveness | number |  |
| quality | number |  |
| status | string |  |
