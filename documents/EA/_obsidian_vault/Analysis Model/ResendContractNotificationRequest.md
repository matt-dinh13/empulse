---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Contract Maintenance/v1.0/Contract Notifications"
domain: "Analysis Model"
element_id: 1833199
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ResendContractNotificationRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Contract Maintenance/v1.0/Contract Notifications

## 📝 Notes

POST request parameters for .../resendcontractnotification

## 🔗 Connections (3)

- → Dependency: [[RequestSourceId (Class 1833201)]]
- → Dependency: [[ContractRequired]]
- ← Dependency: [[contractnotifications]]

## 📊 Appears In (1 diagrams)

- Logical: Contract Notifications

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contracts | ContractRequired |  |
| requestSourceId | RequestSourceId |  |
