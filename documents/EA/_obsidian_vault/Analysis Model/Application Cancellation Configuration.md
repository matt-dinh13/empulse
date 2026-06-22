---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application cancellation configuration/Logical Data Model"
domain: "Analysis Model"
element_id: 1587742
diagrams: 1
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 Application Cancellation Configuration

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application cancellation configuration/Logical Data Model

## 📝 Notes

Configurable rules for automatic application cancellation job.

## 🔗 Connections (6)

- → Dependency: [[Contract Status Transitions Reasons]]
- → Dependency: [[Contract SubStatus]]
- → Dependency: [[Contract Status Type (Class 1880196)]]
- → Dependency: [[Cancellation Period Starting Moment]]
- → Dependency: [[Product Type (Enumeration 1879104)]]
- → Dependency: [[Application Creation Channel]]

## 📊 Appears In (1 diagrams)

- Logical: Application Cancellation Configuration

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Application Status | Contract Status Type |  |
| Application SubStatus | Contract SubStatus |  |
| Application Type | Product Type |  |
| Application Creation Channel | Application Creation Channel |  |
| Product Profile Code | string |  |
| Cancellation Period Starting Moment | Cancellation Period Starting Moment |  |
| Cancellation Period Length | int |  |
| Cancellation Reason | Contract Status Transitions Reasons |  |
| Archived | boolean |  |
