---
type: Class
stereotype: "type"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application cancellation configuration/Logical Data Model"
domain: "Analysis Model"
element_id: 1880191
diagrams: 2
connections: 7
tags:
  - class
  - analysis-model
---

# 🔷 Contract SubStatus

> **Type**: Class · **Stereotype**: «type»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application cancellation configuration/Logical Data Model

## 📝 Notes

This class describes system (i.e. non-business) sub-statuses. In the system, this class is realized as a table with columns STATUS and SUBSTATUS.

## 🔗 Connections (7)

- ← Dependency: [[Application Cancellation Configuration]]
- ← Dependency: [[Application substatus (GUIElement 1590855)]]
- ← Dependency: [[Application substatus]]
- ← Dependency: [[{MOD}Contract (Class 1879596)]]
- ← Dependency: [[Contract SubStatus Transitions]]
- → Association: [[Contract Status Type (Class 1880196)]]
- → Association: [[SubStatus Description Type]]

## 📊 Appears In (2 diagrams)

- Logical: Application Cancellation Configuration
- Logical: Contract - Status

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ACL (Approved with Cross-sell limits (status: In pre-process)) |  |  |
| CF (Client draft (status: In pre-process)) |  |  |
| NPS (Not prepared for sign (status: Approved) |  |  |
| PCI (CIF Identified (status: In pre-process)) |  |  |
| PCM (CIF Manual (status: In pre-process)) |  |  |
| PCW (CIF Waiting (status: In pre-process)) |  |  |
| PDRAFT (Draft (status: In pre-process)) |  |  |
| PLF (LAP Failed to finish (status: In pre-process)) |  |  |
| PLW (LAP waiting (status: In pre-process)) |  |  |
| POG (Offers generated (status: In pre-process)) |  |  |
| PS (Prepared for sign (status: Approved)) |  |  |
| RCI (CIF Identified (status: In process)) |  |  |
| RCM (CIF Manual (status: In process)) |  |  |
| RCW (CIF Waiting (status: In process)) |  |  |
| RLF (LAP Failed to finish (status: In process)) |  |  |
| RLW (LAP waiting (status: In process)) |  |  |
| RLWO (LAP waiting after offers (status: In process)) |  |  |
| ROG (Offers generated (status: In process)) |  |  |
