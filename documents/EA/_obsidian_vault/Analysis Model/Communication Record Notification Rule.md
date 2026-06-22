---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/Logical Data Model"
domain: "Analysis Model"
element_id: 1646123
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Communication Record Notification Rule

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/Logical Data Model

## 📝 Notes

The entity holds a country configuration determining for which combination of communication channel and communication status combination a notifications about newly created communication records will be sent.

## 🔗 Connections (2)

- → Dependency: [[Communication Channel]]
- → Dependency: [[Communication Status]]

## 📊 Appears In (1 diagrams)

- Logical: Communication record notification setting

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Communication Channel Code | Communication Channel |  |
| Communication Status Code | Communication Status |  |
| Active Flag | Boolean |  |
