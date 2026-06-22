---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Services (COS_NG)/Analytical Model/Logical Data Model"
domain: "Modules"
element_id: 1869956
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 Loan Service Request

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Services (COS_NG)/Analytical Model/Logical Data Model

## 📝 Notes

General entity of a request for a Loan Service granting (application). The entity is extended by next service request attributes by defied by particular Request Type.

Notice to implementation: 
Loan Service Request is in composition of Contract Service only. Due to data optimization, there can be reference to Contract implemented here.

## 🔗 Connections (4)

- ← Aggregation: [[Loan Service Request Status Transition (Class 1869961)]]
- → Aggregation: [[Contract Service (Class 1869957)]]
- → Dependency: [[Loan Service Request Status Type (Enumeration 1869959)]]
- → Dependency: [[Service Operation Status Type (Enumeration 1869954)]]

## 📊 Appears In (1 diagrams)

- Logical: Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Current Status | Loan Service Request Status Type |  |
| Expiration Date | date |  |
| External ID | string |  |
| Note | text |  |
| Request Type | Service Type |  |
| OverruledEligibilityYN | boolean |  |
| Under MoratoriumYN | boolean |  |
| Service Operation Status | Service Operation Status Type |  |
| Moratorium Length | int |  |
| Request Origination | string |  |
